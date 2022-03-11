import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import type { RequestConfig, RequestInterceptors } from './type'
import showCodeMessage from './code'

class Request {
  instance: AxiosInstance

  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors

    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 全局请求拦截器
        return config
      },
      (err: Error | AxiosError) => err
    )

    this.instance.interceptors.request.use(
      // 实例请求拦截器
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      // 实例响应拦截器
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 全局响应拦截器
        if (res.status === 200) {
          return res.data
        }
        ElMessage.error(JSON.stringify(res.status))
      },
      (err: AxiosError | Error) => {
        const { response } = <AxiosError>err
        if (response) {
          ElMessage.error(showCodeMessage(response.status))
          return Promise.reject(response.data)
        }
        ElMessage.warning('网络连接异常,请稍后再试!')
        return Promise.reject(err)
      }
    )
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<T, any>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res)
          }

          resolve(res)
        })
        .catch((err: Error | AxiosError) => {
          reject(err)
        })
    })
  }
}

export default Request

import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Canceler
} from 'axios'
import type { RequestConfig, RequestInterceptors } from './type'
import showCodeMessage from './code'

class Request {
  instance: AxiosInstance

  interceptorsObj?: RequestInterceptors

  pendingRequestSourceMap: Map<string, Canceler>

  constructor(config: RequestConfig) {
    config.isCancelRepeatRequest = false

    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    this.pendingRequestSourceMap = new Map()

    this.instance.interceptors.request.use(
      (config: RequestConfig) => {
        // 全局请求拦截器
        this.removePending(config)
        if (config.isCancelRepeatRequest) {
          this.addPending(config)
        }
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
        this.removePending(res.config)
        // 全局响应拦截器
        if (res.status === 200) {
          return res.data
        }
        ElMessage.error(JSON.stringify(res.status))
      },
      (err: AxiosError | Error | Canceler) => {
        const { response, config } = <AxiosError>err
        config && this.removePending(config)
        if (response) {
          ElMessage.error(showCodeMessage(response.status))
          return Promise.reject(response.data)
        }
        !axios.isCancel(err) &&
          ElMessage.warning('网络连接异常或重复请求接口,请稍后再试!')
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

  /**
   * 生成每个请求唯一的键
   * @param {*} config
   * @returns string
   */
  getPendingKey(config: RequestConfig | AxiosRequestConfig): string {
    const { url, method, params } = config
    let { data } = config
    if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
    return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
  }

  /**
   * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
   * @param {*} config
   */
  addPending(config: RequestConfig | AxiosRequestConfig): void {
    const pendingKey = this.getPendingKey(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken(cancel => {
        if (!this.pendingRequestSourceMap.has(pendingKey)) {
          this.pendingRequestSourceMap.set(pendingKey, cancel)
        }
      })
  }

  /**
   * 删除重复的请求
   * @param {*} config
   */
  removePending(config: RequestConfig | AxiosRequestConfig) {
    const pendingKey = this.getPendingKey(config)
    if (this.pendingRequestSourceMap.has(pendingKey)) {
      const cancelToken = this.pendingRequestSourceMap.get(pendingKey)
      cancelToken && cancelToken(pendingKey)
      this.pendingRequestSourceMap.delete(pendingKey)
    }
  }

  // 取消全部请求
  cancelAllRequest(): void {
    this.pendingRequestSourceMap?.forEach((source, key) => {
      source(key)
    })
  }
}

export default Request

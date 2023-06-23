import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  Canceler
} from 'axios'
import type {
  CreateRequestConfig,
  RequestConfig,
  RequestInterceptors
} from './type'
import showCodeMessage from './code'

class Request {
  instance: AxiosInstance

  interceptorsObj?: RequestInterceptors<AxiosResponse>

  // 取消请求控制器
  pendingRequestSourceMap: Map<string, Canceler>

  constructor(config: CreateRequestConfig) {
    config.isCancelRepeatRequest = true // 是否开启取消重复请求, 默认为 true

    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    this.pendingRequestSourceMap = new Map()

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    // 全局请求拦截器
    this.instance.interceptors.request.use(
      res => {
        console.log('全局请求拦截')
        this.removePending(res)
        if (config.isCancelRepeatRequest) {
          this.addPending(res)
        }
        return res
      },
      (err: Error | AxiosError) => err
    )

    // 实例请求拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )

    // 实例响应拦截器
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        this.removePending(res.config)
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
        !axios.isCancel(err) && ElMessage.warning('网络连接异常,请稍后再试!')
        return Promise.reject(err)
      }
    )
  }

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config as any)
      }
      this.instance
        .request<T, any>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
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
    this.pendingRequestSourceMap.clear()
  }
}

export default Request

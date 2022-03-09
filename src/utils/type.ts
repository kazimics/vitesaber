import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface RequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: Error | AxiosError) => Error | AxiosError

  responseInterceptors?: <T = AxiosResponse>(config: T) => T
  responseInterceptorsCatch?: (err: Error | AxiosError) => Error | AxiosError
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}

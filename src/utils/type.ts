import type {
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'

export interface RequestInterceptors<T> {
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestInterceptorsCatch?: (err: Error | AxiosError) => Error | AxiosError

  responseInterceptors?: (config: T) => T
  responseInterceptorsCatch?: (err: Error | AxiosError) => Error | AxiosError
}

export interface CreateRequestConfig<T = AxiosResponse>
  extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors<T>
  isCancelRepeatRequest?: boolean
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  isCancelRepeatRequest?: boolean
}

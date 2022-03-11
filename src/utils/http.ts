import Request from './request'

export const defHttp = new Request({
  baseURL: '/api',
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json'
  },
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => {
      return config
    },
    // 响应拦截器
    responseInterceptors: result => {
      return result
    }
  }
})

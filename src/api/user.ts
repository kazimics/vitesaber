import { defHttp } from '@/utils/http'
import type { PrivateUser, PublicUser } from './model/user'

export function getGithubInfo(
  username: string
): Promise<PrivateUser | PublicUser> {
  return defHttp.request({
    url: `/users/${username}`,
    method: 'get',
    interceptors: {
      requestInterceptors(res) {
        console.log('接口请求拦截', res)
        return res
      },
      responseInterceptors(result) {
        console.log('接口响应拦截', result)
        return result
      }
    }
  })
}

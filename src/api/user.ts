import { defHttp } from '@/utils/http'
import type { PrivateUser, PublicUser } from './model/user'

export function getGithubInfo(
  username: string
): Promise<PrivateUser | PublicUser> {
  return defHttp.request({
    url: `/users/${username}`,
    method: 'get',
    isCancelRepeatRequest: true,
    interceptors: {
      requestInterceptors(res) {
        return res
      },
      responseInterceptors(result) {
        return result
      }
    }
  })
}

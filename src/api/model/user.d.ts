export type Users = Array<User>

/**
 *
 * @export
 * @interface PublicUserPlan
 */
export interface PublicUserPlan {
  /**
   *
   * @type {number}
   * @memberof PublicUserPlan
   */
  collaborators: number
  /**
   *
   * @type {string}
   * @memberof PublicUserPlan
   */
  name: string
  /**
   *
   * @type {number}
   * @memberof PublicUserPlan
   */
  space: number
  /**
   *
   * @type {number}
   * @memberof PublicUserPlan
   */
  private_repos: number
}

/**
 * Private User
 * @export
 * @interface PrivateUser
 */
export interface PrivateUser {
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  login: string
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  id: number
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  node_id: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  avatar_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  gravatar_id: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  html_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  followers_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  following_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  gists_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  starred_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  subscriptions_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  organizations_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  repos_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  events_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  received_events_url: string
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  type: string
  /**
   *
   * @type {boolean}
   * @memberof PrivateUser
   */
  site_admin: boolean
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  name: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  company: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  blog: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  location: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  email: string | null
  /**
   *
   * @type {boolean}
   * @memberof PrivateUser
   */
  hireable: boolean | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  bio: string | null
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  twitter_username?: string | null
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  public_repos: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  public_gists: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  followers: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  following: number
  /**
   *
   * @type {Date}
   * @memberof PrivateUser
   */
  created_at: Date
  /**
   *
   * @type {Date}
   * @memberof PrivateUser
   */
  updated_at: Date
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  private_gists: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  total_private_repos: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  owned_private_repos: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  disk_usage: number
  /**
   *
   * @type {number}
   * @memberof PrivateUser
   */
  collaborators: number
  /**
   *
   * @type {boolean}
   * @memberof PrivateUser
   */
  two_factor_authentication: boolean
  /**
   *
   * @type {PublicUserPlan}
   * @memberof PrivateUser
   */
  plan?: PublicUserPlan
  /**
   *
   * @type {Date}
   * @memberof PrivateUser
   */
  suspended_at?: Date | null
  /**
   *
   * @type {boolean}
   * @memberof PrivateUser
   */
  business_plus?: boolean
  /**
   *
   * @type {string}
   * @memberof PrivateUser
   */
  ldap_dn?: string
}

/**
 * Public User
 * @export
 * @interface PublicUser
 */
export interface PublicUser {
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  login: string
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  id: number
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  node_id: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  avatar_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  gravatar_id: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  html_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  followers_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  following_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  gists_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  starred_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  subscriptions_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  organizations_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  repos_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  events_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  received_events_url: string
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  type: string
  /**
   *
   * @type {boolean}
   * @memberof PublicUser
   */
  site_admin: boolean
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  name: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  company: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  blog: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  location: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  email: string | null
  /**
   *
   * @type {boolean}
   * @memberof PublicUser
   */
  hireable: boolean | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  bio: string | null
  /**
   *
   * @type {string}
   * @memberof PublicUser
   */
  twitter_username?: string | null
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  public_repos: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  public_gists: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  followers: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  following: number
  /**
   *
   * @type {Date}
   * @memberof PublicUser
   */
  created_at: Date
  /**
   *
   * @type {Date}
   * @memberof PublicUser
   */
  updated_at: Date
  /**
   *
   * @type {PublicUserPlan}
   * @memberof PublicUser
   */
  plan?: PublicUserPlan
  /**
   *
   * @type {Date}
   * @memberof PublicUser
   */
  suspended_at?: Date | null
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  private_gists?: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  total_private_repos?: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  owned_private_repos?: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  disk_usage?: number
  /**
   *
   * @type {number}
   * @memberof PublicUser
   */
  collaborators?: number
}

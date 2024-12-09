import { appFetch } from '@/shared/api'

export const getMe = async () => {
  // const user = null
  return appFetch('api/users/me')
  // const user = await appFetch('api/users/me')
  // const token = await getToken();
  // return appFetch("api/users/me", { headers: { Authorization: `JWT ${token}` } });
  // return user
}

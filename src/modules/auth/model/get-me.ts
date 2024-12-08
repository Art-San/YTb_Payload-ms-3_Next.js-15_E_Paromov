import { appFetch } from '@/shared/api'

export const getMe = async () => {
  const user = null
  // const user = await appFetch('api/users/me')
  // const token = await getToken();
  // return appFetch("api/users/me", { headers: { Authorization: `JWT ${token}` } });
  return user
}

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
import { appFetch } from '@/shared/api'

export const getAppPayload = () => getPayload({ config })

export const getToken = async () => {
  return (await cookies()).get('payload-token')?.value
}

export const getMe = async () => {
  const token = await getToken()
  return appFetch('api/users/me', {
    headers: { Authorization: `JWT ${token}` }
  })
}

// export const checkAuth = async () => {
//   const token = await getToken()
//   console.log('===token===', token)
//   if (!token) return false

//   // Возвращаемый результат будет представлять собой логическое значение, представляющее успех или неудачу.
//   return (await getAppPayload()).verifyEmail({
//     collection: 'users', // required
//     token // токен, сохраненный у пользователя как `_verificationToken`
//   })
// }

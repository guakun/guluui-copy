import Cookies from 'js-cookie'
import cookieExpires from '@conf/app/basic'

const TOKEN_KEY = 'token'

export const setToken = token => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}
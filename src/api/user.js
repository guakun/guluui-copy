import axios from '@libs/api.request'

export const login = (userName, password) => {
  const data = {userName, password}
  return axios.request({ url: 'login', data, methods: 'post' })
}

export const getUserInfo = (token) => {
  return axios.request({url: 'get_info', params: {token}, methods: 'get'})
}
import {login, getUserInfo} from '@api/user'
import {setToken, getToken} from '@libs/util'

export default {
  handleLogin({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password })
        .then(res => {
          const data = res.data
          setToken(data.token)
          commit('setAvatar', data.avatar)
          resolve()
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  getUserInfo({ state, commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then(res => {
          const data = res.data
          commit('setAvatar', data.avatar)
          commit('setUserName', data.user_name)
          commit('setUserId', data.user_id)
          resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}

import Axios from 'axios'
import baseURL from '@conf/app/url'
import { Message } from 'iview'
import Cookie from 'js-cookie'

class httpRequest {
  constructor () {
    this.options = {
      methods: '',
      url: ''
    }
    this.queue = {}
  }

  destory (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      if (!config.url.includes('/users')) {
        config.header['x-accsess-token'] = Cookies.get('d_tk')
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      let {data} = res
      const is = this.destory(url)
      if (!is) {
        setTimeout(()=>{}, 500)
      }
      if (!(data instanceof Blob)) {
        if (data.code !== 200) {
          if (data.code === 401) {
            Cookies.remove('d_tk')
            window.location.href = '/#/login'
            Message.error('请重新登录')
          } else {
            if (data.msg) Message.error(data.msg)
          }
          return false
        }
      }
      return data
    }, error => {
      Message.error('服务端崩了呀')
      return Promise.reject(error)
    })
  }

  create () {
    let conf = {
      baseURL: baseURL,
      // timeout: 3000
      headers: {
        'Content-type': 'application/json; charset=utf-8',
        'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }

  request (options) {
    let instance = this.create()
    this.interception(instanse, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}

export default httpRequest
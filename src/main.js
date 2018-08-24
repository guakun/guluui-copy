import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@style/iview-theme.less'
import '@style/index.scss'

Vue.config.productionTip = false

Vue.use(iView)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 自定义指令
Vue.directive('longpress', {
  bind: (el, binding, vNode) => {
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[longpress:] provided expression '${binding.expression}' is not a function,
      but has to be.`
      if (compName) { warn += `Found in component '${compName}'` }
      console.warn(warn)
    }
    let pressTimer = null
    let start = (event) => {
      // 鼠标左键点击
      if (event.type === 'click' && event.button !== 0) {
        return
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler()
        }, 1000)
      }
    }
    let cancel = (event) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer)
        pressTimer = null
      }
    }
    const handler = (event) => {
      binding.value(event)
    }
    el.addEventListener('mousedown', start)
    el.addEventListener('touchstart', start)
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', start)
    el.addEventListener('touchcancel', start)
  }
})

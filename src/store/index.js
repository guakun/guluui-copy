import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)

let plugins = []

process.env.NODE_ENV !== 'production' && plugins.push(createLogger())

const store = new Vuex.Store({
  modules: modules,
  plugins: plugins,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
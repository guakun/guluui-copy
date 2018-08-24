import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index/Index.vue'
import Group from './views/Index/Group.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录 - gulu'
      },
    },
    {
      path: '/',
      redirect: { name: 'task' }
    },
    {
      path: '/mall',
      name: 'mall',
      redirect: { name: 'mallIndex' },
      component: () => import('@views/Index/Layout'),
      children: [
        {
          path: '/mall/index',
          name: 'mallIndex',
          component: Index
        },
        {
          path: '/mall/group/:id',
          name: 'mallGroup',
          component: Group
        }
      ]
    },
    {
      path: '/task',
      name: 'task',
      component: () => import(/* webpackChunkName: "about" */ './views/Task.vue')
    },
    {
      path: '/asset',
      name: 'asset',
      component: () => import(/* webpackChunkName: "about" */ './views/Asset.vue')
    },
    {
      path: '/Admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue')
    }
  ]
})

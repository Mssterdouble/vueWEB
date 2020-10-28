import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: '/main',
      component: () => import('@/pages/main')
    },
    {
      name: '首页',
      path: '/main',
      component: () => import('@/pages/main')
    },
    {
      name: '介绍',
      path: '/game',
      component: () => import('@/pages/game')
    },
    {
      name: '我的',
      path: '/mine',
      component: () => import('@/pages/mine')
    }
  ]
})

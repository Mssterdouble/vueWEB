import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: '技能',
      path: '/menu',
      component: () => import('@/pages/menu')
    },
    {
      name: '我的',
      path: '/mine',
      component: () => import('@/pages/mine')
    }
  ]
})

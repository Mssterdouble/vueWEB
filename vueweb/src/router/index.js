import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: '/Main',
      component: () => import('@/pages/main')
    },
    {
      name: 'Main',
      path: '/main',
      component: () => import('@/pages/main')
    },
    {
      name: 'Intrduce',
      path: '/game',
      component: () => import('@/pages/game')
    },
    {
      name: 'Mine',
      path: '/mine',
      component: () => import('@/pages/mine')
    },
    {
      name: 'Test',
      path: '/test',
      component: () => import('@/pages/test')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import mRouters from './routers'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // mode: 'hash',
  routes: [
    ...mRouters
  ]
})

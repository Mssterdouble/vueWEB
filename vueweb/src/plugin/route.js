import Router from '../router'
import Vue from '../main'

const mRouter = {
  push (routerName,param) {
    Router.push({name:routerName,params: param})
  },
  replace (routerName,param) {
    Router.replace({name:routerName,params: param})
  },
  goback () {
    Router.back(-1)
  },
  getNavigatorParams () {
    return Vue.$route.params
  }
}
export default mRouter

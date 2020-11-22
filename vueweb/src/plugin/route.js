import Router from '../router'

const mRouter = {
  push (routerName,param) {
    Router.push({name:routerName,params: param})
  },
  replace (routerName,param) {
    Router.replace({name:routerName,params: param})
  },
  goback () {
    Router.back(-1)
  }
}
export default mRouter

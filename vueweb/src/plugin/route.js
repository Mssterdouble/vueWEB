import Router from '../router'

const zglRouter = {
  push (routerName,param) {
    Router.push({name:routerName,params: param})
  }
}
export default zglRouter

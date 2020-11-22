import Vue from '../main'

const mUtils = {
  // 获取 vue 路由传参
  getNavigatorParams () {
    return Vue.$route.params
  },

  // 获取URL传参
  getUrlQuaryParams () {
    return window.location.href.split("?")[1]
  }
}

export default mUtils
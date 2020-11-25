import Vue from '../main'
import mEncrpty from 'js-md5'

const mUtils = {
  // 获取 vue 路由传参
  getNavigatorParams () {
    return Vue.$route.params
  },

  // 获取URL传参
  getUrlQuaryParams () {
    return window.location.href.split("?")[1]
  },

  // md5加密
  encrpty (str,key) {
    return mEncrpty(str + "" + key)
  }
}

export default mUtils
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from "@/components/common/index"
import './assets/iconfont/iconfont'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import zglAxios from '@/plugin/axios'
import zglRouter from '@/plugin/route'
import zglUtils from '@/plugin/utils'

Vue.use(plugins)
Vue.use(ElementUI);

Vue.prototype.zglAxios=zglAxios;
Vue.prototype.zglRouter=zglRouter;
Vue.prototype.zglUtils=zglUtils;
Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default vue
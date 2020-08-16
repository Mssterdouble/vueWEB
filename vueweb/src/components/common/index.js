import MPanel from './m-panel'
import MSearch from './m-search'

function plugins (Vue) {
  Vue.component('m-panel', MPanel)
  Vue.component('m-search', MSearch)
}
export default plugins
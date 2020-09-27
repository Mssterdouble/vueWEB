import MTitle from './m-title'
import MSearch from './m-search'

function plugins (Vue) {
  Vue.component('m-title', MTitle)
  Vue.component('m-search', MSearch)
}
export default plugins
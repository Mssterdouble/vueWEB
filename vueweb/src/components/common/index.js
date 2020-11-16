import MTitle from './m-title'
import MSearch from './m-search'
import MList from './m-list'

function plugins (Vue) {
  Vue.component('m-title', MTitle)
  Vue.component('m-search', MSearch)
  Vue.component('m-list', MList)
}
export default plugins
import MTitle from './m-title'
import MSearch from './m-search'
import MList from './m-list'
import MPage from './m-page'

function plugins (Vue) {
  Vue.component('m-title', MTitle)
  Vue.component('m-search', MSearch)
  Vue.component('m-list', MList)
  Vue.component('m-page', MList)
}
export default plugins
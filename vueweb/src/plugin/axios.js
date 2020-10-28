const localUrl = 'http://localhost:8080/static/1.txt'
let myaxios = {
  query () {
    Vue.axios.get(localUrl)
    .then(response => {
      console.log(response)
    })
    .catch(function (error) { // 请求失败处理
      console.log(error)
    })
  }
}
export default myaxios 
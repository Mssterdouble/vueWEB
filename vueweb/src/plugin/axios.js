import Axios from 'axios'
Axios.defaults.baseURL = '/zglServer'
Axios.defaults.headers.post['Content-Type'] = 'application/json'
const myaxios = {
  query (localUrl,requestParam) {
    // console.log('p', this.toParams(requestParam))
    // let a = localUrl + this.toParams(requestParam)
    return Axios.get(localUrl, requestParam)
    .then(response => {
      return response.data
    })
    .catch(function (error) { // 请求失败处理
      return error
    })
  },
  toParams(param) {
    var result = ""
    for (let name in param) {
      result += "&" + name + "=" + encodeURIComponent(param[name])
    }
    return '?' + result.substring(1)
  }
}


export default myaxios 
import Axios from 'axios'
Axios.defaults.baseURL = ''
Axios.defaults.headers.post['Content-Type'] = 'application/json'
const mAxios = {
  query (localUrl,requestParam) {
    // console.log('p', this.toParams(requestParam))
    // let a = localUrl + this.toParams(requestParam)
    console.log('localUrl', localUrl)
    
    return Axios.post('http://120.48.20.18:8081' + localUrl, requestParam)
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
  },
  getTencentToken () {
    return Axios.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx7d142ff46bfe25cf&secret=APPSECRET')
    .then(response => {
      return response
    })
    .catch(function (error) { // 请求失败处理
      return error
    })
  }
}

export default mAxios 
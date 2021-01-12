<template>
  <m-page title="关于">
    <div>本网站纯属个人学习及个人爱好，如涉及版权请联系zgl_double@163.com</div>
    {{clickEnv}}<br>
    <wx-open-launch-weapp id="wx7d142ff46bfe25cf" username="gh_020a2cbd5e1a" path="pages/home/index.html">
      <template>
        <button class="btn" @click="jumpMiniProgram">打开小程序</button>
      </template>
    </wx-open-launch-weapp>
    <div>
      点击事件{{ddd}}
      aaa{{a}}
    </div>
    <wx-open-launch-weapp id="wx7d142ff46bfe25cf" username="gh_020a2cbd5e1a" path="pages/home/index.html" @launch="handleLaunchFn" @error="handleErrorFn">
      <script type="text/wxtag-template">
        <button class="ant-btn ant-btn-red">scoped</button>
      </script>
    </wx-open-launch-weapp>
  </m-page>
</template>

<script>
export default {
  data () {
    return {
      clickEnv: '1',
      smallPro: false,
      ddd: '',
      a: ''
    }
  },
  async beforeMount () {
    this.a = this.$mAxios.getTencentToken()
    console.log(this.a)
    // https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
      appId: 'wx7d142ff46bfe25cf', // 必填，公众号的唯一标识
      timestamp: '202012230900', // 必填，生成签名的时间戳
      nonceStr: '123', // 必填，生成签名的随机串
      signature: '',// 必填，签名
      jsApiList: ['1231'], // 必填，需要使用的JS接口列表
      openTagList: [] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
    })
    // let requestParams = { name: 'tomm', url: 'www.baidu.com' }
    // let da = await this.mAxios.query('/posts')
    // console.log('ret', da)

    // console.log(this.mUtils.encrpty('The quick brown fox jumps over the lazy dog'))
    // this.mUtils.clearSessionStorage()
    // const info = JSON.parse(window.sessionStorage.getItem('rowObj'))
    // console.log(info)

    console.log(this.$mSQL.getAllAds())
    console.log(this.$mSQL.getAdsBySize(0, 1, 0))
  },
  methods: {
    ToMiniapp () {
      getWechatJsConfig({ api: 'getLocation', 'url': window.location.href }).then(res => {
        res['openTagList'] = ['wx-open-launch-weapp']  // 微信小程序标签名加入 openTagList
        console.log(res)
        wx.config(res);
      })
    },
    handleLaunchFn (e) {
      console.log(e)
    },
    handleErrorFn (e) {
      console.log('fail', e.detail);
    },
    jumpMiniProgram () {
      this.clickEnv += '2'
      console.log(wx.miniProgram.getEnv())
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
        appId: 'wx7d142ff46bfe25cf', // 必填，公众号的唯一标识
        timestamp: '202012230900', // 必填，生成签名的时间戳
        nonceStr: '123', // 必填，生成签名的随机串
        signature: '123',// 必填，签名
        jsApiList: ['1231'], // 必填，需要使用的JS接口列表
        openTagList: [] // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
      })
      wx.ready(function () {
        console.log('readey')
        this.clickEnv += 'readey'
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中
      })
      this.ddd = wx
      wx.miniProgram.getEnv((res) => {
        this.clickEnv += '3'
        console.log(res.miniprogram) // true
        if (res.miniprogram) {
          this.clickEnv += '4'
          this.smallPro = true;
        } else {
          this.clickEnv += '5'
          this.smallPro = false;
        }
      })
      if (this.smallPro) { //小程序环境
        this.clickEnv += '6'
        wx.miniProgram.navigateTo({
          url: '/pages/index/index?id=1',//跳转回小程序的页面,传参id, 小程序onLoad函数接收参数即可
          success: function () {
            console.log('success')
          },
          fail: function () {
            console.log('跳转回小程序的页面fail');
          },
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
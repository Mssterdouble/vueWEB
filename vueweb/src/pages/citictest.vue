<template>
  <div>
    <input type="text" v-model="value">
    <button @click="openByMenuId">openByMenuId</button>
    <button @click="openByScheme">openByScheme</button>
    <button @click="openByScheme2">openByScheme2</button>
    <div>
      userAgent:{{userAgent}}<br>
    </div>
    <div>
      checkUA:{{checkUA}}<br>
    </div>
    <div>
      isIos:{{isIos}}<br>
    </div>
    <div>
      isAndroid:{{isAndroid}}<br>
    </div>

    <div>window.bridgeReady:{{wbr}}</div>
    <div>window.bank:{{wb}}</div>
    <div>window.bank.browserPlugin:{{wbb}}</div>
    <input type="text" v-model="inputurl">
    {{target}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkUA: '',
      value: 'VlWnQNU+zRdNRm9OGjh1CJxQeMpknn5S6nrR9HMfF/WQHEshKUTKXBIzDS+X7egvT2NIkyawIs68oUN9IHgGG6kCB/odICA9N87sf+STv9U=$',
      userAgent: '',
      isIos: false,
      isAndroid: false,
      wbr: false,
      wb: false,
      wbb: false,
      inputurl: 'https://wap.bank.ecitic.com/NMBFOServer/WebMB/MBWakeApp/wakeAppPage.html?VlWnQNU+zRddOpEhQvTmZRkGR/D29vAhgOmeYudIEaUx1rJP8uUKP1Nd7YUPOXt/CITICBANKLOGO'
    }
  },

  beforeMount () {
    let userAgent = navigator.userAgent
    this.userAgent = userAgent
    this.checkUA = /citicbankmobile/i.test(userAgent)
    if (/citicbankmobile/i.test(userAgent)) {
      this.isIos = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      this.isAndroid = userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1 //android终端或uc浏览器
    }

    if (window.bridgeReady) {
      this.wbr = true
    }
    if (window.bank) {
      this.wb = true
      console.log('存在')
      if (window.bank.browserPlugin) {
        this.wbb = true
      }
    } else {
      console.log('不存在')
    }
   this.target = this.inputurl.split('')[1].replace('CITICBANKLOGO','$')
  },
  methods: {
    openByMenuId () {
      let data = {
        menuId: '1008007', // 固定登录id
        closePage: true,
        menuParams: {
          needlogin: '1', // 登录标识
          redictUrl: 'www.baidu.com' // 当前直播间url
        }
      }
      window.alert(data)
      if (this.checkUA) {
        if (window.bridgeReady && window.bank && window.bank.browserPlugin) {
          console.log('------')
          window.bank.browserPlugin.openByMenuId(data)
        }
      }
    },
    openByScheme () {
      let target = this.inputurl.split('')[1].replace('CITICBANKLOGO','$')
      if (this.isIos) {
        window.location = 'citicbank:///?' + this.target
      } else if (this.isAndroid) {
        window.location = 'wakeupciticmobilebank://splashActivity:8899/citicbank?' + this.target
      }
    },
    openByScheme2 () {
      if (this.isIos) {
        window.alert('ios')
        window.location = 'citicbank:///' + this.value
      } else if (this.isAndroid) {
        window.alert('android')
        // window.location = 'wakeupciticmobilebank://splashActivity:8899/citicbank' + this.value
        window.location = 'https://a.app.qq.com/o/simple.jsp?pkgname=com.ecitic.bank.mobile&android_scheme=wakeupciticmobilebank%3A%2F%2FsplashActivity%3A8899%2Fciticbank%3FVlWnQNU%2BzReOeAXNzV7CcSJ1yYILOAufkNAEey5Ffc8OVCCYcXhaALwKvCxItZIlGbQWn6kWPZ8%3D%24'
      }
    }
  }
}
</script>

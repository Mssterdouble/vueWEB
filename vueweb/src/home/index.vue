<template>
  <div></div>
</template>

<script>
import ROUTERS from '@/router/routers'
export default {
  beforeCreate () {
    let urlParams = window.location.href.split("?")[1]
    if (urlParams) {
      let paramsList = urlParams.split('&')
      let dataJson = {}
      if (paramsList) {
        try {
          for (let i = 0; i < paramsList.length; i++) {
            let data = paramsList[i].split('=')
            dataJson[data[0]] = data[1]
          }
          let navigator = dataJson['index']
          if (navigator) {
            let rts = ROUTERS.filter(item => { return item.path && item.path !== '*' && item.path.indexOf(navigator) > 0 })
            if (rts.length) {
              this.$mRouter.replace(navigator, dataJson)
              console.log('目标页面，' + navigator, dataJson)
            } else {
              this.$mRouter.replace('Main')
            }
          } else {
            this.$mRouter.replace('Main')
          }
        } catch (e) {
          console.error(e)
        }

      } else {
        this.$mRouter.replace('Main')
      }
    } else {
      this.$mRouter.replace('Main')
    }
  }
}
</script>
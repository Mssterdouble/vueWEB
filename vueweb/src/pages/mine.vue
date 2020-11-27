<template>
  <m-page title="关于">
    <div>本网站纯属个人学习及个人爱好，如涉及版权请联系zgl_double@163.com</div>
  </m-page>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  async beforeMount () {
    let requestParams = { name: 'tomm', url: 'www.baidu.com' }
    let da = await this.mAxios.query('/testconsolog', requestParams)
    console.log(da.name)

    console.log(this.mUtils.encrpty('The quick brown fox jumps over the lazy dog'))
    this.mUtils.clearSessionStorage()
    const info = JSON.parse(window.sessionStorage.getItem('rowObj'))
    console.log(info)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
</style>
<template>
  <m-page title="攻略">
    这里四游戏攻略
  </m-page>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  beforeMount () {
    let params = this.mUtils.getNavigatorParams()
    console.log(params)
    sessionStorage.setItem('testKey', '这是一个测试的value值');
    console.log('sfsdf', sessionStorage.getItem('testKey'))
  },
  methods: {

  }
}
</script>
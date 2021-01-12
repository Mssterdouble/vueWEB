<template>
    <m-page title="控制台">
    世界OL盒子，内容管理台
  </m-page>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  beforeMount () {
    console.log(this.mUtils.getUrlQuaryParams())

    console.log('欢迎进入控制台')
  },
  methosd: {

  }
}
</script>
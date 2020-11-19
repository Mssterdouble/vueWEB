<template>
  <div class="page">
    <div class="page-title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-page',
  props: {
    title: {
      type: String,
      default: 'biaoti'
    }
  },
  data () {
    return {
      title
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  height: 100vh;
}
</style>
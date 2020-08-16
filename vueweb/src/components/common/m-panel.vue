<template>
  <div class="page">
    <div class="page-title">{{title}}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'm-panel',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  justify-content: center;
  background: #f7f8f9;

  &-title {
    display: flex;
    align-items: center;
    color: red;
    height: 30px;
    font-size: 14px;
  }
}
</style>
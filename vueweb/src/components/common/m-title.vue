<template>
  <div class="page">
    <div class="page-title">{{title}}</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'm-title',
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
  background: red;

  &-title {
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: black;
    height: 30px;
    font-size: 24px;
  }
}
</style>
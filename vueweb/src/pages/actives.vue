<template>
  <m-page :title="title">
    <div class="panel">
      <div class="panel-title">活动一</div>
      <div class="panel-time">时间</div>
      <div class="panel-zone">范围</div>
      <div class="panel-detail">内容<br>wenban</div>
    </div>
  </m-page>
</template>

<script>
export default {
  data () {
    return {
      title: '活动'
    }
  },
  beforeCreate () {
    console.log(this.$mRouter.getNavigatorParams())
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.panel {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  margin: 10px;
  padding: 10px;

  &-title {
    padding-top: 10px;
  }

  &-time {
  }

  &-zone {
    color: gray;
  }
  &-detail {
    color: gray;
  }
}
</style>
<template>
  <m-page :title="title">
    <div class="panel" v-for="(item,index) in activeList" :key="index">
      {{item}}
      <div class="panel-title">{{item.title}}</div>
      <div class="panel-time">{{item.time}}</div>
      <div class="panel-zone">{{item.zone}}</div>
      <div class="panel-detail">{{item.detail}}</div>
    </div>
  </m-page>
</template>

<script>
export default {
  data () {
    return {
      title: '活动',
      activeList: []
    }
  },
  beforeCreate () {
    // console.log(this.$mRouter.getNavigatorParams())
    let ads = this.$mSQL.getActives()
    this.activeList = ads.part
    console.log(this.activeList[0])
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
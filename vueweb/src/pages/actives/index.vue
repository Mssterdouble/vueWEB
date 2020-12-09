<template>
  <m-page :title="title">
    <div class="panel" v-for="(item) in activeList" :key="item">
      <div class="panel-title">{{item.title}}</div>
      <div class="panel-time">{{item.time}}</div>
      <div class="panel-zone">{{item.zone}}</div>
      <div class="panel-detail">{{item.detail}}</div>
    </div>
    <!-- <el-container>
      <el-main>
        <el-card class="card" v-for="(item,index) in activeList" :key="index" :body-style="{ padding: '0px' }">
          <div class="main-detail-skillName">{{item.title}}</div>
          <div class="main-detail-skillContent" v-for="(show,showIndex) in item.reward" :key="showIndex">{{show}}</div>
        </el-card>
      </el-main>
    </el-container> -->
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
  beforeMount () {
    // console.log(this.$mRouter.getNavigatorParams())
    let ads = this.$mSQL.getActives()
    this.activeList = ads.part
    for (let i = 0; i < this.activeList.length; i++) {
      console.log(this.activeList[i].title)

    }
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
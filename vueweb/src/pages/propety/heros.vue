<template>
  <m-page title="人物技能">
    <el-container class="container">
      <el-aside class="aside">
        <el-menu default-active="0" class="aside-menu">
          <el-menu-item class="aside-menu-item" :index="(index+'')" v-for="(item,index) in heroList" :key="index" @click="switchHeros(item.type)">
            <span>{{item.show}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="stick">
          <el-tabs stretch v-model="tabIndex" @tab-click="handleClick">
            <el-tab-pane label="主动" name="manuList"></el-tab-pane>
            <el-tab-pane label="被动" name="giftList"></el-tab-pane>
            <el-tab-pane label="自动" name="autoList"></el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main class="main">
          <div class="main-detail">
            <el-card class="box-card" v-for="(item,index) in showList" :key="index">
              <div>{{item.name}}</div>
              <div v-for="(show,showIndex) in item.desc" :key="showIndex" class="text item">
                {{show}}
              </div>
            </el-card>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </m-page>
</template>

<script>
export default {
  data () {
    return {
      heroList: [], // 人物列表
      tabIndex: 'manuList', // tab标签
      giftList: [], //被动技能
      autoList: [], //自动技能
      manuList: [], // 主动技能
      showList: [] //当前展示列表
    }
  },
  created () {
    this.heroList = this.$mSQL.getHeroList()
    this.getDataDetal(this.heroList[0].type)
    this.showList = this.manuList
  },

  methods: {
    handleClick (tab) {
      let temp = { 'giftList': this.giftList, 'manuList': this.manuList, 'autoList': this.autoList }
      this.showList = temp[tab.name]
    },
    switchHeros (index) {
      this.getDataDetal(index)
      let temp = { 'giftList': this.giftList, 'manuList': this.manuList, 'autoList': this.autoList }
      this.showList = temp[this.tabIndex]
    },
    getDataDetal (type) {
      let result = this.$mSQL.getHeroSkills(type)
      this.giftList = result.filter((item) => { return item.auto === '0' })
      this.autoList = result.filter((item) => { return item.auto === '-1' })
      this.manuList = result.filter((item) => { return item.auto === '1' })
    }
  }
}
</script>

<style lang="less" scope>
.container {
  height: 86vh;
}
.aside {
  width: 60px !important;
  background-color: #f7f8f9;
  &-menu {
    height: 100%;
    &-item {
      text-align: center !important;
    }
  }
}
.main-detail {
  height: 100%;
  overflow: auto;
  overflow-y: scroll;
  font-size: 14px;
}

.stick {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  background-color: #fff;
  height: 45px !important;
}

.main {
  padding: 0 !important;
}
</style>
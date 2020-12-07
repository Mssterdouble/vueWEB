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
          <el-tabs stretch v-model="tabIndex" @tab-click="switchTab">
            <el-tab-pane label="主动" name="manuList"></el-tab-pane>
            <el-tab-pane label="被动" name="giftList"></el-tab-pane>
            <el-tab-pane label="自动" name="autoList"></el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main class="main">
          <div class="main-detail" ref="showPanel">
            <el-card class="card" v-for="(item,index) in showList" :key="index" :body-style="{ padding: '0px' }">
              <div class="main-detail-skillName">{{item.name}}</div>
              <div class="main-detail-skillContent" v-for="(show,showIndex) in item.desc" :key="showIndex">{{show}}</div>
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
    switchTab (tab) {
      let temp = { 'giftList': this.giftList, 'manuList': this.manuList, 'autoList': this.autoList }
      this.showList = temp[tab.name]
      this.reSetView()
    },
    switchHeros (index) {
      this.getDataDetal(index)
      let temp = { 'giftList': this.giftList, 'manuList': this.manuList, 'autoList': this.autoList }
      this.showList = temp[this.tabIndex]
      this.reSetView()
    },
    getDataDetal (type) {
      let result = this.$mSQL.getHeroSkills(type)
      this.giftList = result.filter((item) => { return item.auto === '0' })
      this.autoList = result.filter((item) => { return item.auto === '-1' })
      this.manuList = result.filter((item) => { return item.auto === '1' })
    },
    reSetView () {
      this.$refs.showPanel.scrollTop = 0
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

  &-skillName {
    font-weight: bold;
  }

  &-skillContent {
    font-size: 12px;
  }
}
.card {
  padding: 0 20px 0 20px;
  margin: 5px;
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
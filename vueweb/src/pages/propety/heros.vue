<template>
  <m-page title="人物技能">
    <el-container class="container">
      <el-aside class="aside">
        <el-menu default-active="0" class="aside-menu">
          <el-menu-item class="aside-menu-item" :index="(index+'')" v-for="(item,index) in skillList" :key="index" @click="switchHeros(index)">
            <span slot="title">{{item.show}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="stick">
          <el-tabs stretch v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="主动" name="主动"></el-tab-pane>
            <el-tab-pane label="被动" name="被动"></el-tab-pane>
            <el-tab-pane label="自动" name="自动"></el-tab-pane>
          </el-tabs>
        </el-header>
        <el-main class="main">
          <div class="main-detail">
            <el-card class="box-card" v-for="item in 10" :key="item">
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>

        </el-main>
      </el-container>
    </el-container>
  </m-page>
</template>

<script>
import WAQRRIOR from '../../db/warrior.json'
import MAGE from '../../db/mage.json'
import KINIGHT from '../../db/kinight.json'
import COMPREHEND from '../../db/comprehend.json'
import SAGE from '../../db/sage.json'
import TAKEBU from '../../db/takebu.json'
import GUNKING from '../../db/gunking.json'
export default {
  data () {
    return {
      activeName: '主动',
      skillList: [],
      showList: [],
      tabIndex: 0,
      tabShow: 'warrior',
      scroll: 0,
      index: ''
    }
  },
  created () {
    this.skillList = [WAQRRIOR, KINIGHT, MAGE, COMPREHEND, SAGE, TAKEBU, GUNKING]
    this.showList = this.skillList[0].gift
    console.log('this.skillList', this.skillList)
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    switchHeros (index) {
      console.log('index', index)
    },
    nextPage (index) {

      if (index === 1) {
        if (this.tabIndex < 6) {
          this.tabIndex++
        } else {
          this.tabIndex = 0
        }
      } else {
        if (this.tabIndex > 0) {
          this.tabIndex--
        } else {
          this.tabIndex = 6
        }
      }

      this.tabShow = this.skillList[this.tabIndex].type
      this.showList = this.skillList[this.tabIndex].gift
    },

    skillType (item) {
      return item.auto === '1' ? '主' : item.auto === '-1' ? '自' : '被'
    },
    switchTab (item, index) {
      this.tabIndex = index
      this.tabShow = item.type
      setTimeout(() => {
        this.showList = this.skillList[index].gift
      }, 10)
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
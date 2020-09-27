<template>
  <div class="panel">
    <m-title :class="titleClass" title="人物技能篇"></m-title>
    <div class="container">
      <div class="container-toolbar">
        <div class="container-toolbar-item" :class="tabShow === item.type ? 'selected' : ''" v-for="(item,index) in skillList" :key="index" @click="switchTab(item,index)">{{item.show}}</div>
      </div>
      <div class="container-content">
        <div @click="nextPage(-1)">上一页</div>
        <div class="list" v-for="(item,index) in showList" :key="index">
          <div class="list-sknm">{{item.auto === '1' ? '主' : item.auto === '-1' ? '自' : '被'}}·{{item.name}}</div>
          <div class="list-desc" v-for="(desc, descindex) in item.desc" :key="descindex">{{desc}}</div>
        </div>
        <div @click="nextPage(1)">下一页</div>
      </div>
    </div>
  </div>
</template>

<script>
import WAQRRIOR from '../db/warrior.json'
import MAGE from '../db/mage.json'
import KINIGHT from '../db/kinight.json'
import COMPREHEND from '../db/comprehend.json'
import SAGE from '../db/sage.json'
import TAKEBU from '../db/takebu.json'
import GUNKING from '../db/gunking.json'
export default {
  data () {
    return {
      skillList: [],
      showList: [],
      tabIndex: 0,
      tabShow: 'warrior',
      scroll: 0
    }
  },
  created () {
    this.skillList = [WAQRRIOR, KINIGHT, MAGE, COMPREHEND, SAGE, TAKEBU, GUNKING]
    this.showList = this.skillList[0].gift
    console.log('this.skillList', this.skillList)
  },

  methods: {

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
.panel {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.titleClass {
  position: relative;
}
.container {
  display: flex;
  margin-top: 10px;

  &-toolbar {
    position: fixed;
    display: flex;
    width: 60px;
    flex-direction: column;
    justify-content: start;
    background: #f7f8f9;

    &-item {
      display: flex;
      align-items: center;
      height: 70px;
      text-align: center;
      justify-content: center;
      font-size: 12px;
      // border: solid 1px grey;
    }
  }

  &-content {
    display: flex;
    flex: 0 1 85%;
    flex-direction: column;
    margin-left: 70px;

    &-panel {
      display: flex;
      flex: 0 0 100%;
      flex-direction: column;
    }
  }
}

.list {
  display: flex block;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 10px;

  &-sknm {
    display: flex block;
  }

  &-desc {
    display: flex block;
  }
}

.selected {
  background: #ffffff;
  line-height: 40px;
}
</style>
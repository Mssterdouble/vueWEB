<template>
  <div class="page">
    <div class="page-head">
      <div class="page-head-back">
        <i v-show="!noback" @click="goback" class="el-icon-arrow-left"></i>
      </div>
      <div class="page-head-title">{{title}}</div>
      <div class="page-head-toolbar"> </div>
    </div>
    <div class="page-main">
      <slot></slot>
    </div>
  </div>
</template>
el-icon-arrow-left
<script>
export default {
  name: 'm-page',
  props: {
    title: {
      type: String,
      requird: false,
      default: '世界OL盒子'
    },
    noback: {
      type: Boolean
    },

  },
  data () {
    return {

    }
  },
  methods: {
    goback () {
      this.mRouter.goback()
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-direction: column;

  &-head {
    display: flex;
    flex-direction: row;
    background-color: #f7f8f9;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    &-back {
      font-size: 28px;
      flex: 0 0 40px;
    }

    &-title {
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      flex: auto;
    }

    &-toolbar {
      flex: 0 0 40px;
    }
  }
}
</style>
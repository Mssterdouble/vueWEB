<template>
  <div class="mList" @click="onclick">
    <div class="left">
      <div class="left-title"> {{title}}</div>
      <div class="left-des">{{des}}</div>
    </div>
    <div class="right">
      <i class="el-icon-caret-right"></i>
      <i class="iconfont iconsousuo"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    },
    des: {
      type: String
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onclick ($event) {
      console.log('组件内tiaozhuan')
      this.$emit('onclick', $event.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.mList {
  display: flex;
  border-bottom: 1px gray solid;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    flex-direction: column;

    &-title {
      display: flex;
      color: black;
      font-weight: bold;
    }

    &-des {
      display: flex;
      color: gray;
    }
  }
  .right {
    display: flex;
    height: 15px;
    width: 15px;
    right: 20px;
  }
}
</style>
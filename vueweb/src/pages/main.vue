<template>
  <div>
    <m-search v-model="inputVal" @blur="onBlur" @focus="onFocus" @search="onSearch">搜索</m-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputVal: ' '
    }
  },
  methods: {
    onSearch ($event) {
      console.log('搜索', this.inputVal, $event)
    },
    onFocus ($event) {
      console.log('获取焦点', $event)
    },
    onBlur ($event) {
      console.log('失去焦点', $event)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
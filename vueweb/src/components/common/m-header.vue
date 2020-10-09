<template>
  <el-container v-show="defaule != ''">
    <el-header> {{title}}</el-header>
  </el-container>
</template>
<script>
export default {
  name: 'm-header',
  props: {
    title: {
      type: String,
      defaule: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>
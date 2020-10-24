<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in ads" :key="index">
        <img :src="item.icon" />
      </el-carousel-item>
    </el-carousel>
    <el-button @click="getMthd">默认按钮</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        { type: '法师', icon: '@/assets/image/roles/mage.png', link: 'mage' },
        { type: '贤者', icon: '@/assets/image/roles/sage.png', link: 'sage' },
        { type: '武圣', icon: '@/assets/image/roles/takebu.png', link: 'takebu' },
        { type: '战士', icon: '@/assets/image/roles/warrior.png', link: 'warrior' }]
    }
  },

  methods: {
    getMthd () {
      // created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
      this.axios.get('https://www.runoob.com/try/ajax/json_demo.json')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<template>
  <div>
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in ads" :key="index">
        <img :src="item.icon" />
      </el-carousel-item>
    </el-carousel>
    <el-button @click="getMthd">默认按钮</el-button>
    <div>{{info}}</div>
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
        { type: '战士', icon: '@/assets/image/roles/warrior.png', link: 'warrior' }
      ],
      info: ''
    }
  },

  methods: {
    getMthd () {
      // created:vue生命周期中的钩子函数，在这个时间点，data中的数据已经注入到响应式系统中
      //http://localhost:8080/static/1.txt
      //https://www.runoob.com/try/ajax/json_demo.json
      this.myaxios.query()
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
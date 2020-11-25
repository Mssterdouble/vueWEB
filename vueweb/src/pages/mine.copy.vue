<template>
  <m-page>
    <div @click="goback"> goback</div>
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in ads" :key="index">
        <img :src="item.icon" />
      </el-carousel-item>
    </el-carousel>
    <el-button @click="getMthd">默认按钮</el-button>
    <div>{{info}}</div>
    <div @click="clickVideo">
      <video class="videoclass" src="../assets/video/111.mp4" autoplay loop muted></video>
    </div>
  </m-page>
</template>

<script>
export default {
  data () {
    return {
      ads: [
        { type: '法师', icon: require('../assets/image/roles/mage.png'), link: 'mage' },
        { type: '贤者', icon: require('../assets/image/roles/sage.png'), link: 'sage' },
        { type: '武圣', icon: require('../assets/image/roles/takebu.png'), link: 'takebu' },
        { type: '战士', icon: require('../assets/image/roles/warrior.png'), link: 'warrior' }
      ],
      info: ''
    }
  },
  beforeMount () {
    let params = this.mRouter.getNavigatorParams()
    console.log('params', params)
  },
  methods: {
    goback () {
      this.mRouter.goback()
    },
    clickVideo () {
      console.log('dianjiwo ')
    },
    async getMthd () {
      let requestParams = { name: 'tomm', url: 'www.baidu.com' }
      let da = await this.zglAxios.query('/testconsolog', requestParams)
      console.log(da.name)
      // let par = JSON.parse(da)
      // console.log('da', par)
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

.videoclass {
  height: 300px;
}
</style>
<template>
  <el-container>
    <el-header> 世界OL介绍</el-header>
    <el-main>
      <div class="panel-intrduce">
        <div class="panel-intrduce-img">
          <img class="panel-intrduce-img-jpeg" src="@/assets/image/world.jpeg" />
        </div>
        <div>
          <div class="content">
            &nbsp;&nbsp;&nbsp;&nbsp;世界OL是一款自由而奔放的世界回合手机网游。在游戏里没有什么会束缚你，可以尽情的去抒发自己的情感。游戏有着三大系统，分为：任务、装备、经济。其中任务有着剧本任务，寻宝任务，对抗任务。而装备的特色在于你找不出2件同类型的。经济在于自由，它可以赋予你快乐的权利，关键在于你的勤奋。这个游戏，没有什么特色，既没有战斗游戏那恢弘的画面，也没有休闲游戏那华丽，舒适的界面风格，也没有站战争题材类壮阔波澜的场景。但是，最适合的是一种平平淡淡的生活，温馨，宁静，安逸。喜欢的朋友，这是你最忠实也是你最可靠的选择。相信，很多人的梦想，要的只是一个平凡的家，所以，不容错过的。
            &nbsp;&nbsp;&nbsp;&nbsp;世界OL剧情以创新的平衡世界为主题。似曾相识又完全相反的两个平衡世界交叉在一起。两个世界即将面临同样的考验。如何应对？谁会成为世界的王？世界OL不是什么巅峰之作、史诗巨作。非XX专属网游。没3D写实超绚丽画面、无缝地图。不胡扯万人战斗。更不是什么最最最最最的东西。世界OL只是一个自由、开放的游戏世界。
          </div>
        </div>
      </div>

      <div class="panel-menu">
        <div class="panel-menu-title">人物技能 </div>
        <div class="panel-menu-docker">
          <div class="panel-menu-docker-item" v-for="(item, index) in roles" :key='index'>
            <img class="img" :src="item.icon" />
            <p class="lb">{{item.type}}</p>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      roles: [
        { type: '修真', icon: require('@/assets/image/roles/comprehend.png'), link: 'comperhend' },
        { type: '枪王', icon: require('@/assets/image/roles/gunking.png'), link: 'gunking' },
        { type: '侠客', icon: require('@/assets/image/roles/kinight.png'), link: 'kinight' },
        { type: '法师', icon: require('@/assets/image/roles/mage.png'), link: 'mage' },
        { type: '贤者', icon: require('@/assets/image/roles/sage.png'), link: 'sage' },
        { type: '武圣', icon: require('@/assets/image/roles/takebu.png'), link: 'takebu' },
        { type: '战士', icon: require('@/assets/image/roles/warrior.png'), link: 'warrior' }
      ]
    }
  },
};
</script>

<style lang="less" scoped>
.panel {
  display: flex;
  &-intrduce {
    display: flex;
    &-img {
      margin: auto;
      &-jpeg {
        border-radius: 20px;
        width: 100px;
      }
    }

    .content {
      text-align: justify;
      padding: 0 20px 0 20px;
      font-size: 14px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  &-menu {
    margin-top: 20px;
    &-title {
      font-size: 16px;
      text-align: left;
    }

    &-docker {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: space-evenly;
      &-item {
        display: flex;
        flex: 0;
        width: 50px;
        text-align: center;
        align-items: center;
        flex-direction: column;
        padding: 0 10px 0 10px;

        .img {
          width: 50px;
          height: 50px;
        }
        .lb {
          color: red;
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
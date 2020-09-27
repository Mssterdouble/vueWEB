<template>
  <el-container>
    <el-main>
      <slot class="pgh">
        <router-view />

      </slot>
    </el-main>
    <el-footer>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">
          <router-link to='/main'>首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to='/menu'>菜单</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to='/mine'>我的</router-link>
        </el-menu-item>
      </el-menu>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scope>
a:link {
  text-decoration: none;
}
.el-footer {
  position: fixed;
  width: 100%;
  bottom: 0px;
  color: #333;
  text-align: center;
  padding: 0;
  height: 5vh;
  border-top: 1px #333;
}

.el-main {
  height: 95vh;
  color: #333;
  text-align: center;
}

body > .el-container {
  display: flex;
}

.el-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/deep/ .is-active {
  flex: 0.33 1 auto;
}
</style>

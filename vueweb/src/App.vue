<template>
  <div class="panel">
    <router-view />
    <div class="footer">
      <router-link class="footer-tab" to='/main'>首页</router-link>
      <router-link class="footer-tab" to='/menu'>菜单</router-link>
      <router-link class="footer-tab" to='/mine'>我的</router-link>
    </div>
  </div>
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
html,
body {
  height: 100%;
}
.panel {
  background-color: #f7f8f9;
  height: 100%;
}
.titleBar {
  display: flex;
  align-items: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  color: #2c3e50;
  height: 30px;
  line-height: 28px;
  background: #f7f8f9;
}

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background: #f7f8f9;
  display: flex;
  justify-content: space-evenly;

  &-tab {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1 1 auto;
  }
  &-tab:focus {
    background: gray;
  }
}
a {
  text-decoration: none;
}
a:active {
  background: #ffffff;
}
.router-link-active {
  text-decoration: none;
}
</style>

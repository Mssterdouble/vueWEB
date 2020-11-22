<template>
  <div>
    <div class="pg">
      <div class="pg-main">
        <router-view />
      </div>
      <div class="pg-ftr">
        <div class="pg-ftr-itm">
          <router-link to='/main'>首页</router-link>
        </div>
        <div class="pg-ftr-itm">
          <router-link to='/game'>介绍</router-link>
        </div>
        <div class="pg-ftr-itm">
          <router-link to='/mine'>我的</router-link>
        </div>
      </div>
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
a:link {
  text-decoration: none;
}
.pg {
  &-main {
    height: 95vh;
    overflow: auto;
  }

  &-ftr {
    position: fixed;
    bottom: 0;
    height: 5vh;
    line-height: 5vh;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    // border-top: 1px gray solid;
    background-color: #f7f8f9;
    &-itm {
      align-items: center;
      text-align: center;
    }
  }
}
</style>

<template>
  <div class="search">
    <i class="search-icon iconfont iconsousuo" />
    <div class="search-inputarea">
      <input class="search-inputarea-input" ref="input" type="text" :placeholder="placeholder" v-model="inputVal" @input="onInput" @blur="onBlur" @focus="onFocus" @search="onSearch" @keyup.enter="onSearch" />
      <i class="search-inputarea-icon iconfont iconsousuo" v-show="inputVal" @click="clear"> </i>
    </div>
    <div class="search-btn" @click="onSearch">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'm-search',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    blur: {
      type: Object
    },
    focus: {
      type: Object
    }
  },
  data () {
    return {
      inputVal: null
    }
  },
  methods: {
    clear () {
      this.inputVal = null
    },
    onInput ($event) {
      this.$emit('input', $event.target.value)
    },
    onSearch ($event) {
      this.$emit('search', $event)
    },
    onBlur ($event) {
      this.$emit('blur', $event)
    },
    onFocus ($event) {
      this.$emit('focus', $event)
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 80vw;
  height: 30px;
  line-height: 28px;
  border: 1px solid gray;
  border-radius: 28px;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex: auto;

  &-icon {
    display: flex;
    justify-content: center;

    flex: 0 1 10%;
  }

  &-inputarea {
    display: flex;
    flex: 0 1 75%;
    justify-content: space-between;
    align-items: center;

    &-input {
      display: flex;
      border: none;
      outline: none;
      height: 28px;
    }

    &-icon {
      display: flex;
      flex: 0 1 10%;
    }
  }

  &-btn {
    display: flex;
    flex: 0 1 15%;
  }
}
</style>
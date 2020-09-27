<template>
  <div>
    <m-title title="我的"></m-title>
    <button @click="click"> click</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      index: 0
    }
  },
  methods: {
    click () {
      let fun = () => {
        let a = 'hello'
        return alert(a)
      }
      this.void2(fun)

    },
    void2 (fun) {
      if (this.index > 10) {
        fun()
      } else {

        this.index++
        console.log(this.index)
      }
    }
  }
}
</script>
<template>
  <div class="header">
    <span @click="back()">返回按钮</span>
    <slot>Yeeduo Video</slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      back () {
        console.log('返回到上一页')
        this.$router.back(-1)
      }
    }
  }
</script>
<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.06666667rem;
    background-color: #eee;
    font-size: .48rem;
    line-height: 1.06666667rem;
  }
</style>

<template>
  <div class="footer">
    <a href="#">底部</a>
    <!-- <router-link to="videoList"><span>底部视频按钮</span></router-link> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.06666667rem;
    background-color: #eee;
    border: .01333333rem solid #e9e9e9;
    line-height: 1.06666667rem;
    font-size: .42666667rem;
    color: #333;
    a {
      flex: 1;
      color: #333;
    }
  }
</style>


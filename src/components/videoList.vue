<template>
  <div class="items">
    <div class="item" v-for="(item, index) in oData">
      <img :src="item.cover" @click="toDetail('/videoDetail', item.id)">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      oData: []
    }
  },
  methods: {
    // 点击带参数（对应显示的详情页id）传递
    toDetail (path, id) {
      this.$router.push({
        path: path,
        query: {
          id: id
        }
      })
    }
  },
  mounted () {
    this.$ajax.get('http://localhost:3000/videoList')
    .then(
      m => {
        this.oData = m.data
      }
    )
  }
}
</script>
<style scoped lang="scss">
  .item {
    width: 10rem;
  }
</style>

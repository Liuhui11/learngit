<template>
  <div class="container">
    <div class="col-sm-4 col-md-3 item" v-for="(item, index) in oData">
      <router-link :to="'/videoDetail/' + item.id">
        <img :src="item.cover">
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      oData: []
    }
  },
  methods: {
  },
  mounted () {
    axios.get('/api/home/api/index')
    .then(m => {
      this.oData = m.data
    })
  }
}
</script>
<style scoped lang="less">
  .container {
    .item {
      margin-bottom: 30px;
    }
    img {
      display: block;
      width: 100%;
    }
  }
</style>

<template>
  <div class="items">
    <v-header></v-header>
    <div v-for="imgSrc in oData[pageId - 1].banner">
      <img :src="imgSrc" alt="">
    </div>
    <video controls="controls" width="100%">
      <source :src="oData[pageId - 1].video"></video>
    </video>
    <p>{{oData[pageId - 1].content}}</p>
  </div>
</template>
<script>
import VHeader from './header'
export default {
  components: {
    VHeader
  },
  data () {
    return {
      pageId: '',
      oData: []
    }
  },
  mounted () {
    this.$ajax.get('http://localhost:3000/videoDetail')
    .then(
      m => {
        this.oData = m.data
      }
    )
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, from, next, 'test===')
    next(vm => {
      vm.pageId = to.query.id
    })
  }
}
</script>

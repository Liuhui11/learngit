<template>
  <div class="user">
    <v-header></v-header>
    <video-list></video-list>
<!--     <v-footer></v-footer> -->
  </div>
</template>

<script>
import VHeader from './header'
import videoList from './videoList'
// import VFooter from './footer'
export default {
  components: {
    videoList,
    VHeader
    // VFooter
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>


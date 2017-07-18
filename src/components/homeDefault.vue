<template>
  <div>
    <v-header></v-header>
    <video-list></video-list>
  </div>
</template>

<script>
import VHeader from './header'
import videoList from './videoList'
export default {
  components: {
    videoList,
    VHeader
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>


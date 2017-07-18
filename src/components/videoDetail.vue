<template>
  <div class="items">
    <v-header></v-header>
    <!-- 全屏轮播图 -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" v-if="oData.banner !== ''">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item" :class="{ active: index === 0 ? true : false}" v-for="(imgSrc, index) in oData.banner">
          <img :src="imgSrc.img" alt="">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    
    <!-- 全屏视频 -->
    <div class="container">
      <video class="video" controls="controls" width="100%" :src="oData.video">
      </video>
    </div>

    <!-- 详情页内容 -->
    <div class="container" v-if="oData.content">
      <!-- 图文介绍 -->
      <div class="main col-sm-8 col-md-9">
        <section v-for="(content, index) in oData[$route.params.id - 1].content">
          <h3 :id="'title' + index">标题{{index}}</h3>
          <img :src="content.img" alt="">
          <p>{{content.text}}</p>
        </section>
      </div>
      <!-- 跟随目录 -->
      <div class="aside col-sm-4 col-md-3 hidden-xs">
        <ul>
          <li v-for="(n, index) in 2">标题{{index}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import VHeader from './header'
import axios from 'axios'
export default {
  components: {
    VHeader
  },
  data () {
    return {
      id: this.$route.params.id,
      oData: {
        banner: [],
        content: false,
        video: ''
      }
    }
  },
  mounted () {
    // 图文内容
    axios.get(`/home/api/info?id=${this.id}`)
    .then(
      m => {
        this.oData = m.data
      }
    )
    this.$nextTick(() => {
      this.$jQuery('.carousel').carousel()
    })
  }
}
</script>
<style scoped lang="less">
  .carousel {
    margin-bottom: 40px;
    .carousel-indicators {
      bottom: -10px;
    }
  }
  .video {
    margin-bottom: 40px;
  }
  .main {
    section {
      h3 {
        font-size: 22px;
        margin-bottom: 24px;
        margin-top: 0;
      }
      margin-bottom: 40px;
      img {
        display: block;
        width: 100%;
        margin-bottom: 24px;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        color: #666;
        margin-bottom: 18px;
      }
    }
  }
  .aside {
    font-size: 16px;
    padding-left: 30px;
    li {
      margin-bottom: 10px;
    }
  }
</style>

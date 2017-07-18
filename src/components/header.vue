<template>
  <nav class="navbar navbar-default site-header">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-navbar" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button> -->
          <a class="navbar-brand" href="#">
            <img src="http://yeeduo.com/wp-content/themes/yeeduo/images/logo.png" alt="" class="site-logo img-responsive">
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
   <!--      <div class="collapse navbar-collapse" id="site-navbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/">VIDEO</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div> -->
      </div>
  </nav>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .site-header {
    background-color: #faf9f4;
    border: none;
    margin: 30px 0;
    #site-navbar{
      margin-bottom: -30px;
      font-size: 16px;
    }
    // 左边logo
    .navbar-brand {
      padding: 0;
      margin-left: 15px;
      .site-logo {
        float: left;
        height: 50px;
      }
    }
  }
</style>

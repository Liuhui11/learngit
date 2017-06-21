import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import './assets/flexible.js'
import './assets/reset.scss'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


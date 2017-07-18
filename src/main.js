import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import './assets/flexible.js'
import './assets/reset.scss'
import api from './api/API.js'
// import axios from 'axios'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.prototype.$jQuery = jQuery
// Vue.prototype.$http = axios
Vue.prototype.$http = api

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})


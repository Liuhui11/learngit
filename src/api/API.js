// 在入口js添加这个
// import api from 'src/api/API.js'
// Vue.prototype.$http = api
// 调用方式
// example 获取首页数据
// this.$http.index()
// .then((res) => {
// })
// .catch((err) => {
// })
// 调用登录接口
// this.$http.common.login({a: 1})
// .then((res) => {
// })
// .catch((err) => {
// })
// 获取评论信息
// this.$http.reviews.product(1, 2)
// .then((res) => {
// })
// .catch((err) => {
// })
import axios from 'axios'
import config from './config'
import defaultsDeep from 'lodash/defaultsdeep'
import isObject from 'lodash/isObject'
// import { LoadingPlugin } from 'vux'
// import Vue from 'vue'
// Vue.use(LoadingPlugin)

let instance = axios.create(config)

class API {
  constructor () {
    this.api = {
      get: {
        index: '/home/api/index'
      },
      post: {
      }
    }
  }
  init () {
    let api = defaultsDeep(this.cloneObj(this.api.get, this.get), this.cloneObj(this.api.post, this.post))
    return {get: this.get, post: this.post, ...api}
  }
  cloneObj (obj, fn) {
    let res = {}
    for (let key in obj) {
      if (isObject(obj[key])) {
        res[key] = this.cloneObj(obj[key], fn)
      } else {
        res[key] = function () {
          return fn(obj[key], arguments)
        }
      }
    }
    return res
  }
  get (url, params = '') {
    // let hasLoading = false
    let arg = Array.prototype.slice.call(params)
    for (let i = 0; i < arg.length; i++) {
      url = url.replace(/\[\w+]/, '' + arg[i])
    }
    url = url.replace(/\[\w+]/g, '') // 在没传入参数的情况下把[param]替换为空
    // 添加loading
    // if (arg.length > 0 && isObject(arg[arg.length - 1])) {
    //   hasLoading = arg[arg.length - 1].loading === true
    //   if (hasLoading) {
    //     Vue.$vux.loading.show({
    //       text: 'Loading'
    //     })
    //   }
    // }

    return new Promise((resolve, reject) => {
      instance.get(url)
      .then(res => {
        // if (hasLoading) {
        //   Vue.$vux.loading.hide()
        // }
        // 如果是json 先转成对象
        if (typeof res === 'string') {
          res = JSON.parse(res)
        }
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
  post (url, arg) {
    let params = arg[0] || {}
    // let hasLoading = arg[1] || false
    // if (hasLoading) {
    //   Vue.$vux.loading.show({
    //     text: 'Loading'
    //   })
    // }
    return new Promise((resolve, reject) => {
      instance.post(url, params)
      .then(res => {
        // if (hasLoading) {
        //   Vue.$vux.loading.hide()
        // }
        // 如果是json 先转成对象
        if (typeof res === 'string') {
          res = JSON.parse(res)
        }
        resolve(res.data) // resolve函数作用将promise对象状态从未完成变为成功
      }).catch(error => {
        // if (hasLoading) {
        //   Vue.$vux.loading.hide()
        // }
        reject(error) // reject函数作用将promise对象状态从未完成变为失败
      })
    })
  }
}
export default new API().init()

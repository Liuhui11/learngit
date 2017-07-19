# no-music-local
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
## 开始项目
> 一个展示个人视频作品的网站，主要用来介绍视频内容
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
## 项目骨架
### 路由设置

```
import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../components/homeDefault')), 'homeDefault') // 路由懒加载设置
  }, {
    path: '/videoDetail/:id',
    component: r => require.ensure([], () => r(require('../components/videoDetail')), 'videoDetail')
  }]
}]

// 调用
<router-link :to="'/videoDetail/' + item.id">
    <img :src="item.cover">
</router-link>

```

## mock数据
http://www.jianshu.com/p/ccd53488a61b vue mock数据 方法2

坑：

```
"mockdev": "npm run mock & npm run dev" 并没有执行两个任务
"mockdev": "npm run mock ｜ npm run dev" 这样才是正确的
```

```
// vue使用axios配置
import axios from 'axios' 
Vue.prototype.$ajax = axios // 直接在组件里是获取不到axios，需要将axios添加到vue的原型里面
```
```
proxyTable: {
        '/api': {
            target: 'http://localhost:3000/',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
this.$ajax.get('/api/posts') 
    .then(
      m => console.log(m.data)
    )
    
// 如上所写并没有生效，原因要开启代理 build/dev-server.js搜索proxy api requests
// 进行restful请求测试：在chrome浏览器输入"chrome://apps/"打开应用postman
```
### 解决跨域请求
https://github.com/mzabriskie/axios/blob/master/COOKBOOK.md jsonp

```
npm install axios promise --save
```
JSON.parse() 将一个字符串解析为JSON，可选地转换生成的值及其属性，并返回值

## 引入第三方插件
### 在vue中全局引入jquery遇到的坑
遇到问题现在项目的github issue中搜索，然后可以去google搜索，建议最好看官方文档

全局引入jquery和bootstrap
```
// build.js/webpack.base.conf.js
plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ]
// main.js
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
Vue.prototype.$jQuery = jQuery // 将jQuery绑定到vue的全局属性上

// component调用
this.$nextTick(() => {
  this.$jQuery('.carousel').carousel()
})
```

## 上线
1. 购买服务器
2. 必须要有域名和主机才能进行备案，备案通过网站才能解析成功以便用户可以访问，在备案还没成功之前可以暂时先用临时域名测试或者访问

### 域名绑定&&备案
https://help.aliyun.com/knowledge_detail/36922.html?spm=5176.7736895.2.1.trXB79

### 服务器
服务器主要看带宽、流量、存储空间大小、数据库大小

### 问题
20170613更新
完成了视频列表页的骨架
#### vue build打包上线渲染不了
解决：路由的问题 https://cnodejs.org/topic/583c1a946add41f206000d40 

20170614更新
#### 给视频加封面图
1. 大小要与视频大小比例一致
2. poster图片的尺寸是根据你视频大小的尺寸进行缩放的。只需要preload的属性改为none，不预加载视频，poster图片就不知道你要播放的视频尺寸是多大，就不会进行缩放


==20170622更新==

使用cdn引入bootstrap模块

安装loader-less模块以便支持less语法

==20170624更新==

视频在浏览器播放不了

![image](https://raw.githubusercontent.com/Liuhui11/note-images/master/images/image.png)

视频的编码格式不对， MP4有4种编码，MPEG4(DivX)，MPEG4(Xvid)，AVC(H264)， HEVC(H265)，用工具转换成H264编码就可以网页正常播放了



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

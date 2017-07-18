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

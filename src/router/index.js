import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',           // 主页
      name: 'Home',
      component: Home
    },
    {
      path: '/listPage',    // 列表页面
      name: 'listPage',
      component: resolve => require(['@/components/listPage/index'],resolve)
    },
    {
      path: '/detailsPage', // 详情页面
      name: 'detailsPage',
      component: resolve => require(['@/components/detailsPage/index'],resolve)
    },
    {
      path: '/personalCenter',// 个人中心
      name: 'personalCenter',
      component: resolve => require(['@/components/personalCenter/index'],resolve)
    },
    {
      path: '/BGManagement', //后台管理
      name: 'BGManagement',
      component: resolve => require(['@/components/BGManagement/index'],resolve)
    }
  ]
})

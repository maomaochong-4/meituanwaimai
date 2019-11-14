/*
 * @Author: your name
 * @Date: 2019-11-07 20:30:55
 * @LastEditTime: 2019-11-14 10:44:58
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import liebiao from '@/pages/liebiao'
import dindan from '@/pages/dindan'
import GoodsList from '@/pages/GoodsList'
import huiyuan from '@/pages/huiyuan'
import xiangqingye from '@/pages/xiangqingye'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/liebiao',
      name: 'liebiao',
      component: liebiao
    },
    {
      path: '/dindan',
      name: 'dindan',
      component: dindan
    },
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan
    },
    {
      path: '/xiangqingye',
      name: 'xiangqingye',
      component: xiangqingye
    }
  ]
})

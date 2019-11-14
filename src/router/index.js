/*
 * @Author: your name
 * @Date: 2019-11-04 18:15:56
 * @LastEditTime: 2019-11-14 16:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCarPage from '@/pages/ShoppingCarPage';
import MinePage from '@/pages/MinePage';
import LoadPage from '@/pages/LoadPage';
import DizhiPage from '@/pages/DizhiPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgetPage from '@/pages/ForgetPage';
import ZujianPage from '@/pages/ZujianPage';



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ShoppingCarPage',
      name: 'ShoppingCarPage',
      component: ShoppingCarPage
    },
    {
      path: '/MinePage',
      name: 'MinePage',
      component: MinePage
    },
    {
      path: '/LoadPage',
      name: 'LoadPage',
      component: LoadPage
    },
    {
      path: '/DizhiPage',
      name: 'DizhiPage',
      component: DizhiPage
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/ForgetPage',
      name: 'ForgetPage',
      component: ForgetPage
    },
    {
      path: '/ZujianPage',
      name: 'ZujianPage',
      component: ZujianPage
    }
  ]
})

/*
 * @Author: 郭涛
 * @Date: 2019-11-14 19:34:12
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-16 11:46:30
 * @Description: 
 */

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import Sousuoye from '@/pages/Sousuoye';
import Fenleim from '@/pages/Fenleim';
import jiesuanyemian from '@/pages/jiesuanyemian';
import ShoppingCarPage from '@/pages/ShoppingCarPage';
import MinePage from '@/pages/MinePage';
import LoadPage from '@/pages/LoadPage';
import DizhiPage from '@/pages/DizhiPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgetPage from '@/pages/ForgetPage';
import ZujianPage from '@/pages/ZujianPage';
import liebiao from '@/pages/liebiao'
import dindan from '@/pages/dindan'
import GoodsList from '@/pages/GoodsList'
import huiyuan from '@/pages/huiyuan'
import xiangqingye from '@/pages/xiangqingye'

import huiyuansouwei from '@/pages/huiyuansouwei'
import xingdizhi from '@/pages/xingdizhi'

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/index.html',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Sousuoye',
      name: 'Sousuoye',
      component: Sousuoye,
      beforeEnter(to,from,next){
        // console.log("/BookDetailPage这个路径守卫了");
        next();
     }
    },
    {
      path: '/liebiao',
      name: 'liebiao',
      component: liebiao
    },
    {
      path: '/dindan',
      name: 'dindan',
      component: dindan,
       meta:{
        requireAuth:true
      }
    },
    {
      path: '/GoodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/huiyuan',
      name: 'huiyuan',
      component: huiyuan,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/xiangqingye',
      name: 'xiangqingye',
      component: xiangqingye
    },
    {
      path: '/Fenleim',
      name: 'Fenleim',
      component: Fenleim,
    },
    {
      path: '/jiesuanyemian',
      name: 'jiesuanyemian',
      component: jiesuanyemian
    },
    {
      path: '/huiyuansouwei',
      name: 'huiyuansouwei',
      component: huiyuansouwei
    },
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
    },
    {
      path: '/xingdizhi',
      name: 'xingdizhi',
      component: xingdizhi
    }
  ]
})
router.beforeEach((to,from,next)=>{
  // if(to.fullPath=='/login' || to.fullPath='/Index'){
  //     next();  
  // }else if(!localStorage.getItem('username')){
  //     next(false);
  // }
  // console.log('前置守卫');
  // console.log(to);
  // console.log(from);
  // // next(false);
  // next();

  if(to.meta.requireAuth){
      console.log('前置守卫');
      console.log(localStorage.getItem('userPhone'));
      if(localStorage.getItem('userPhone')==null){
          next('/ZujianPage');
      }else{
          next();
      }
  }else{
     next();
  }
});

router.afterEach((to, from) => {
// console.log('后置守卫');
// console.log(to);
// console.log(from);
})

export default  router;

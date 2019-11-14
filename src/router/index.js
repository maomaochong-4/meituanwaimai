/*
 * @Author: 马川
 * @Date: 2019-11-06 20:31:09
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-14 12:20:14
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index';
import Sousuoye from '@/pages/Sousuoye';
import Fenleim from '@/pages/Fenleim';
import jiesuanyemian from '@/pages/jiesuanyemian';

Vue.use(Router)

let router= new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
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
      
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/Fenleim',
      name: 'Fenleim',
      component: Fenleim,
        
      // meta:{
      //   requireAuth:true
      // }
    },
    {
      path: '/jiesuanyemian',
      name: 'jiesuanyemian',
      component: jiesuanyemian
    },
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
      console.log(localStorage.getItem('username'));
      if(localStorage.getItem('username')==null){
          next(false);
          // console.log("to.fullPath:"+to.fullPath);
          // next('/LoginPage'+to.fullPath);
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

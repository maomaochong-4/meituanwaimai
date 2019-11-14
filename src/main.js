<<<<<<< HEAD
=======
/*
 * @Author: 马川
 * @Date: 2019-11-06 20:31:09
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-14 09:55:42
 * @Description: 
 */
>>>>>>> machuan
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
=======
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(ElementUI);
axios.defaults.baseURL = '/api/'

>>>>>>> machuan
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

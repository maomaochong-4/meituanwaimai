<!--
 * @Author: your name
 * @Date: 2019-11-12 18:59:00
 * @LastEditTime: 2019-11-13 10:26:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\RegisterPage.vue
 -->
<template>
  <div class="box">
    <Ztop></Ztop>
    <Register></Register>
    <Zbottom></Zbottom>
  </div>
</template>
<script>
import Ztop from '../components/Ztop';
import Register from '../components/Register';
import Zbottom from '../components/Zbottom';

export default {
  name: 'RegisterPage',
  data () {
    return {
      
    }
  },
  components:{
     Ztop,Register,Zbottom
  }
}
</script>

<style scoped>



</style>
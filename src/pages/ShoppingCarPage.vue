<!--
 * @Author: your name
 * @Date: 2019-11-09 09:52:27
 * @LastEditTime: 2019-11-15 23:24:58
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\Shoppingcar.vue
 -->
<template>
  <div class="box">
    <ShoppingCar></ShoppingCar>
    <!-- <Allcheck></Allcheck> -->
  </div>
</template>
<script>
import ShoppingCar from '../components/ShoppingCar';
// import Allcheck from '../components/Allcheck';

export default {
  name: 'ShoppingCarPage',
  data () {
    return {
      
    }
  },
  components:{
    ShoppingCar
  }
}
</script>

<style scoped>
 body,html{
   height: 100%;
 }
 body{
     background: #f2f2f2;
   }

</style>
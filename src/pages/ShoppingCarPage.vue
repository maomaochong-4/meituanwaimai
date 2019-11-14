<!--
 * @Author: your name
 * @Date: 2019-11-09 09:52:27
 * @LastEditTime: 2019-11-14 13:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\Shoppingcar.vue
 -->
<template>
  <div class="box">
    <ShoppingCar></ShoppingCar>
    <Allcheck></Allcheck>
  </div>
</template>
<script>
import ShoppingCar from '../components/ShoppingCar';
import Allcheck from '../components/Allcheck';

export default {
  name: 'ShoppingCarPage',
  data () {
    return {
      
    }
  },
  components:{
    ShoppingCar,Allcheck
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
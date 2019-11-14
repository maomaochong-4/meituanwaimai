<!--
 * @Author: your name
 * @Date: 2019-11-12 16:03:46
 * @LastEditTime: 2019-11-12 17:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\DizhiPage.vue
 -->
<template>
  <div class="box">
    <Dizhi></Dizhi>
    <Liebiao></Liebiao>
  </div>
</template>
<script>
import Dizhi from '../components/Dizhi';
import Liebiao from '../components/Liebiao';


export default {
  name: 'DizhiPage',
  data () {
    return {
      
    }
  },
  components:{
     Dizhi,Liebiao
  }
}
</script>

<style scoped>



</style>
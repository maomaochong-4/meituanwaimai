<!--
 * @Author: your name
 * @Date: 2019-11-13 11:14:23
 * @LastEditTime: 2019-11-13 11:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\ZujianPage.vue
 -->
<template>
  <div class="box">
    <Zujian></Zujian>
    <Footer></Footer>
  </div>
</template>
<script>
import Zujian from '../components/Zujian';
import Footer from '../components/Footer';

export default {
  name: 'ZujianPage',
  data () {
    return {
      
    }
  },
  components:{
    Zujian,Footer
  }
}
</script>

<style scoped>



</style>
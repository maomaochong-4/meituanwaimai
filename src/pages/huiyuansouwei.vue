<!--
 * @Author: your name
 * @Date: 2019-11-13 11:14:23
 * @LastEditTime: 2019-11-15 14:07:38
 * @LastEditors: 马川
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\ZujianPage.vue
 -->
<template>
  <div class="boxdasmd">
    <huiyuansou></huiyuansou>
    <Footer></Footer>
  </div>
</template>
<script>
import huiyuansou from '../components/huiyuansou';
import Footer from '../components/Footer';

export default {
  name: 'huiyuansouwei',
  data () {
    return {
    }
  },
  components:{
    huiyuansou,Footer
  }
}
</script>
 
<style scoped>


</style>
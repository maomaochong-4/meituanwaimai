<!--
 * @Author: your name
 * @Date: 2019-11-11 16:53:50
 * @LastEditTime: 2019-11-11 21:31:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\Mine.vue
 -->
<template>
  <div class="box">
    <Denglu></Denglu>
    <Mine></Mine>
    <Footer></Footer>
  </div>
</template>
<script>
import Denglu from '../components/Denglu';
import Mine from '../components/Mine';
import Footer from '../components/Footer';

export default {
  name: 'MinePage',
  data () {
    return {
      
    }
  },
  components:{
      Denglu,Mine,Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
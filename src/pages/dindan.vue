<!--
 * @Author: your name
 * @Date: 2019-11-11 16:24:11
 * @LastEditTime: 2019-11-13 14:50:24
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\dindan.vue
 -->

<template>
    <div class="box">
        <Ddtop></Ddtop>
        <dindan></dindan>
        <Footer></Footer>
    </div>
</template>
<script>
import Ddtop from '../components/Ddtop';
import dindan from '../components/dindan';
import Footer from '../components/Footer';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      Ddtop,dindan,Footer
  }
}
</script>

<style scoped>
#box{
  background-color: #fff;
}
</style>

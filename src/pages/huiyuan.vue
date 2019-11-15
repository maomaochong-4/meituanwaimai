<!--
 * @Author: your name
 * @Date: 2019-11-11 20:01:31
 * @LastEditTime: 2019-11-15 11:05:43
 * @LastEditors: 马川
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\huiyuan.vue
 -->
<template>
    <div class="box">
        <huiyuan1></huiyuan1>
        <lhHYzq></lhHYzq>
        <sandatequan></sandatequan>
        <Footer></Footer>
    </div>
</template>
<script>
import huiyuan1 from '../components/huiyuan1';
import lhHYzq from '../components/lhHYzq';
import sandatequan from '../components/sandatequan';
import Footer from '../components/Footer';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      huiyuan1,Footer,lhHYzq,sandatequan
  }
}
</script>

<style scoped>
 
</style>

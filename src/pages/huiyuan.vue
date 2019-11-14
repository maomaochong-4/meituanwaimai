<!--
 * @Author: your name
 * @Date: 2019-11-11 20:01:31
 * @LastEditTime: 2019-11-12 09:51:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\huiyuan.vue
 -->
<template>
    <div class="box">
        <huiyuan1></huiyuan1>
        <lhHYzq></lhHYzq>
        <sandatequan></sandatequan>
        <Footer2></Footer2>
    </div>
</template>
<script>
import huiyuan1 from '../components/huiyuan1';
import lhHYzq from '../components/lhHYzq';
import sandatequan from '../components/sandatequan';
import Footer2 from '../components/Footer2';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      huiyuan1,Footer2,lhHYzq,sandatequan
  }
}
</script>

<style scoped>
 
</style>

<!--
 * @Author: your name
 * @Date: 2019-11-11 21:51:30
 * @LastEditTime: 2019-11-13 10:15:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\pages\ZhucePage.vue
 -->
<template>
  <div class="box">
    <Ztop></Ztop>
    <Load></Load>
    <Zbottom></Zbottom>
  </div>
</template>
<script>
import Ztop from '../components/Ztop';
import Load from '../components/Load';
import Zbottom from '../components/Zbottom';

export default {
  name: 'LoadPage',
  data () {
    return {
      
    }
  },
  components:{
     Ztop,Load,Zbottom
  }
}
</script>

<style scoped>



</style>
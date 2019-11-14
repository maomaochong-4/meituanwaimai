<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-11 16:17:02
 * @Description: 
 -->
<template>
  <div class="box">
      <sousuotou class=""></sousuotou>
      <ssy class="sema"></ssy>
      <remensousuo class=""></remensousuo>
  </div>
</template>

<script>
import sousuotou from '@/components/sousuotou';
import ssy from '@/components/ssy';
import remensousuo from '@/components/remensousuo';
export default {
  name: 'Sousuoye',
  data () {
    return {
    }
  },
  components:{
   sousuotou,ssy,remensousuo
  },
}
</script>
    
<style scoped>
  .sema{
    width: 60%;
  }
</style>

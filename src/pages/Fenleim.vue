<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-12 09:41:29
 * @Description: 
 -->
<template>
  <div class="box">
      <toubu></toubu>
      <fenleileft></fenleileft>
  </div>
</template>

<script>
import toubu from '@/components/toubu';
import fenleileft from '@/components/fenleileft';
export default {
  name: 'Fenleim',
  data () {
    return {
    }
  },
  components:{
      toubu,fenleileft
  },
}
</script>
    
<style scoped>
</style>

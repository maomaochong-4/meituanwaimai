<!--
 * @Author: your name
 * @Date: 2019-11-07 21:31:59
 * @LastEditTime: 2019-11-13 10:30:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\liebiao.vue
 -->
<template>
    <div class="box">
        <liebiaosousuo class="q1"></liebiaosousuo>
        <zhaopan></zhaopan>
        <lbTehui></lbTehui>
        <jrtcTuijian></jrtcTuijian>
        <lbFenlei></lbFenlei>
        <lbnxTbdw></lbnxTbdw>
        <fujinshangjia></fujinshangjia>
    </div>
</template>
<script>
import liebiaosousuo from '../components/liebiaosousuo';
import zhaopan from '../components/zhaopan';
import lbTehui from '../components/lbTehui';
import jrtcTuijian from '../components/jrtcTuijian';
import lbFenlei from '../components/lbFenlei';
import lbnxTbdw from '../components/lbnxTbdw';
import fujinshangjia from '../components/fujinshangjia';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      liebiaosousuo,zhaopan,lbTehui,jrtcTuijian,lbFenlei,lbnxTbdw,fujinshangjia
  }
}
</script>

<style scoped>
.q1{
  margin-bottom: .1rem;
}

</style>

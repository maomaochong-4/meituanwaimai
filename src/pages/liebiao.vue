<!--
 * @Author: your name
 * @Date: 2019-11-07 21:31:59
 * @LastEditTime: 2019-11-14 21:00:55
 * @LastEditors: 郭涛
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
        <fujinshangjia2></fujinshangjia2>
    </div>
</template>
<script>
import liebiaosousuo from '../components/liebiaosousuo';
import zhaopan from '../components/zhaopan';
import lbTehui from '../components/lbTehui';
import jrtcTuijian from '../components/jrtcTuijian';
import lbFenlei from '../components/lbFenlei';
import lbnxTbdw from '../components/lbnxTbdw';
import fujinshangjia2 from '../components/fujinshangjia2';
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      liebiaosousuo,zhaopan,lbTehui,jrtcTuijian,lbFenlei,lbnxTbdw,fujinshangjia2
  }
}
</script>

<style scoped>
.q1{
  margin-bottom: .1rem;
}

</style>

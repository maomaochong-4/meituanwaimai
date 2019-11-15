<!--
 * @Author: your name
 * @Date: 2019-11-12 16:06:43
 * @LastEditTime: 2019-11-15 21:14:19
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\xiangqingye.vue
 -->
<template>
    <div class="box">
        <xiangqing1></xiangqing1>
        <xiangqing2></xiangqing2>
        <xiangqing3></xiangqing3>
        <xiangqing4></xiangqing4>
        <xiangqing5></xiangqing5>
        <xiangqing6></xiangqing6>
    </div>
</template>
<script>
import xiangqing1 from '../components/xiangqing1'
import xiangqing2 from '../components/xiangqing2'
import xiangqing3 from '../components/xiangqing3'
import xiangqing4 from '../components/xiangqing4'
import xiangqing5 from '../components/xiangqing5'
import xiangqing6 from '../components/xiangqing6'
export default {
  name: 'back',
  data () {
    return {
      
    }
  },
  components:{
      xiangqing1,xiangqing2,xiangqing3,xiangqing4,xiangqing5,xiangqing6
  }
}
</script>

<style scoped>
 
</style>

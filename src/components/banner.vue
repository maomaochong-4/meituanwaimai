<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-10 19:35:13
 * @Description: "轮播图"
 -->
<template>
  <div class="box">
      <div class="box1">
         <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/banner1.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner2.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner3.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner4.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner5.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner6.png" alt=""></mt-swipe-item>
        </mt-swipe>
      </div>
  </div>

</template>

<script>
export default {
  name: 'top',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 100%;
    height: 1.14rem;
}
.box1{
    width: 96%;
    height: 1.14rem;
    margin:.1rem auto;
}
span{
    color: #6a6a6a;
}
img{
  width: 100%;
  height: 98%;
  border-radius: 15px;
}
.mt-swipe-item{
  border: none;
}

</style>

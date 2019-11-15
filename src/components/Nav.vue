<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-15 10:46:41
 * @Description: "导航栏"
 -->
<template>
  <div class="box">
      <div class="box1">
          <router-link to="/Fenleim"><span>冒菜</span></router-link>
          <span>|</span>
          <router-link to="/Fenleim"><span>酸辣粉</span></router-link>
          <span>|</span>
          <router-link to="/Fenleim"><span>必胜客</span></router-link>
          <span>|</span>
          <router-link to="/Fenleim"><span>小竹签烤肉</span></router-link>
          <span>|</span>
          <router-link to="/Fenleim"><span>coco奶茶</span></router-link>
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
    height: .42rem;
}
.box1{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 96%;
    height: .42rem;
    margin: 0 auto
}
span{
    color: #6a6a6a;
}
</style>

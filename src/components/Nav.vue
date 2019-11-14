<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-10 19:36:23
 * @Description: "导航栏"
 -->
<template>
  <div class="box">
      <div class="box1">
          <span>冒菜</span>
          <span>|</span>
          <span>酸辣粉</span>
          <span>|</span>
          <span>必胜客</span>
          <span>|</span>
          <span>小竹签烤肉</span>
          <span>|</span>
          <span>coco奶茶</span>
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

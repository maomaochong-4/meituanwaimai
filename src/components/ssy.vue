<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-11 16:32:37
 * @Description: "搜索框"
 -->
<template>
  <div class="ss">
    <div class="box">
        <img src="../assets/sousuo.png" alt="" class="box1">
        <input type="text" :placeholder="tip">
    </div>
    <span>搜索</span>
  </div>
 
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
     tip:"啃得驴驴肉火烧 满25减10"
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 89%;
    height: .35rem;
    margin:0 auto;
    background: #f4f0ef;
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.box1{
    width: .25rem;
    height: .25rem;
    margin-left: .2rem
}
input{
  margin-left: .05rem;
  width: 100%;
  height: 100%;
  border: 0;
  background: #f4f0ef;
  outline:none;
    border-radius: 10px;
}
.ss{
    display: flex;
    width: 96%;
}
span{
    height: .38rem;
    line-height: .38rem
}
</style>

<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:34
 * @LastEditTime: 2019-11-11 18:07:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\Goodscakes.vue
 -->

<template>
    <div class="box">
        <img class="img_01" src="../assets/img/cakes.png" alt="">
        <span class="cakes">热销</span>
        <span>热销</span>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
            
        }
    },
     methods:{
     
     }
}
</script>
  
<style scoped>
  .img_01{
      width: .18rem;
      height: .18rem;
      float:left;
      display: block;
      margin:10px 5px 10px 14px;
  }
  span{
      font-size: 10px;
      float:left;
      margin:10px 14px;
      display: block;
  }
  .cakes{
      margin-left: 0;
  }
</style>
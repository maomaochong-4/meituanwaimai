<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:43
 * @LastEditTime: 2019-11-11 18:07:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\Goodsheader.vue
 -->

<template>
    <div class="box">
        <div class="goods_head">
            <img class="image_1" src="../assets/img/return_w.png" alt="" @click="back()">
            <img class="image" src="../assets/img/more.png" alt="">
            <img class="image" src="../assets/img/collection.png" alt="">
            <router-link to="/ShoppingCar"><img class="image_2" src="../assets/img/shoppcar.png" alt=""></router-link>
            <router-link to="/Search"><img class="image_2" src="../assets/img/search_w.png" alt=""></router-link>
        </div>
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
      back(){
          this.$router.go(-1);
        }
     }
}
</script>

<style scoped>
   .goods_head{
       background: linear-gradient(to right,#454141 , #837c7c);
       width: 100%;
       height: 1.5rem;
   }
   .goods_head img{
       width: .22rem;
       height: .22rem;
       display: block;
       float: right;
       margin:10PX 8PX;
   }
   .goods_head .image_1{
       float: left;
   }
   .goods_head .image_2{
       width: .18rem;
       height: .18rem;
       margin:12PX 8PX;
   }
</style>
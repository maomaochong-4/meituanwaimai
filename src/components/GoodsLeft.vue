<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:43
 * @LastEditTime: 2019-11-11 18:18:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\GoodsLeft.vue
 -->

<template>
       <div class="Goods_left">
           <p>热卖</p>
           <p>折扣</p>
           <p>进店必买</p>
           <p>进店必点</p>
           <p>馋嘴小吃</p>
           <p>特色菜</p>
           <p>粥饮料类</p>
           <p>特色小吃类</p>
           <p>新品上市</p>
           <p>米饭类</p>
           <p>西餐类</p>
        </div>
</template>

<script>
export default {
    name:"Goodsflex",
    data(){
        return{
            
        }
    },
     methods:{
     
     }
}
</script>
  
<style scoped>
   .Goods_left{
       width: 19%;
       height: 10rem;
       background: #f5f0f0;
       clear: both;
       padding:0 10px 0 10px;
   }
   .Goods_left p{
       font-size: .12rem;
       line-height: .6rem;
       color: rgb(83, 82, 82);
   }
</style>
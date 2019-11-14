<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:56
 * @LastEditTime: 2019-11-13 11:53:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\pages\GoodsList.vue
 -->

<template>
    <div class="GoodsList">
        <Goodsheader></Goodsheader>
        <Goodsflex class="Goodsfiex"></Goodsflex>
        <Goodsnev></Goodsnev>
        <Goodscakes></Goodscakes>
    <div class="goods_fl">
         <GoodsLeft></GoodsLeft>
        <GoodsRight></GoodsRight>
    </div>
    </div>
</template>

<script>
import Goodsheader from '../components/Goodsheader';
import Goodsflex from '../components/Goodsflex';
import Goodsnev from '../components/Goodsnev';
import Goodscakes from '../components/Goodscakes';
import GoodsLeft from '../components/GoodsLeft';
import GoodsRight from '../components/GoodsRight';


export default {
    name:"Search",
    data(){
        return{
            
        }
    },
    components:{
        Goodsheader,Goodsflex,Goodsnev,Goodscakes,GoodsLeft,GoodsRight
    }
}
</script>

<style scoped>
    .Goodsfiex{
        margin-top:-15%; 
    }
    .goods_fl{
       clear: both;
       display: flex;
       justify-content: space-between;
    }
</style>
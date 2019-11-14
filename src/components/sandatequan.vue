<!--
 * @Author: your name
 * @Date: 2019-11-12 09:49:39
 * @LastEditTime: 2019-11-12 10:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\sandatequan.vue
 -->
<template>
    <div id="box">
        <div class="boxs">
           <p class="p1">尊享会员享<span class="span1">3</span>大特权</p>
           <img src="../assets/img/tequan.png" alt="" class="img1">
        </div>
        <img src="../assets/img/tequan1.png" alt="" class="img2">
        <img src="../assets/img/tequan2.png" alt="" class="img2">
        <img src="../assets/img/tequan3.png" alt="" class="img2">
        <p class="p2">常见问题与说明<img src="../assets/img/liebiaoyjt.png" alt="" class="img3"></p>
        <img src="../assets/img/kthuiyuan.png" alt="" class="img2">
    </div>
</template>
<script>
</script>

<style scoped>
    #box{
        margin-bottom: .6rem;
        background-color: #fff;
    }
    .boxs{
        width: 100%;
        padding:.3rem 0 .2rem 0; 
    }
    .p1{
        font-size: 19px;
        font-weight: 900;
        color: #3b3b39;
        text-indent: .2rem;
        line-height: .4rem;
    }
    .span1{
        font-size: 24px;
        color: #c18f6e;
    }
    .img1{
        width: 100%;
    }
    .img2{
        width: 100%;
        display: block;
    }
    .p2{
        line-height: .5rem;
        font-size: .18rem;
        text-align: center;
        background-color: #ffffff;
    }
    .img3{
        height: .15rem;
        position: relative;
        left: 5px;
        /* top: 2px; */
    }
</style>

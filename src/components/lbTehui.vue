<!--
 * @Author: your name
 * @Date: 2019-11-09 15:42:02
 * @LastEditTime: 2019-11-13 14:12:20
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\lbTehui.vue
 -->


<template>
    <div id="box">
        <div class="mmm">
            <p class="p1">开业特惠，0.1元菜</p>
            <div class="tehuitp">
                <router-link to="/xiangqingye" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜</p>
                        <span class="ss1">￥36.99</span>
                        <span class="ss2">￥3.33</span>
                    </div>
                </router-link>
                <router-link to="/xiangqingye" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">美味烧烤一人份</p>
                        <span class="ss1">￥15.00</span>
                        <span class="ss2">￥2.00</span>
                    </div>
                </router-link>
                <router-link to="/xiangqingye" class="fontsize fontsize3">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨</p>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                    </div>
                </router-link>
            </div>
        </div>
        
    </div>  
</template>

<script>

</script>

<style scoped>
    .mmm{
        width: 94%;
        height: 1.7rem;
        margin-left: 3%;
    }
   

    .p1{
        font-size: .2rem;
        font-weight: 900;
    }

    .tehuitp{
        margin-top: .1rem;
        display: flex;
    }

    .fontsize{
        width: 33.3333%;
        margin-right: 5%;
    }
    .fontsize3{
        margin-right: 0;
    }
    .qwer{
        width: 100%;
        height:.95rem;
        
    }

    .qwer img{
        width: 100%;
        height: 100%;
    }
    .p2{
        color: #000000;
    }
    .ss1{
        font-size: 14px;
        font-weight:900;
        color: red;
    }

    .ss2{
        font-size: 12px;
        text-decoration: line-through;
        color: #666;
    }
</style>

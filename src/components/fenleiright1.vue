<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 16:08:31
 -->
<template>
    <div class="mmm">
    <div class="box-m" id="tiandian">  
        <div class="right-1">
          <span class="right-4">甜品饮料</span>
          <span>去频道</span><i class=" el-icon-arrow-right"></i>
        </div>
        <div class="right-2">
          <ul>
          <li>
            <router-link to="/liebiao">
              <div class="right-3">
              <img src="../assets/fenlei8.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">全部</p>
              <p><span class="box6">1980</span></p>
            </div>
            </router-link>
          </li>
            <li>
            <router-link to="/liebiao">
              <div class="right-3">
              <img src="../assets/fenlei9.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">面包蛋糕</p>
              <p><span class="box6">49</span></p>
            </div>
            </router-link>
          </li>
            <li>
            <div class="right-3">
              <img src="../assets/fenlei10.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">奶茶果汁</p>
              <p><span class="box6">36</span></p>
            </div>
          </li>
           <li>
            <div class="right-3">
              <img src="../assets/fenlei11.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">可口甜品</p>
              <p><span class="box6">45</span></p>
            </div>
          </li>
            <li>
            <div class="right-3">
              <img src="../assets/fenlei12.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">醒脑咖啡</p>
              <p><span class="box6">24</span></p>
            </div>
          </li>
          <li>
            <div class="right-3">
              <img src="../assets/fenlei14.png" alt="">
            </div>
            <div class="box3">
              <p class="box1">凉茶冰激凌</p>
              <p><span class="box6">54</span></p>
            </div>
          </li>  
        </ul>
        </div>
    </div>
  </div>  
</template>

<script>
// import axios from 'axios';
// import {Indicator} from 'mint-ui';

export default {
  name: 'fenleiright',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
.right-1{
  margin-top: .6rem;
    width: 100%;
    height: .4rem;
  display: flex;
  justify-content: space-between;
  line-height: .4rem;
    background: #f7f9fa;
}
.right-4{
  margin-left: .2rem;
    width: 64%;
    height: .4rem;
    line-height: .4rem
}
i{
  font-size: 20px;
  color: #999;
  margin-top: .1rem
}
span{
  color: #999;
}
.right-2{
  width: 100%;
}
.right-3{
  margin-top: .15rem;
  width: .5rem;
  height: .5rem;
  margin-left: .2rem
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%
}
ul{
  display: flex;
  flex-wrap: wrap
}
li{
  width: 33.33%;
  height: 1.32rem;
}
p{
  width: 100%;
  height: .2rem;
  text-align: center;
  line-height: .2rem;
}
.box3{
  margin-top: .05rem
}
.box6{
    display: block;
    width: .5rem;
    height: .2rem;
    background: rgb(226, 225, 225);
    border-radius: 10px;
    line-height: .2rem;
    margin-left: .2rem
}
</style>

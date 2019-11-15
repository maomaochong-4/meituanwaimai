<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 16:05:09
 -->
<template>
    <div class="box">
         <div class="classBox">
             <ul>
                 <!-- <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
                  -->
                  <!-- <router-link to="fenleiright"> -->
                       <li>
                           <router-link to="/liebiao">
                                <p class="box1">美食</p>
                                <p><span>1980</span></p>
                           </router-link>
                        </li>
                  <!-- </router-link> -->
                  <!-- <router-link to="fenleiright1"> -->
                        <li>
                           <router-link to="/liebiao">
                                <p class="box1">甜点饮品</p>
                                <p><span>1980</span></p>
                           </router-link>
                        </li> 
                  <!-- </router-link> -->
                  <li>
                           <router-link to="/liebiao">
                                <p class="box1">超市便利</p>
                                <p><span>1980</span></p>
                           </router-link>
                  </li>
                  <li>
                        <router-link to="/liebiao">
                            <p class="box1">蔬菜水果</p>
                            <p><span>1980</span></p>
                        </router-link>
                   </li>
                  <li>
                        <router-link to="/liebiao">
                            <p class="box1">送药上门</p>
                            <p><span>1980</span></p>
                        </router-link>
                  </li>
                  <li>
                           <router-link to="/liebiao">
                                <p class="box1">浪漫鲜花</p>
                                <p><span>1980</span></p>
                            </router-link>

                  </li>
                  <li>
                      <p class="box1">早餐</p>
                      <p><span>1980</span></p>
                  </li>
                  <li>
                      <p class="box1">正品优选</p>
                      <p><span>1980</span></p>
                  </li>
                  <li>
                      <p class="box1">夜宵</p>
                      <p><span>1980</span></p>
                  </li>
             </ul>
         </div>
         <div class="contentBox">
             <fenleiright></fenleiright>
             <fenleiright1></fenleiright1>
             <fenleiright2></fenleiright2>
             <fenleiright3></fenleiright3>
             <fenleiright4></fenleiright4>
         </div>
    </div>  
</template>

<script>
import fenleiright from './fenleiright';
import fenleiright1 from './fenleiright1';
import fenleiright2 from './fenleiright2';
import fenleiright3 from './fenleiright3';
import fenleiright4 from './fenleiright4';
// import Axios from 'axios';

export default {
  name: 'fenleileft',
  data () {
    return {
    }
  },
  components:{
      fenleiright,fenleiright1,fenleiright2,fenleiright3,fenleiright4
  },  
}
</script>

<style scoped>
.box{
    width: 100%;
    display: flex
}
.classBox{
    width: 30%;  
    min-height: 6rem;
    background: #f7f9fa;
    margin-top: .6rem;
    position: fixed;
    left: 0;
}

.classBox ul{
    width: 100%;
    height: .5rem;
}

.classBox ul li{
    width: 100%;
    height: .5rem;
    text-align: center
}

.contentBox{
    width: 70%;
    min-height: 6rem;
    margin-left: 1.24rem;
    /* background: rgb(248, 242, 242); */

}
p{
    margin-top: .02rem;
    width: 100%;
    height: .23rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
span{
    width: .5rem;
    height: .2rem;
    background: rgb(226, 225, 225);
    border-radius: 10px;
    text-align: center;
    line-height: .2rem
}
.box1{
    margin-top: .1rem
}
</style>

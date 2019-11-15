<!--
import Axios from 'axios';
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 20:31:58
 * @Description: "到店自取"
 -->
<template>
  <div class="box">
      <div class="dao">
          <h3 class="dao-1">到店自取<span class="dao-2"> 极速取餐 同享优惠</span></h3>
      </div>
      <div class="dao_1">
          <!-- <li v-for="(leibie,index) in leibies" :key="index">
                <img :src="leibie.img" alt="">
                {{leibie.name}}
              </li> -->
            <div class="dao_2" v-for="(daodianziqu,index) in daodianziqus" :key=index>
                <div  class="dao_23">
                    <img :src="daodianziqu.spic" alt="" class="daom">
                </div>
                <div class="dao_22">
                    <span class="dao_21">{{daodianziqu.sname}}</span>
                    <div class="dao_26">
                        <span class="dao_24">{{daodianziqu.beia}}米</span>
                        <span class="dao_25">省￥{{daodianziqu.beib}}配送费</span>
                    </div>
                    <div class="dao_26">
                        <span class="dao_27">减</span><span class="dao_27 dao_28">折</span><span class="dao_27 dao_28">返</span>
                    </div>
                </div>
            </div>
            <!-- <div class="dao_2">
                <div  class="dao_23">
                    <img src="../assets/dao2.png" alt="" class="daom">
                </div>
                <div class="dao_22">
                    <span class="dao_21">喜唐精致水饺（韭黄肉，大葱肉）</span>
                    <div class="dao_26">
                        <span class="dao_24">683米</span>
                        <span class="dao_25">省￥3配送费</span>
                    </div>
                    <div class="dao_26">
                        <span class="dao_27">减</span><span class="dao_27 dao_28">折</span><span class="dao_27 dao_28">返</span><span class="dao_27 dao_28">赠</span>
                    </div>
                </div>
            </div>
            <div class="dao_2">
               <div  class="dao_23">
                   <img src="../assets/dao1.png" alt="" class="daom">
               </div>
               <div class="dao_22">
                   <span class="dao_21">橘猫椒麻鸡</span>
                   <div class="dao_26">
                       <span class="dao_24">1061米</span>
                       <span class="dao_25">省￥2.5配送费</span>
                   </div>
                  <div class="dao_26">
                       <span class="dao_27">减</span><span class="dao_27 dao_28">折</span>
                  </div>
               </div>
          </div>
          <div class="dao_2">
               <div  class="dao_23">
                   <img src="../assets/dao4.png" alt="" class="daom">
               </div>
               <div class="dao_22">
                   <span class="dao_21">馋猫香锅冒菜（高新...）</span>
                   <div class="dao_26">
                       <span class="dao_24">433米</span>
                       <span class="dao_25">省￥1.5配送费</span>
                   </div>
                  <div class="dao_26">
                       <span class="dao_27">减</span><span class="dao_27 dao_28">折</span><span class="dao_27 dao_28">赠</span>
                  </div>
               </div>
          </div>
          <div class="dao_2">
               <div  class="dao_23">
                   <img src="../assets/dao5.png" alt="" class="daom">
               </div>
               <div class="dao_22">
                   <span class="dao_21">东仔烤肉饭（鸡米花）</span>
                   <div class="dao_26">
                       <span class="dao_24">344米</span>
                       <span class="dao_25">省￥2.5配送费</span>
                   </div>
                  <div class="dao_26">
                       <span class="dao_27">减</span><span class="dao_27 dao_28">新</span><span class="dao_27 dao_28">折</span><span class="dao_27 dao_28">返</span>
                  </div>
               </div>
          </div> -->
      </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'top',
  data () {
    return {
      daodianziqus:[
      ],
    }
  },
  created() {
        axios.get('/shop/all')
      .then(res=>{
       this.daodianziqus =res.data;
        console.log(this.daodianziqus)
      })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .dao{
        width: 92%;
        height: .55rem;
        margin:0 auto
    }
    .dao-1{
        font-size: 22px;
        color: #232323
    }
    .dao-2{
        font-size: 14px;
        color: #919191;
        margin-left: .1rem;
    }
    .dao_1{
        display: -webkit-flex;
        overflow-x: auto;
    }
    .dao_2{
        width: 81%;
        height: 1rem;
        display: flex;
	    flex-shrink:0;
    }
    .daom{
        width: 1.11rem;
        height: 1rem;
        border-radius: 10px;
        border: 1px solid #f1f1f1
    }
    .dao_21{
        display: block;
        margin-left: .2rem;
        margin-top: .12rem;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        font-weight: 600
    }
    .dao_22{
        width: 62%;
        height: 100%;
    }
    .dao_23{
         width: 1.11rem;
        height: 1rem;
        border-radius: 10px;
        border: 1px solid #f1f1f1 
    }
    .dao_24{
        margin-left: .2rem;
        margin-top: .12rem;
        width: .8rem;
        height: .22rem;
        background: #fdff04;
        border-radius: 5px;
        text-align: center;
        line-height: .22remw
    }
    .dao_25{
        margin-left: .1rem;
        margin-top: .12rem;
        width: 1.4rem;
        height: .22rem;
        background: #e7e481;
        border-radius: 5px;
        text-align: center;
        line-height: .22rem;
        color: #cda337
    }
    .dao_26{
        display: flex;
    }
    .dao_27{
        width: .22rem;
        height:.22rem;
        margin-left: .2rem;
        margin-top: .05rem;
        background: #ff3333;
        border-radius: 5px;
        color: white;
        text-align: center;
        line-height: .22rem   
    }
    .dao_28{
        margin-left: .1rem
    }
</style>

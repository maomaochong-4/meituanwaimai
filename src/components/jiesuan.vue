<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-16 11:17:30
 * @Description: "导航栏"
 -->
<template>
  <div class="box">
     <div class="jie1">
          <div class="jie">
              <div class="left">
                <i class="el-icon-back" @click="back()"></i>
              </div>
              <div class="right">
                提交订单
              </div>
          </div>
     </div>
     <div class="jie2">
        <div class="top">
            <p class="top1">选择收获地址 <i class="el-icon-arrow-right"></i></p>
        </div>
        <div class="buttom">
           <span class="top2">立即送出</span>
            <span class="top2 top3">大约需要23:24送达 <i class="el-icon-arrow-right"></i></span>
        </div>
     </div>
     <div class="buttom1">
        <!-- <div class="buttom2">
              <span class="top2">贡茶（庆阳路）</span>
              <span class="buttom5">美团快送</span>
        </div>
        <hr>
        <div class="buttom6" v-for="(jie,index) in jies" :key="index">
            <div class="left_1">
                <img :src="jie.img" alt="">
            </div>
            <div class="right_1">
               <div class="right_2">
                  <p>{{jie.name}}</p>
                  <p class="right_5">{{jie.aihao}}</p>
                  <p class="right_5">{{jie.suliang}}</p>
               </div>
               <div class="right_3">
                 <p class="right_4">￥13</p>
               </div>
            </div>
        </div> -->
        <div class="buttom6">
            <div class="left_1">
                <img src="../assets/jiao1.png" alt="">
            </div>
            <div class="right_1">
               <div class="right_2">
                  <p>奥利奥奶茶</p>
                  <p class="right_5">+常温+多糖</p>
                  <p class="right_5">x1</p>
               </div>
               <div class="right_3">
                 <p class="right_4">￥13</p>
               </div>
            </div>
        </div>
        <div class="buttom6">
            <div class="left_1">
                <img src="../assets/jiao1.png" alt="">
            </div>
            <div class="right_1">
               <div class="right_2">
                  <p>奥利奥奶茶</p>
                  <p class="right_5">+常温+多糖</p>
                  <p class="right_5">x1</p>
               </div>
               <div class="right_3">
                 <p class="right_4">￥13</p>
               </div>
            </div>
        </div>
        <div class="buttom6">
            <div class="left_1">
                <img src="../assets/jiao1.png" alt="">
            </div>
            <div class="right_1">
               <div class="right_2">
                  <p>奥利奥奶茶</p>
                  <p class="right_5">+常温+多糖</p>
                  <p class="right_5">x1</p>
               </div>
               <div class="right_3">
                 <p class="right_4">￥13</p>
               </div>
            </div>
        </div>
        <hr>
        <div class="baozhuang">
            <div class="baozhuang1">
                <div class="baozhuang2">
                  <p class="baozhuang4 ">包装费</p>
                  <p class="baozhuang3 baozhuang4">￥3</p>
                </div>
                <div class="baozhuang2">
                  <div>
                    <p class="baozhuang4 ">配送费</p>
                    <p class="baozhuang7">已减3元配送费</p>
                  </div>
                  <div class="baozhuang6">
                    <span class="baozhuang5 baozhuang4">￥10.5</span><span class="baozhuang3 baozhuang4">￥7.5</span>
                  </div>
                </div>
                <hr>
            </div>
            <div class="baoz">
              <div class="baoz1">
                <p class="baoz5"><span class="baoz2">减</span> <span class="baoz3">满减优惠</span></p>
                <p class="baoz6 baoz7">-￥15</p>
              </div>
              <div class="baoz1">
                <p class="baoz5"><span class="baoz2">返</span> <span class="baoz3">满返商家代金券优惠</span></p>
                <p class="baoz6">返2元商家券</p>
              </div>
              <div class="baoz1">
                <p class="baoz5"><i class="el-icon-s-cooperation"></i><span class="baoz3">满减优惠</span></p>
                <p class="baoz8">填写地址后可选</p>
              </div>
              <div class="baoz1">
                <p class="baoz5"><span class="baoz2">券</span> <span class="baoz3">满减优惠</span></p>
                <p class="baoz8">填写地址后可选</p>
              </div>
              <div class="baoz9">
                  <p class="baoz10">优惠政策</p>
                  <p class="baoz11">已优惠<span>￥18</span></p>
                  <p class="baoz12">小计￥<span>46.6</span></p>
              </div>
            </div>
        </div>
         <footer>
              <div class="footer1">
                  <div class="footer2">
                    <p class="footer3">￥44.6</p>
                    <p class="footer4">已优惠￥18</p>
                  </div>
                  <div class="footer5">
                    找人付
                  </div>
                  <div class="footer6">
                    提交订单
                  </div>
              </div>
        </footer>
     </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'jiesuan',
   data () {
    return {
      jies:[
      ],
    }
  },
  // created() {
  //   axios.get('/tijiao')
  //     .then(res=>{
  //      this.jies =res.data;
  //       console.log(this.jies)
  //     })
  //    .catch(err=>{
  //      console.log(err);
  //    })
  // },
   methods:{
    back(){
        this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: 5rem;
  background: linear-gradient(to bottom,#ffd161,#fff)
}
        .jie1{
        width: 100%;
        height: .5rem;
        background: #ffd161;
        position: fixed;
        top: 0;
    }
    .jie{
        width: 96%;
        height: .5rem;
        margin: 0 auto;
        display: flex
    }
    .el-icon-back{
      font-size: 35px;
      margin-top: .1rem;
      color:#6d6751 
    }
    .left{
      width: 10%;
      height: .5rem;
    }
     .right{
      width: 90%;
      height: .5rem;
      text-align: center;
      line-height: .5rem;
      font-size: 18px;
      color:#6d6751 
    }
    .jie2{
      width: 96%;
      height: 1.3rem;
      background: #fff;
      border-radius: 7px;
      margin: 0 auto;
      margin-bottom: .15rem;
      margin-top: .5rem
    }
    .top{
      width: 100%;
      height: .65rem;
      line-height: .65rem
    }
    .buttom{
      width: 100%;
      height: .65rem;
      display: flex;
      justify-content: space-between;
      align-items: center
    }
    .top1{
      margin-left: .2rem;
      font-size: 21px;
      color:#6d6751 
    }
    .top2{
      margin-left: .2rem;
      font-size: 16px;
      color:#252525;
      margin-right: .2rem 
    }
    .top3{
      color:#348aed 
      
    }
    .el-icon-arrow-right{
        font-size: 18px;
        margin-top: .03rem
    }
    .buttom1{
      width: 96%;
      height: 3rem;
      background: #fff;
      margin: 0 auto;
      border-radius: 8px 
    }
    .buttom2{
      width: 100%;
      height: .9rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .buttom5{
        display: block;
        margin-right: .15rem;
        border:1px solid #0c0c0c;
        border-radius: 4px
    }
    hr{
      width: 92%;
      margin: 0 auto;
      color: #d8d4c6;
      margin-bottom: .2rem
    }
    .buttom6{
      width: 94%;
      height: 1.17rem;
      margin: 0 auto;
      display: flex
    }
    .left_1{
      width:28% ;
      height:.85rem ;
    }
       .right_1{
      width:72% ;
      height:.85rem ;
      display: flex;
      justify-content: space-between;
    }
    img{
      width: 100%;
      height: 100%;
    }
    .right_2{
      margin-left: .1rem;
    }
    .right_2 p{
      margin-top: .02rem
    }
    .right_3{
      margin-right: .2rem;
    }
    .right_4{
      color: #0c0c0c;
      font-weight: 600;
      font-size: 18px
    }
    .right_5{
      color: #969494
    }
    .baozhuang{
      width: 96%;
      margin: 0 auto

    }
    .baozhuang1{
      width: 100%;
      height: 1.2rem;
    }
    .baozhuang2{
      margin: 0 .1rem;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      margin-bottom: .1rem
      
    }
    .baozhuang3{
      font-weight: 600
    }
    .baozhuang4{
      margin-top: .1rem;
    }
    .baozhuang5{
      text-decoration: line-through;
       color: rgb(145, 143, 143)
    }
    .baozhuang6{
      margin-top: .1rem;
    }
    .baozhuang7{
      margin-top: .05rem;
      font-size: 14px;
      color: rgb(145, 143, 143)
          }
    .baoz{
      width: 100%;
    }
    .baoz1{
      width: 95%;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: .15rem
    }
    .baoz2{
      width: .2rem;
      height: .2rem;
      background: #f95651;
      border-radius: 5px;
      margin-right: .05rem
    }
    .baoz5{
      display: flex;
      text-align: center;
      justify-content: center
    }
    .baoz6{
      color: #f95651;
      font-size: 18px;
    }
    .baoz7{
      color: #f95651;
      font-weight: 600;
    }
    .el-icon-s-cooperation{
      color: #f95651;
      font-size: 28px;
      margin-top: -.04rem;
      margin-right: .03rem;
      margin-left: -.02rem
    }
    .baoz8{
      color: rgb(156, 156, 156);
      font-size: 17px;
    }
    .baoz9{
      width: 100%;
      height: .75rem;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .baoz10{
      color: #999999;
    }
     .baoz11{
      color: #2b2828;
      font-size: 22px
    }
    .baoz12{
      color: #2b2828;
      font-size: 20px
    }
     .baoz11 span{
       margin-left: .05rem;
      color: #f95651;
      font-size: 20px;
      font-weight: 600
    }
     .baoz12 span{
       margin-left: .05rem;
      color: #1d1c1c;
      font-size: 22px;
      font-weight: 600
    }
    footer{
      width: 100%;
      height: 1rem;
      margin: 0 auto;
      background: #fff;
      z-index: 3;
    }
    .footer1{
      width: 96%;
      height: .51rem;
      background: #fff;
      margin: 0 auto;
      border-radius: 40px;
      margin-top: .1rem;
      display: flex;
      position: fixed;
      bottom: 0.15rem
    }
    .footer2{
      width: 40%;
      height: .51rem;
      background: #0c0c0c;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      padding-top: .01rem;
      box-sizing: border-box
    }
     .footer2 p{
       margin-left: .2rem;
    }
    .footer3{
      font-size: 22px;
      color: #fff
    }
    .footer4{
      font-size: 16px;
      color: #fff
    }
    .footer5{
      width: 30%;
      height: .51rem;
      background: #474747;
      color: #ffd161;
      font-size: 22px;
      text-align: center;
      line-height: .51rem
    }
      .footer6{
      width: 30%;
      height: .51rem;
      background: #ffd161;
      color: #373328;
      font-size: 22px;
      text-align: center;
      line-height: .51rem;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }
</style>

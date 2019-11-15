<!--
 * @Author: your name
 * @Date: 2019-11-11 14:51:02
 * @LastEditTime: 2019-11-15 17:58:00
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\fujinshangjia.vue
 -->

<template>
  <div class="box">
       
      <ul>
        <li class="fu_1" v-for="(shangjia,index) in shangjias" :key="index">
          
            <div class="fu_left">
              <img :src="shangjia.spic" alt="" class="fuj">
            </div>
            <router-link to="/GoodsList">
              <div class="fu_right">
                <h3 class="fu_rh">{{shangjia.sname}}</h3>
                <div class="fu_rg">
                    <div>
                      <i class="el-icon-star-off"></i>
                      <span class="sapn">{{shangjia.beib}}</span>
                      <span class="yuexiao">月销量{{shangjia.beia}}</span>
                    </div>
                    <span class="fenzo">39分钟 2.9km</span>
                </div>
                <div class="fu_rg">
                    <div>
                      <span class="yanse huad">起送￥{{shangjia.ssend}}</span>
                      <span class="yanse"> 配送￥{{shangjia.spre}} <span class="huadiao">￥3</span></span>
                      <span class="yanse"> 人均￥{{shangjia.sav}}</span>
                    </div>
                </div>
                <div class="fu_rg">
                    <div>
                      <i class="el-icon-box"></i>
                      <span class="yanse">{{shangjia.sveg}}</span>
                    </div>
                </div>
                <div class="fu_rg">
                    <div class="mlq">
                      <span class="ml">10减5</span>
                      <span class="ml">38减18</span>
                      <span class="ml">50减7</span>
                      <span class="ml">78减38</span>
                    </div>
                </div>
              </div>
            </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
       shangjias:[],
    }
  },
   
  created(){
    fetch('/api/shop/all')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.shangjias=data;
         console.log(this.shangjias)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped>
    .dao{
        width: 92%;
        height: .55rem;
        margin:.2rem auto 0
    }
    .dao-1{
        font-size: 22px;
        color: #232323
    }
    .fu{
        width: 96%;
        height: .4rem;
        margin: 0 auto .2rem;
        background: red;
    }
   .fu_1{
     width: 94%;
     height: 1.5rem;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     margin-bottom: .1rem
   }
   .fu_left{
     width: .9rem;
     height: .8rem;
     margin-top: .05rem
   }
   .fuj{
     width: 100%;
     height: 100%;
     border-radius: 10px
   }
   .fu_right{
     width: 2.7rem;
     height: 1.5rem;
   }
   .fu_rh{
     margin-left: .1rem;
    font-size: 22px;  
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .05rem
   }
   .el-icon-star-off{
     margin-left: .1rem;
     font-size: .2rem;
     color: #fca204
   }
   .sapn{
     color: #fca204;
     font-size: .15rem;
      margin-top: .1rem;
   }
   .yuexiao{
     color: #676767;
     margin-left: .1rem
   }
   .fu_rg{
     width: 100%;
     height: .2rem;
     display: flex;
     justify-content: space-between;
     margin-bottom: .1rem
   }
   .fenzo{
     color: #676767
   }
   .huadiao{
     color: #676767;
    text-decoration: line-through
   }
   .yanse{
     color: #676767
   }
   .huad{
     margin-left: .1rem
   }
   .el-icon-box{
     margin-left: .1rem;
     font-size: .15rem;
     color: #676767
   }
   .mlq{
     display: flex;
     
   }
   .ml{
     border: 1px solid #ff6259;
     border-radius: 5px;
     margin-left: .1rem;
     color: #ff6259
   }
   .cuxiao{
     width: 96%;
     height: .5rem;
     margin: 0 auto;
     display: flex; 
     align-items: center;
     justify-content: space-around
   }
   .cuxiao_1{
     width: .8rem;
     height: .3rem;
     background: #f8f8f6;
     border-radius: 10px;
     text-align: center;
     line-height: .3rem;
     color: #676767;
     font-size: 12px
   }
   .cuxiao118{
     width: 98%;
     height: 70%;
     border-radius: 10px;
     margin-top: .05rem
   }
   .manc{
     width: 3.6rem;
   }
</style>

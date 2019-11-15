<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 20:39:41
 * @Description: "附近商家"
 -->
<template>
  <div class="box">
       <div class="dao-12">
          <div class="dao">
            <h3 class="dao-1">附近商家</h3>
          </div>
       </div>
      <div class="fu">
          <el-menu class="el-menu-demo" mode="horizontal">
              <el-submenu index="2">
                <template slot="title">综合排序</template>
                <el-menu-item index="2-1" class="manc">配送费最低</el-menu-item>
                <el-menu-item index="2-2" class="manc">速度最快</el-menu-item>
                <el-menu-item index="2-3" class="manc">人均高到低</el-menu-item>
                <el-menu-item index="2-4" class="manc">评分最高</el-menu-item>
                <el-menu-item index="2-5" class="manc">起送价最低</el-menu-item>
              </el-submenu>
              <el-menu-item index="1">销量最高</el-menu-item>
              <el-menu-item index="3">距离最近</el-menu-item>
              <el-submenu index="4">
                <template slot="title">筛选</template>
                <el-menu-item index="2-6" class="manc">美团专送</el-menu-item>
                <el-menu-item index="2-7" class="manc">商家特色</el-menu-item>
                <el-menu-item index="2-8" class="manc">人均价</el-menu-item>
                <el-menu-item index="2-9" class="manc">优惠活动</el-menu-item>
              </el-submenu>
          </el-menu>
      </div>
        <div class="cuxiao" id="mac">
          <span class="cuxiao_1"><img src="../assets/1118.png" alt="" class="cuxiao118"></span>
          <span class="cuxiao_1">减价送份费</span>
          <span class="cuxiao_1">满减优惠</span>
          <span class="cuxiao_1">津贴联盟</span>
        </div>
      <ul>
        <li class="fu_1" v-for="(fujingshangjia,index) in fujingshangjias" :key="index">
            <div class="fu_left">
              <img :src="fujingshangjia.spic" alt="" class="fuj">
            </div>
            <div class="fu_right">
              <h3 class="fu_rh">{{fujingshangjia.sname}}</h3>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-star-off"></i>
                    <span class="sapn">{{fujingshangjia.beib}}</span>
                    <span class="yuexiao">月销量{{fujingshangjia.beia}}</span>
                  </div>
                  <span class="fenzo">39分钟 2.9km</span>
              </div>
              <div class="fu_rg">
                  <div>
                    <span class="yanse huad">起送￥{{fujingshangjia.ssend}}</span>
                    <span class="yanse"> 配送￥{{fujingshangjia.spre}} <span class="huadiao">￥3</span></span>
                    <span class="yanse"> 人均￥{{fujingshangjia.sav}}</span>
                  </div>
              </div>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-box"></i>
                    <span class="yanse">{{fujingshangjia.leixing}}</span>
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
        </li>
        <!-- <li class="fu_1">
            <div class="fu_left">
              <img src="../assets/fuj1.png" alt="" class="fuj">
            </div>
            <div class="fu_right">
              <h3 class="fu_rh">蜀三爷火锅便当·麻辣烫（高新区唐延路）</h3>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-star-off"></i>
                    <span class="sapn">4.5</span>
                    <span class="yuexiao">月销量3418</span>
                  </div>
                  <span class="fenzo">39分钟 2.8km</span>
              </div>
              <div class="fu_rg">
                  <div>
                    <span class="yanse huad">起送￥15</span>
                    <span class="yanse"> 配送￥1 <span class="huadiao">￥3</span></span>
                    <span class="yanse"> 人均￥22</span>
                  </div>
              </div>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-box"></i>
                    <span class="yanse">冒菜</span>
                  </div>
              </div>
              <div class="fu_rg">
                  <div class="mlq">
                    <span class="ml">10减5</span>
                    <span class="ml">30减18</span>
                    <span class="ml">58减27</span>
                    <span class="ml">89减40</span>
                  </div>
              </div>
            </div>

        </li>
        <li class="fu_1">
            <div class="fu_left">
              <img src="../assets/fuj1.png" alt="" class="fuj">
            </div>
            <div class="fu_right">
              <h3 class="fu_rh">蜀三爷火锅便当·麻辣烫（高新区唐延路）</h3>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-star-off"></i>
                    <span class="sapn">4.5</span>
                    <span class="yuexiao">月销量3418</span>
                  </div>
                  <span class="fenzo">39分钟 2.8km</span>
              </div>
              <div class="fu_rg">
                  <div>
                    <span class="yanse huad">起送￥15</span>
                    <span class="yanse"> 配送￥1 <span class="huadiao">￥3</span></span>
                    <span class="yanse"> 人均￥22</span>
                  </div>
              </div>
              <div class="fu_rg">
                  <div>
                    <i class="el-icon-box"></i>
                    <span class="yanse">冒菜</span>
                  </div>
              </div>
              <div class="fu_rg">
                  <div class="mlq">
                    <span class="ml">10减5</span>
                    <span class="ml">30减18</span>
                    <span class="ml">58减27</span>
                    <span class="ml">89减40</span>
                  </div>
              </div>
            </div>

        </li> -->
      </ul>
      <div class="fu_5">
        <!-- <p>到底啦，亲</p> -->
      </div>
  </div>
</template>
<script>
export default {
  name: 'fujinshangjia',
   data () {
    return {
      fujingshangjias:[
      ],
    }
  },
  created() {
    fetch('/api/shop/all')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          this.fujingshangjias =data;
          
        console.log(this.fujingshangjias)
     })
     .catch(err=>{
       console.log(err);
     })
  },
    mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
      methods: {
      handleScroll () { //改变元素#searchBar的top值
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('#mac').offsetTop;

        if(scrollTop>=55){
          offsetTop=55;
          document.querySelector('#mac').style.top = offsetTop+'px';
        }else{
          document.querySelector('#mac').style.top = '55px';
        }
      },
    },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },
}
</script>

<style scoped>
    .dao-12{
      width: 100%;
      height: .55rem;
    }
    .dao{
        width: 92%;
        height: .55rem;
        margin:.2rem auto 0;
    }
    .dao-1{
        font-size: 22px;
        color: #232323
    }
    .fu{
        width: 100%;
        height: .4rem;
        margin: 0 auto .2rem;
        
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
     width: 100%;
     height: .5rem;
     margin: 0 auto;
     display: flex; 
     align-items: center;
     justify-content: space-around;
     position: sticky;
     /* z-index: 2; */
     background: #fff;
   }
   /* .cuxiao1{
     width: 100%;
     height: .5rem;
     background: #fff;
     position: sticky;
    box-sizing: border-box;
   } */
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
   .fu_5{
     width: 100%;
     height: .6rem;
   }
</style>

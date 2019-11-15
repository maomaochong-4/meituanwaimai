<!--
 * @Author: your name
 * @Date: 2019-11-12 17:57:45
 * @LastEditTime: 2019-11-15 21:21:27
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\xiangqing3.vue
 -->
<template>
    <div id="box">
        <div class="xiang3">
            <span class="span1">{{xiangqing.ppp1}}</span>
            <div class="dpp2">
                <div class="pp2">
                    <img :src="xiangqing.img1" alt="" class="pp21">
                    <p class="pp22">当前商品</p>
                </div>
                <span class="spam">+</span>
                 <div class="pp2">
                    <img :src="xiangqing.img2" alt="" class="pp21">
                    <p class="pp22">{{xiangqing.ppp2}}</p>
                </div>
            </div>
            <div class="dapei1">
                <span class="kspan1">搭配可省￥{{xiangqing.kesheng}}</span><br>
                <span class="kspan2">实付</span>
                ￥<span class="kspan3">{{xiangqing.shifu}}</span>
                <input type="button" value="立即购买" class="kspan4">
            </div>
        </div>
        <p class="qp1">包含当前商品的20个套餐
            <img src="../assets/img/liebiaoyjt.png" alt="">
        </p>
    </div>
</template>
<script>
export default {
  name: 'top',
  data () {
    return {
       xiangqing:[],
    }
  },
   
  created(){
    fetch('/api/shop/xiang')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.xiangqing=data;
         console.log(this.xiangqing)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped>
#box{
    background-color: #fff;
    padding-bottom: .1rem;
}
    .xiang3{
        margin-top: .1rem;
        width: 95%;
        height: 1.6rem;
        padding:0 2% 0 3%;
        background-color: #f4f4f4;
    }
    .dapei1{
        width:1.08rem;
        height: .9rem;
        float: right;
    }
    .kspan1{
        line-height: .25rem;
        color: #e15254;
        text-align: center;
    }
    .kspan2{
        line-height: .3rem;
        color:#5a5a58;
        text-align: center;
    }
    .kspan3{
        line-height: .3rem;
        font-size: 20px;
        color:#ff5643;
        font-weight: 900;
        text-align: center;
    }
    .kspan4{
        width: .8rem;
        height: .27rem;
        border-radius: .135rem;
        background: #ffd555;
        border: 0;
        outline: 0;
        margin-left:.15rem ;
    }
    .span1{
        font-size: 18px;
        color: #616161;
        width: 100%;
        line-height: .35rem;
    }
    .pp2{
        width: 1rem;
        float: left;
    }
    .pp21{
        width: 100%;
        border-radius: 10px;
    }
    .pp22{
        font-size: 18px;
        line-height: .35rem;
        text-align: center;
        width: 1.08rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .spam{
        font-size: .3rem;
        width: .2rem;
        float: left;
        line-height: .81rem;
        text-align: center;
    }
    .qp1{
        line-height: .4rem;
        background-color: #f4f4f4;
        text-align: center;
        font-size: 16px;
        margin-top: .05rem;
    }
     .qp1 img{
         height: 16px;
         margin-left: 5px;
         position: relative;
         top:2px;
     }
</style>

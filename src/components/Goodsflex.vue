<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:43
 * @LastEditTime: 2019-11-15 22:27:25
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\Goodsflex.vue
 -->

<template>
    <div class="box">
       <div class="Goods_flex">
            <h4>马三爷烧烤店</h4>
            <img class="img_01" src="../assets/img/tehui2.jpg" alt="">
            <img class="image" src="../assets/img/time.png" alt="">
            <span>&nbsp;配送超三十分钟 &nbsp; |&nbsp;</span>
            <img class="image" src="../assets/img/review.png" alt="">
            <span>&nbsp; 点评高分店铺</span>
            <p>公告：本店不支持网络外卖发票，谢谢合作。</p>
            <span class="goods_less">首单立减14元</span>
            <img class="image_1" src="../assets/img/botton.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'fles',
  data () {
    return {
      //  flex:[],
      index:{},
    }
  },
   
  created(){
    fetch('/api/shop/dian?sid=1')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.index=data[0];
        //  console.log(this.flex)
         
         console.log(data[0])
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
  
<style scoped>
    .Goods_flex{
        width: 87%;
        height: 1.1rem;
        box-shadow: 2px 2px 2px #c7c3c3;
        border-radius: 10px;
        margin: 0 auto 10px;
        padding: 14px;
        position: relative;
        background: #fff;
    }
    .Goods_flex h4{
       font-size: .18rem;
       color: #0d0c0c;
    }
    .Goods_flex img{
        width: .13rem;
        height: .13rem;
        display: block;
        float: left;
        margin:8px 0 ;
    }
    .Goods_flex span{
       font-size: 12px;
        display: block;
        float: left;
        margin: 7px 0 ;
        color: #706c6c;
    }
    .Goods_flex p{
       font-size: 12px;
        color: #706c6c;
       clear: both;
    }
    .Goods_flex .goods_less{
        border: 1px solid #f72f2f;
        color: #f72f2f;
        font-size: 10px;
        display: block;
        width: .65rem;
        height: .17rem;
        line-height: .17rem;
        text-align: center;
        margin-top: .2rem;
    }
    .Goods_flex .image_1{
        width: .2rem;
        height: .2rem;
        position: absolute;
        bottom: 3%;
        right:5%;
    }
    .Goods_flex .img_01{
        width: .5rem;
        height: .5rem;
        position: absolute;
        top: -20%;
        right: 7%;
    }
</style>
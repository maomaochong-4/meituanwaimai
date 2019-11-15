<!--
 * @Author: your name
 * @Date: 2019-11-12 17:05:33
 * @LastEditTime: 2019-11-15 21:17:36
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\xiangqing2.vue
 -->
<template>
    <div id="box">
        <div class="xiang4">
            <p>商品详情</p>
            <span>(不点主食不配送)</span><br>
            <span>主料：</span>{{xiangqing.zhonglei}}<br>
            <span>口味：</span>{{xiangqing.kouwei}}<br>
            <span>包装费：</span>商品不额外收取包装费。<br>
            <span>价格说明：</span>划线价格为参考价格，未划线价格为当前销售价格<br>
            <span class="span1">美团专送</span>
            <span class="span1">增准时宝</span>
            <span class="span1">支持自取</span>
            <span class="span1">极速退款</span>
        </div>
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
    background-color: #f4f4f4;
}
    .xiang4{
        background-color: #fff;
        width: 95%;
        padding: 0.1rem 2% .1rem 3%;
        font-size: 16px;
        margin: .1rem 0;
    }
    p{
        font-size: 18px;
        font-weight: 900;
        line-height: .4rem;
    }
    span{
        color: #616161;
        line-height: .25rem;

    }
    .span1{
        display: inline-block;
        width: 23.75%;
        text-align: center;
        line-height: .4rem;
    }
</style>

<!--
 * @Author: your name
 * @Date: 2019-11-12 17:05:33
 * @LastEditTime: 2019-11-15 21:14:41
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\xiangqing2.vue
 -->
<template>
    <div id="box">
        <div class="xiang2">
            <p class="pp1">{{xiangqing.pp1}}</p>
            <img src="../assets/img/zhuanzai.png" alt="" class="imgh">
            <span class="span1">月售{{xiangqing.yueshou}}，配送约{{xiangqing.peisong}}分钟</span>
            <p class="pp2">
                ￥<span class="span2">{{xiangqing.xianjia}}</span>
                <span class="span3">￥{{xiangqing.yuanjia}}</span>
                <span class="span4">{{xiangqing.zhekou}}折</span>
            </p>
            <input type="button" value="+加入购物车" class="input1">
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
.xiang2{
    width:100%;
    height: 1.45rem;
    background-color: #fff;
    position: relative;
}
.pp1{
    width: 83%;
    font-size: 19px;
    font-weight: 900;
    line-height: .27rem;
    margin-left: .18rem;
    padding-top: .15rem;
}
.imgh{
    width: .25rem;
    float: right;
    position: relative;
    right:.12rem;
    bottom:.5rem;
}
.span1{
    margin-left: .18rem;
    line-height: .28rem;
    font-size: 16px;
    color:#9a9a9a;
}
.pp2{
    font-size: 18px;
    color: #ff4941;
    margin-left: .18rem;
    line-height: .45rem;
}
.pp2 .span2{
    font-size: 26px;
    font-weight: 900;
}
.pp2 .span3{
    font-size: 16px;
    color: #959595;
    text-decoration: line-through;
}
.input1{
    width: 1.25rem;
    height: .35rem;
    background-color: #ffd161;
    border: 0;
    outline: 0;
    border-radius: .175rem;
    font-size: 16px;
    font-weight: 900;
    float: right;
    position: absolute;
    right: .12rem;
    bottom:.1rem;
}
</style>

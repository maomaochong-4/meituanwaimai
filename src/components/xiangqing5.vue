<!--
 * @Author: your name
 * @Date: 2019-11-12 17:05:33
 * @LastEditTime: 2019-11-15 20:49:10
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\xiangqing2.vue
 -->
<template>
    <div id="box">
        <div class="xiang4">
            <p class="pp1">外卖评价</p>
            <span class="span1">7条评论 <img src="../assets/img/liebiaoyjt.png" alt=""></span>
        </div>
        <div class="xiang5"  v-for="(mm,index) in mms" :key="index">
            <img src="../assets/img/tehui3.jpg" alt="" class="img1">
            <span class="span2">kyk4621452214</span><br>
            <span class="span2">赞了该商品</span>
            <span class="span3">{{mm.atime}}</span>
            <p class="pp2">{{mm.appr}}</p>
        </div>   
        <!-- <div class="xiang5">
            <img src="../assets/img/tehui1.jpg" alt="" class="img1">
            <span class="span2">kyk4621452214</span><br>
            <span class="span2">赞了该商品</span>
            <span class="span3">2019.10.25</span>
            <p class="pp2">慨当以慷，忧思难忘。何以解忧，唯有杜康</p>
        </div>  
        <div class="xiang5">
            <img src="../assets/img/tehui3.jpg" alt="" class="img1">
            <span class="span2">m 621452214</span><br>
            <span class="span2">赞了该商品</span>
            <span class="span3">2017.10.25</span>
            <p class="pp2">very very good</p>
        </div>   -->
        <p class="qp1">7条外卖评价
            <img src="../assets/img/liebiaoyjt.png" alt="">
        </p> 
    </div>
</template>
<script>
    export default {
  name: 'xinabf',
   data () {
    return {
      mms:[
      ],
    }
  },
  created() {
    fetch('/api/ping/cha?uid=1')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          this.mms =data;
          
        console.log(this.mms)
     })
     .catch(err=>{
       console.log(err);
     })
  },
    }
</script>

<style scoped>
#box{
    background-color: #f4f4f4;
    margin-bottom: .8rem;
}
    .xiang4{
        margin-top: .1rem;
        background-color: #fff;
        width: 95%;
        padding: 0.1rem 2% .1rem 3%;
        font-size: 16px;
        overflow: hidden;
    }
    .xiang5{
        background-color: #fff;
        width: 95%;
        padding: 0.1rem 2% .1rem 3%;
        font-size: 16px;
        overflow: hidden;
    }
    .pp1{
        font-size: 18px;
        font-weight: 900;
        line-height: .4rem;
        float: left;
    }
    .span1{
        color: #616161;
        line-height: .4rem;
        float: right;
    }
    .span1 img{
        height: .14rem;
    }
    .img1{
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        float: left;
        margin-right: .1rem;
    }
    .span2{
        color: #616161;
        font-size: 14px;
    }
    .span3{
        float: right;
        color: #616161;
        font-size: 14px;
        position: relative;
        bottom: .2rem;
    }
    .pp2{
        font-size: 18px;
        line-height: .25rem;
        margin-top: .15rem;
        margin-left: .4rem;
    }
    .qp1{
        line-height: .4rem;
        background-color: #fff;
        text-align: center;
        font-size: 16px;
    }
     .qp1 img{
         height: 16px;
         margin-left: 5px;
         position: relative;
         top:2px;
     }
</style>

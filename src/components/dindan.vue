<!--
 * @Author: your name
 * @Date: 2019-11-11 16:16:32
 * @LastEditTime: 2019-11-15 22:24:44
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\dindan.vue
 -->
<template>
    <div id="box">   
        <div class="dindan"  v-for="(sijuan,index) in sijuans" :key="index">
            <div class="shangmian">
                <img :src="sijuan.lpic" alt="" class="img1">
                <div class="dianming">{{sijuan.lsname}}</div>
                <router-link to="/GoodsList">
                    <img src="../assets/img/liebiaoyjt.png" alt="" class="img2">
                </router-link>
            </div>
            <div class="zhongjian">
                <span class="span1">{{sijuan.lveg}}</span>
                <span class="span2">×{{sijuan.lpri}}</span><br>
                <span class="span3">{{sijuan.beia}}&nbsp; 11:52 </span>
                <span class="span4">￥{{sijuan.lpri}}</span>
            </div>
            <div class="xiamian">
                <span class="span5">{{sijuan.beib}}</span>
                <input type="button" value="再来一单" class="input">
            </div>
        </div>
    </div>  
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
       sijuans:[],
    }
  },
   
  created(){
    fetch('/api/addr/chading?uid=1')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.sijuans=data;
         console.log(this.sijuans)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped>
#box{
    margin-top: .95rem;
    margin-bottom: .6rem;
    background-color: #f4f4f4;
}
    .dindan{
        width: 100%;
        height: 1.6rem;
        background-color: #fff;
        margin-top:.05rem;
    }
    .shangmian{
        width: 100%;
        height: .5rem;
        border-bottom: 1px solid #f4f4f4;
    }
    .img1{
        width: .46rem;
        height: .46rem;
        padding:2px .1rem 2px;
        float: left;
    }
    .dianming{
        line-height: .5rem;
        font-size: 18px;
        text-indent: .2rem;
        float: left;
    }
    .img2{
        float: right;
        margin-right: .1rem;
        margin-top: .15rem;
    }
    .zhongjian{
        padding: .12rem .12rem 0;
        height: .52rem;
        line-height: 24px;
        border-bottom: #f4f4f4 1px solid;
    }
    .span1{
        float: left;
    }
    .span3{
        float: left;
        color:#999999;
    }
    .span2,.span4{
        float: right;
        color: #2f2f2f;
    }
    .xiamian{
        padding: .12rem;
    }
    .span5{
        color: #999999;
    }
    .input{
        width: .72rem;
        height: .26rem;
        border:0;
        background-color: #ffd161;
        border-radius: 4px;
        float: right;
    }
</style>

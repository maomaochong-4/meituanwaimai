<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:43
 * @LastEditTime: 2019-11-15 19:06:14
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\GoodsRight.vue
 -->

<template>
       <div class="Goods_right">
           <ul>
                <li v-for="(caiming,index) in caimings" :key="index">
                    <router-link class="link" to="/xiangqingye">
                        <img :src="caiming.dpic" alt="">
                        <div class="moll">
                            <h4>{{caiming.dveg}}</h4>
                            <p class="ggg">麻辣的，香辣的，五香的，应有尽有</p>
                            <p>月售<span>{{caiming.dmon}} | </span>好评度{{caiming.dgood}}</p>
                            <span class="mony">￥{{caiming.beia}}</span>
                            <img class="add" src="../assets/img/add.png" alt="">
                        </div>
                    </router-link>
                </li>
           </ul>
        </div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {
       caimings:[],
    }
  },
   
  created(){
    fetch('/api/shop/cha?sid=1')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.caimings=data;
         console.log(this.caimings)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>
  
<style scoped>
   .Goods_right{
       width: 73%;
       clear: both;
   }
   ul{
       width: 100%;
   }
   ul>li{
       width: 100%;
       height:1rem;
       display: flex;
       justify-content: space-between;
       margin-bottom: .3rem;
   }
   ul>li .link{
       width: 100%;
       height:1rem;
       display: flex;
       justify-content: space-between;
       margin-bottom: .3rem;
   }
   ul>li .link>img{
       width: 37%;
       height: 100%;
   }
   ul>li>img{
       width: 37%;
       height: 100%;
   }
   .moll{
       width: 58%;
       height: 100%;
       padding-right:10px; 
   }
    .moll h4{
        font-size: .16rem;
        color: black;
        margin-bottom: 5px;
        line-height:  .28rem;
    }
    .moll p{
        font-size: .12rem;
        color: rgb(107, 105, 105);
        line-height:  .18rem;
    }
    .moll .mony{
        font-size: .16rem;
        display: block;
        color: red;
        margin-top: 8px;
        float: left;
    }
    .add{
        width: .2rem;
        height: .2rem;
        display: block;
        float: right;
        margin-top: 5px;
    }
    .ggg{
        width: 1.65rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<!--
 * @Author: your name
 * @Date: 2019-11-13 11:11:29
 * @LastEditTime: 2019-11-15 14:00:09
 * @LastEditors: 马川
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Zujian.vue
 -->
<template>
  <div class="box">
       <div class="top">
           <span>会员</span>
           <i class="el-icon-bell"></i>
        </div>
        <div class="middle">
          <img src="../assets/img/zujian.png" alt="">
          <span>您还没有登录，请登录后查看订单</span>
          <router-link to="/LoadPage"><em>登录/注册</em></router-link>
        </div>  
  </div>
</template>
<script>
export default {
  name: 'Zujian',
  data () {
    return {
     
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        width: 100%;
    }
     .top{
        height: .53rem;
        line-height: .53rem;
        font-size: .17rem;
       color: #333333;
    }
    .top span{
        margin-left:45%;
    }
    .el-icon-bell{
        margin-left: 1.2rem;
    }
    .middle{
      text-align: center;
      height:5.59rem;
      background: white
    }
    .middle img{
        width: 33%;
        margin-top:1.7rem;
        /* margin-left: 35%;  */
    }
    .middle span{
      display: block;
      color:#777777;
      /* margin-left: 23%; */
      margin-top: .1rem;
    }
    .middle em{
      width: 1.65rem;
      height: .31rem;
      background: #ffce56;
      display: block;
      line-height: .31rem;
      text-align: center;
      margin-left: 1.05rem;
      margin-top: .15rem;
    }
</style>
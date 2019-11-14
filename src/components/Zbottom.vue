<!--
 * @Author: your name
 * @Date: 2019-11-12 18:08:16
 * @LastEditTime: 2019-11-12 19:30:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Zbottom.vue
 -->
<template>
  <div class="box">
        <div class="qita">
            <a class="qita1" href="#"><img src="../assets/img/weixin.png" alt=""><span>微信</span></a>
            <a class="qita2" href="#"><img src="../assets/img/qq.png" alt=""><span>QQ</span> </a>
        </div>
        <div class="xieyi">
            <p>登录代表同意<span>美团点评用户协议、隐私政策</span>，并授权使用您的美团账号点评信息（如昵称、头像、收货地址）以便您统一管理</p>
        </div>          
  </div>
</template>
<script>
export default {
  name: 'Zbottom',
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
   .qita{
       width: 55%;
       margin: .53rem auto 0;
   }
   .qita img{
       width: .59rem;
       height: .59rem;
   }
   .qita1{
       float: left;
   }
   .qita2{
        float: right;
   }
   .qita span{
       display: block;
       margin-left: .18rem;
       font-size: .11rem;
       color: #999999;
   }
   .xieyi{
       width: 94%;
       margin: 0 auto;
       font-size: .11rem;
       color: #999999;
       clear: both;
       padding-top: .35rem;
   }
   .xieyi p span{
       color: #fe9617;
   }
</style>
<template>
  <div class="box">
        <div class="jilu"> 
            <p class="title">修改密码</p>
            <p class="xinxi">
                <el-input placeholder="请输入手机号" v-model="userPhone" clearable>
                    <template slot="prepend">
                        <span>+86</span><i class="iconfont icon-jiantou"></i>
                    </template>
                </el-input>
            </p>
            <p class="xinxi">
                <el-input placeholder="请输入新密码" v-model="password" clearable show-password></el-input>
            </p>
            <p class="xinxi">
                <el-input placeholder="请确认密码" v-model="relpass" clearable show-password></el-input>
            </p>
            <div class="btn1">
                <input type="button" value="修改">
            </div>
            <div class="huan">
                <router-link to="/LoadPage"><span>去登录</span></router-link>
                <em>遇到问题</em>
            </div>    
        </div>       
  </div>
</template>
<script>
export default {
  name: 'Forget',
  data () {
    return {
      userPhone:'',
      password:'',
      relpass:'',
    }
  },
  methods:{
     registerCheck(){
         
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        width: 100%;
    }
   .title{
       font-size: .25rem;
       color:#414244;
       margin:0 0 .21rem;
   }   
   .jilu{
       width: 75%;
       margin:0 auto;
   }
   .jilu input{
       border:none;
       outline: none;
   }
   .jilu .xinxi{
       height: .51rem;
       line-height: .51rem;
   }
   .jilu .xinxi input{
       font-size: .18rem;
   }
   .jilu .xinxi span{
       font-size: .11rem;
       color: #ffd265;
   }
   .icon-jiantou{
       font-size: .11rem;
   }
   .jilu .xinxi img{
       height: .12rem;
       float: right;
       margin-top: .25rem;
       margin-right:.1rem;
   }
   .btn1 input{
       margin-top: .3rem;
       width: 100%;
       height: .47rem;
       color: white;
       background: #cccccc;
       border-radius: .23rem;
       margin-bottom: .26rem;
   }
   .huan{
       color: #ffd46c;
       font-size: .13rem;
   }
   .huan span{
       float: left;
   }
   .huan em{
       float: right;
   }
</style>
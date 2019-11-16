<!--
 * @Author: your name
 * @Date: 2019-11-11 21:50:50
 * @LastEditTime: 2019-11-16 11:48:17
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Zhuce.vue
 -->
<template>
  <div class="box">
        <div class="jilu"> 
            <p class="title">欢迎登录美团</p>
            <p class="xinxi">
                <el-input placeholder="请输入内容" v-model="userPhone" clearable>
                    <template slot="prepend">
                        <span>+86</span><i class="iconfont icon-jiantou"></i>
                    </template>
                </el-input>
            </p>
            <p class="xinxi">
                <el-input placeholder="请输入密码" v-model="password" clearable show-password></el-input>
            </p>
            <div class="btn1">
                <input type="button" value="登录" @touchstart="loginCheck">
            </div>
            <div class="huan">
                <router-link to="/RegisterPage"><span>去注册</span></router-link>
                <router-link to="/ForgetPage"><em>忘记密码？</em></router-link>
            </div>    
        </div>       
  </div>
</template>
<script>
import axios from 'axios';

import { Toast } from 'mint-ui';
export default {
  name: 'Load',
  data () {
    return {
        userPhone: '',
        password: ''
        // go:'/MinePage'
    }
  },
 
  methods:{
    loginCheck(){
        localStorage.setItem('userPhone',this.userPhone);
        if(this.userPhone=="" || this.password==""){
            Toast('手机号或密码不能为空');
        }else{
            axios.get('/user/deng?uname='+this.userPhone+'&upass='+this.password)
            .then(res=>{
                console.log(res.data);  
            })
              
            .catch(err=>{
                console.log(err);
            })
            setTimeout(()=>{
                 Toast("登录成功")
                this.$router.push('/');
            },1100);
        }
       

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
       font-size: .27rem;
       color:#414244;
       margin:0 0 .54rem;
   }
   .jilu{
       width: 75%;
       margin:0 auto;
   }
   .jilu .xinxi{
       height: .66rem;
       /* border-bottom: 1px solid #b6b6b6; */
       line-height: .66rem;
   }
   /* .jilu .xinxi .el-input{
       border:none;
       outline: none;
       font-size: .18rem;
   } */
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
       margin-top: .49rem;
       width: 100%;
       height: .47rem;
       color: white;
       background: #cccccc;
       border: none;
       outline: none;
       border-radius: .23rem;
       margin-bottom: .28rem;
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

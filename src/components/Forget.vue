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
                <input type="button" value="修改" @touchstart="modify">
            </div>
            <div class="huan">
                <router-link to="/LoadPage"><span>去登录</span></router-link>
                <em>遇到问题</em>
            </div>    
        </div>         
  </div>
</template>
<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
  name: 'Forget',
  data () {
    return {
      userPhone:'',
      password:'',
      relpass:''
    }
  },
  methods:{
    modify(){
        var res=/^[a-zA-Z_]\w{5,10}$/;
        localStorage.setItem('username',this.username);
        if(this.username=="" || this.password==""){
            Toast('手机号或密码不能为空');
        }else if(!res.test(this.password)){
            Toast("密码为6~11位，且开头不能为数字");
        }else if(this.password !=this.relpass){
            Toast("两次密码输入不一致");
        }else{
            axios.get('user/gai?uname='+this.userPhone+'&upass='+this.password)
            .then(res=>{
                console.log(res.data);
                
            Toast("修改成功");    
            })
            .catch(err=>{
                console.log(err);
            })
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
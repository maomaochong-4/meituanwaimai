<!--
 * @Author: your name
 * @Date: 2019-11-11 21:50:50
 * @LastEditTime: 2019-11-16 08:43:33
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Zhuce.vue
 -->
<template>
  <div class="box">
        <div class="top">
            <i class="iconfont icon-back" @click="back()"></i>
           <span>新增收货地址</span>
           <i class="el-icon-bell"></i>
        </div>
        <hr>
        <div class="middlea">
           <div class="middleaa">
                <span>手机号：</span><input type="text" placeholder="请输入收货地址" v-model="dress"><br>
           </div>
            <hr>
            <div class="middleaa">
                <span>门牌号：</span><input type="text" placeholder="【详细地址，例1曾101室】" v-model="menpai"><br>
           </div>
           <hr>
           <div class="middleaa">
                <span>联系人：</span><input type="text" placeholder="请输入收货人的姓名" v-model="username"><br>
           </div>
            <!-- <hr> -->
            <!-- <div class="middleaa">
                <span></span><input class="sex" type="radio" checked name="a">先生<input class="sex" type="radio" name="a">女士<br>
           </div> -->
            <hr>
            <div class="middleaa">
                <span>收货地址：</span><input type="text" placeholder="请输入手机号" v-model="userphone"><br>
           </div>
            <div class="middleaaa">
                <button type="button" @touchstart="add">保存地址</button>
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
        dress:'',
        menpai:'', 
        userphone:'',
        username:'',
    }
  },
  methods:{
      back(){
        this.$router.go(-1);
    },
    add(){
        if(this.dress==""){
            Toast("地址不能为空"); 
        }else if(this.userphone==""){
            Toast("手机号不能为空");
        }else if(this.username==""){
            Toast("姓名不能为空");
        }else{
            axios.get('/addr/tiandi?uid='+this.dress+'&addr='+this.menpai+'&atel='+this.userphone+'&aname='+this.username+'&sex='+null+'&abiaoqian='+null)
            .then(res=>{
                console.log(res.data);
                Toast("增加成功");   
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
     .top{
        height: .53rem;
        line-height: .53rem;
        font-size: .17rem;
       color: #333333;
       background: #f2f2f2;
    }
    .top span{
        margin-left:33%;
    }
    .icon-back{
        margin-left: .1rem;
    }
    .el-icon-bell{
        margin-left: .65rem;
    }
    .middlea{
        width: 95%;
        height: 5rem;
        margin-top: .2rem;
        margin: 0 auto
    }
    .middleaa{
        width: 93%;
        height: .4rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        margin-top: .1rem;
        margin-bottom: .1rem;
    }
    .middleaa span{
        width: .8rem;
    }
    .sex{
        width: .2rem;
        height: .2rem;
        margin-left: .2rem;
    }
    input{
        width: 72%;
        height: 90%;
        outline: none;
        border: 0
    }
    button{
        width: 90%;
        height: .5rem;
        background: #f7fa37;
        border: 0
    }
    .middleaaa{
        margin-top: .4rem;
        width: 100%;
        text-align: center
    }
</style>

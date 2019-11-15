<!--
 * @Author: your name
 * @Date: 2019-11-12 16:01:33
 * @LastEditTime: 2019-11-15 21:43:21
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Dizhi.vue
 -->
<template>
  <div class="box">
        <div class="top"> 
            <i class="iconfont icon-back" @click="back()"></i>
            
                <span>选择收货地址</span>
           <router-link to="/xingdizhi">
            <em>新增地址</em>
             </router-link>
        </div>
        <div class="sousuo">
            <i class="iconfont icon-wodedizhi"></i>
            <span>西安</span>
            <i class="el-icon-arrow-down"></i>
            <div class="kuang">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="请输入收货地址">
            </div>
        </div>
        <div class="juti">
            <span>九鼎城</span>
            <img src="../assets/img/dingwei.png" alt="">
            <em>重新定位</em>
        </div>
        <div class="fujin">
            <i class="iconfont icon-wodedizhi"></i>
            <span>附近地址</span>
        </div>  
  </div>
</template>
<script>
export default {
  name: 'Dizhi',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    color: #333333;
    width: 100%;
    height: 2.08rem;
    position: fixed;
    left: 0;
    top: 0;
}
.top{
  width: 100%;
  height: .51rem;
  line-height:.51rem;
}
.icon-back{
  font-size: .2rem;
  margin-left: 2%;
}
.top span{
  font-size:.16rem;
  padding-left: .1rem;
  border-left:1px solid #c4c4c4;
  margin-left: .12rem;
}
.top em{
  float:right;
  font-size: .14rem;
  margin-right: 2%;
}
.sousuo{
    width: 96%;
    margin: 0 auto;
    height: .61rem;
    line-height: .61rem;
}
.icon-wodedizhi{
    font-size: .14rem;
    color: #3a3a3a;
}
.sousuo span{
    font-size: .14rm;
    margin:0 .02rem;
}
.el-icon-arrow-down{
    font-size: .1rem;
    color: #3a3a3a;
}
.kuang{
    height: .31rem;
    width: 2.8rem;
    background: #f4f4f4;
    float: right;
    margin-top: .13rem;
    position: relative;
}
.kuang input{
    border: 0;
    outline: 0;
    float: left;
    margin-left: .29rem;
    margin-top: .08rem;
    background: #f4f4f4;
}
.el-icon-search{
    position: absolute;
    left: 9px;
    top: 9px;
}
.juti{
    width: 100%;
    height: .5rem;
    border-top: 1px solid #f4f4f4;
    border-bottom: 1px solid #f4f4f4;
    line-height: .5rem;
}
.juti span{
    margin-left: 2%;
}
.juti img{
    height: .19rem;
    width: .19rem;
    margin-left: 60%;
    margin-right: 4px;
}
.juti em{
    color: #ffb000;
}
.fujin{
    height: .51rem;
    line-height: .55rem;
}
.fujin span{
    color: #999999;
    font-size: .13rem;
}
.fujin .icon-wodedizhi{
    color: #999999;
    font-size: .13rem;
    margin-left: 3%;
    margin-right: 5px;
}
</style>
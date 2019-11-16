<!--
 * @Author: your name
 * @Date: 2019-11-11 16:52:13
 * @LastEditTime: 2019-11-16 11:11:43
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Denglu.vue
 -->
<template>
  <div class="box">
      <img src="../assets/img/touxiang.png" alt="">
      <router-link to="/LoadPage"><span class="title">{{str}}</span>
      <!-- <span>{{userPhone}}</span> -->
      </router-link>
      <div class="a1">
          <i class="iconfont icon-shezhi"></i>
          <i class="iconfont icon-ziyuan"></i>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Denglu',
  data () {
    return {
      str:"登录/注册"

    }
  }, 
  created(){
   this.checkuser();
  },

  methods:{
    checkuser(){
      let user=localStorage.getItem("userPhone");
      console.log(user);
      if(user!=null){
        this.str=user;
      }
    }
     
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: 1.01rem;
  background: #fefefe;
  display: flex;
  align-items: center;
}
.box img{
    width: .52rem;
    height: .52rem;
    margin: 0 2%;
}
.title{
    color: #333333;
    font-size: .2rem;
}
.a1{
    margin-left: 1.32rem;
}
.iconfont{
    font-size: .2rem;
    color: #33312d;
}
.icon-ziyuan{
   margin-left: .28rem;
}
</style>
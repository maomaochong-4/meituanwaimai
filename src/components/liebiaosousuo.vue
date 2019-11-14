<!--
 * @Author: your name
 * @Date: 2019-11-07 21:39:56
 * @LastEditTime: 2019-11-09 15:38:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\sousuo.vue
 -->

<template>
    <div id="box">
         <img class="q1" src="../assets/img/liebiaofh.png" alt="返回" @click="back()">
         <img class="q2" src="../assets/img/meishi.png" alt="美食">
         <router-link to="/sousuoye">
            <input class="q3" type="text" placeholder="请输入商家、商品名称">
         </router-link>
    </div>  
</template>

<script>

export default {
  name: 'Back',
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

<style scoped>

#box{
    width: 98%;
    height: .35rem;
    background-color: #ff8323;
    margin: 0 auto;
    padding-left:2%;
}

.q1{
    height: .15rem;
    margin-top: .1rem;
}

.q2{
    height: .18rem;
    position: relative;
    right: .04rem;
    top: .018rem;
}
.q3{
    width:80%;
    height: .26rem;
    position: relative;
    left: .56rem;
    bottom: .24rem;
    background:rgba(255,255,255,0.5);
    border: 0;
    color: white;
    text-indent: .1rem;
}

input::-webkit-input-placeholder{
  color:white;
}
</style>

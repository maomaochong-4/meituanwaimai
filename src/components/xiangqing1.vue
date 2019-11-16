<!--
 * @Author: your name
 * @Date: 2019-11-12 16:09:26
 * @LastEditTime: 2019-11-16 08:47:13
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\xiangqing1.vue
 -->
<template>
    <div id="box">
        <div class="xiang1">
            <img :src="xiangqing.img" alt="" class="img111">
            <i class="el-icon-arrow-down" @click=back()></i>    
            <i class="el-icon-more"></i>
            <router-link to="/ShoppingCarPage"><i class="el-icon-shopping-cart-2"></i></router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'top',
  data () {
    return {
       xiangqing:[],
    }
  },
   methods:{
      back(){
          this.$router.go(-1);
      }
  },
   
  created(){
    fetch('/api/shop/xiang')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.xiangqing=data;
         console.log(this.xiangqing)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped>
 .xiang1{
     width: 100%;
     height: 3.18rem;
 }
 .img111{
     width: 100%;
     height: 3.18rem;
 }
.el-icon-arrow-down,.el-icon-shopping-cart-2,.el-icon-more{
    font-size: .3rem;
    color: white;
    line-height: .34rem;
    text-align: center;
    width: .34rem;
    height: .34rem;
    background:rgba(0,0,0,0.5);
    border-radius: 50%;
}
.el-icon-arrow-down{
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
}

.el-icon-more{
    position: absolute;
    top: 0.2rem;
    right: 0.15rem;
}
.el-icon-shopping-cart-2{ 
    position: absolute;
    top: 0.2rem;
    right: 0.6rem;
}
</style>

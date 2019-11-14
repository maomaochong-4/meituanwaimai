<!--
 * @Author: your name
 * @Date: 2019-11-13 11:24:58
<<<<<<< HEAD
 * @LastEditTime: 2019-11-13 15:07:05
 * @LastEditors: 郭涛
=======
 * @LastEditTime: 2019-11-13 11:53:29
 * @LastEditors: Please set LastEditors
>>>>>>> sijuan
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Ddtop.vue
 -->
<template>
  <div class="box">
       <div class="top">
           <span>订单</span>
           <i class="el-icon-search"></i>
           <i class="el-icon-bell"></i>
        </div>
        <div class="middle">
            <span>全部订单</span>
            <em>待评价</em>
            <em>退款</em>
        </div>  
  </div>
</template>
<script>
export default {
  name: 'Ddtop',
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
<<<<<<< HEAD
        height: .9rem;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
    }
    .top{
        height: .4rem;
        line-height: .4rem;
        padding-top: .1rem;
        font-size: .18rem;
        color: #333333;
    }
    .top span{
        margin-left:44%;
=======
        height: 1.01rem;
        display: fixed;
        top: 0;
        left: 0;
    }
    .top{
        height: .53rem;
        line-height: .53rem;
        font-size: .17rem;
       color: #333333;
    }
    .top span{
        margin-left:50%;
>>>>>>> sijuan
    }
    .el-icon-search{
        margin-left: .9rem;
        margin-right: .1rem;
    }
    .middle{
<<<<<<< HEAD
        height: .4rem;
        font-size: .15rem;
        line-height: .4rem;
=======
        height: .48rem;
        font-size: .15rem;
>>>>>>> sijuan
        display: flex;
        justify-content: space-around;
        vertical-align: center;
    }
    .middle em{
        color: #777777;
    }
</style>
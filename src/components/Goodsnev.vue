<!--
 * @Author: your name
 * @Date: 2019-11-11 17:54:43
 * @LastEditTime: 2019-11-11 18:08:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\Goodsnev.vue
 -->

<template>
    <div class="box">
        <div class="nev">
            <p class="change">点菜</p>
            <p>评价<span>9999+</span></p>
            <p>商家</p>
            <p class="single">好友拼单</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Goodsheader",
    data(){
        return{
            
        }
    },
     methods:{
     
     }
}
</script>
  
<style scoped>
    .nev{
        width: 92%;
        height: .4rem;
        border-bottom: 1px solid #d9d5d5;
        display: flex;
        justify-content: space-between;
        padding: 0 14px;
    }
    .nev>p{
        font-size: 14px;
        line-height: .45rem;
        color: #72716e;
    }
    .nev .change{
        border-bottom: 2px solid #dfbe04;
        color: #1b1b1b;
    }
    .box .nev>p>span{
        font-size: .1rem;
        margin-left: 5px;
    }
    .nev .single{
        width: .7rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        font-size: 10px;
        color: #dfbe04;
        border: 1px solid #dfbe04;
        border-radius: 14px;
        margin-top:10px; 
    }
</style>
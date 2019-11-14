<!--
 * @Author: your name
 * @Date: 2019-11-11 12:09:45
 * @LastEditTime: 2019-11-11 16:04:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\lbnxTbdw.vue
 -->
<template>
    <div id="box">
       <div class="dox">
           <div class="top-dox">
               <select class="select">
                   <option>综合排序</option>
                   <option>速度最快</option>
                   <option>评分最高</option>
                   <option>起送价最低</option>
                   <option>配送费最低</option>
                   <option>人均高到低</option>
                   <option>人均低到高</option>
               </select>
               <span class="ss1">销量</span>
               <span class="ss1">距离</span>
           </div>
           <div class="bottom-dox" id="bottom-dox">
               <span class="ss2">减配送费</span>
               <span class="ss2">满减优惠</span>
               <span class="ss2">津贴联盟</span>
               <span class="ss2 ss3">会员红包</span>
           </div>
       </div>
    </div>
</template>
<script>
   
</script>

<style scoped>
.dox{
    width: 100%;
    background-color: #ffffff;
}
.select{
    height: .3rem;
    font-size: 16px;
    margin-top: .15rem;
    margin-left: .05rem;
    margin-right: 0.2rem;
    border: 0;
}
.ss1{
    display: inline-block;
    font-size: 16px;
    width: .5rem;
    text-align: center;
}
.ss2{
    display: inline-block;
    width: 23%;
    height: .33rem;
    background-color: #f8f8f6;
    line-height: .33rem;
    text-align: center;
    border-radius: 5px;
    margin-right: 1.5%;
    margin-top: .07rem;
    margin-bottom: .1rem;
}
.ss3{
    margin-right: 0;
}
</style>

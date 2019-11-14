<!--
 * @Author: your name
 * @Date: 2019-11-07 20:30:55
 * @LastEditTime: 2019-11-13 14:52:15
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\App.vue
 -->

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
  background-color: #f4f4f4;
}
#box{
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 10px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
em,i{
  font-style: normal;
}
</style>

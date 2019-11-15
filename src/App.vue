<!--
 * @Author: 郭涛
 * @Date: 2019-11-14 19:34:12
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-14 20:38:57
 * @Description: 
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
  font-size: 15px;
  font-size: 14px;
  height: 100%;
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

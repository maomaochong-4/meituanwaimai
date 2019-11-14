<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:31:09
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-12 11:21:55
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
  font-size: 15px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>

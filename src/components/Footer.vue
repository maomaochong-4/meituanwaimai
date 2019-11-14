<!--
 * @Author: your name
 * @Date: 2019-11-11 17:27:41
 * @LastEditTime: 2019-11-11 20:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\Footer.vue
 -->

<template>
  <div class="box">
      <footer>
           <ul>
            <li>
              <i class="el-icon-s-home"></i>
              <span>首页</span>
            </li>
            <li>
              <i class="el-icon-thumb"></i>
              <span>会员</span>
            </li>
            <li>
              <i class="el-icon-tickets mac"></i>
              <span class="spanhh">订单</span>
            </li>
            <li>
              <i class="el-icon-user"></i>
              <span>我的</span>
            </li>
        </ul> 
      </footer>
  </div>

</template>

<script>
export default {
  name: 'top',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    height: .55rem;
    background: white;
    width: 100%;
    position: fixed;
    bottom: 0
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
}
li{ 
    text-align: center;
    width: 33.33%
}
span{
    color: #999999
}
i{
  font-size: .25rem;
  color:#999999;
  display: block;
}
.mac{
    color: #fdb934;
}
.spanhh{
  color:#fdb934;
}
</style>

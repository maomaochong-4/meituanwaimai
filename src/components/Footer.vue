<!--
 * @Author: 郭涛
 * @Date: 2019-11-14 19:34:12
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-14 21:07:19
 * @Description: 
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

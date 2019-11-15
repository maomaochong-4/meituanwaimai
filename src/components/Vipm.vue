<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 20:26:41
 * @Description: "优惠"
 -->
<template>
  <div class="box">
      <div class="vip-1">
          <div class="vip-2">
            <img src="../assets/vipm1.png" alt="" class="vipm1">
          </div>
          <div class="vip-3">
              <h3 class="vip-4">食全食美0.1元起</h3>
          </div>
      </div>
        <ul>
          <li class="lia">
            <img src="../assets/vipm2.png" alt="" class="vipai">
            <p class="tehui">『特惠』荤素什锦超级</p>
            <p class="jiage">￥<span class="jiage jia">14.9</span><span class="hua">￥35.0</span></p>
          </li>
          <li class="lia">
            <img src="../assets/vipm3.png" alt="" class="vipai">
            <p class="tehui">『特惠』土豆</p>
            <p class="jiage">￥<span class="jiage jia">0.9</span><span class="hua">￥4.50</span></p>
          </li>
          <li>
            <img src="../assets/vipm4.png" alt="" class="vipai">
            <p class="tehui">『超级折扣』豆芽粉条炒肉</p>
            <p class="jiage">￥<span class="jiage jia">0.1</span><span class="hua">￥4.5</span></p>
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'top',
  data () {
    return {
      vips:[
      ],
    }
  },
  created() {
    axios.get('/shop/all')
     .then(res=>{
       this.vips =res.data;
        console.log(this.vips)
      })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul{
  width: 90%;
  height: 1.64rem;
  margin: 0 auto;
  display: flex;
  margin-bottom: .05rem 
}
li{
  width: 31%;
  height: 1.64rem;
}
.lia{
  margin-right: 3.5%
}
.tehui{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
}
.jiage{
  color: #ec3f3b
}
.jia{
  font-weight: 600
}
.hua{
  color: #9e9e9e;
  font-size: 12px;
  text-decoration: line-through
}
.vipai{
  width: 100%;
  height: .94rem;
  border-radius: 10px
}

.vip-1{
    width: 96%;
    height: 1.61rem;
    margin: .48rem auto 0;
}
.vip-2{
    width: 100%;
    height: 1.09rem;
}
.vipm1{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
}
.vipm2{
    width: 1.14rem;
    height: .9rem;
    border-radius: 10px;
}
.vip-3{
    width: 92%;
    height: .51rem;
    line-height: .51rem;
    margin: 0 auto;
}
.vip-4{
    font-size: 22px;
    
}
.vip-5{
    width: 96%;
    height: 1.68rem;
    background: red;
    margin: 0 auto
}


</style>

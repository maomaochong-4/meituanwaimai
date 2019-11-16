<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-16 10:56:59
 * @Description: "导航栏"
 -->
<template>
  <div class="box">
      <div class="box2">
            <ul>
              
                <li>
                    <router-link to="/liebiao">
                     <img src="../assets/tb1.png" alt="">美食
                    </router-link>
              </li>
              <li><img src="../assets/tb2.png" alt="">甜点饮品</li>
              <li><img src="../assets/tb4.png" alt="">超市便利</li>
              <li><img src="../assets/tb5.png" alt="">水果蔬菜</li>
              <li><img src="../assets/tb3.png" alt="">送药上门</li>
            </ul>
      </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Dh',
  data () {
    return {
      leibies:[
      ],
    }
  },
  // created() {
  //   axios.get('/leibies')
  //     .then(res=>{
  //      this.leibies =res.data;
  //       console.log(this.leibies)
  //     })
  //    .catch(err=>{
  //      console.log(err);
  //    })
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box2{
  width: 96%;
  margin: 0 auto
}
ul{
  display: flex;
  justify-content: space-around
}
li{
  margin-top: .15rem;
  text-align: center;
    color: #323433
}
img{
  display: block;
  width: .6rem;
  height: .6rem;
  margin-bottom: .05rem
}
</style>

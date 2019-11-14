<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-13 21:29:43
 * @Description: "推荐"
 -->
<template>
  <div class="box">
      <div class="hao">
          <ul>
            <li v-for="(haodian,index) in haodians" :key="index">
              <div class="imgs">
                <img :src="haodian.img" alt="" class="wu">
                </div>
                <div class="zi">
                    <h2 class="pq">{{haodian.name}}</h2>
                    <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                </div>
            </li>
            <!-- <li>
                <div class="imgs">
                <img src="../assets/wu1.png" alt="" class="wu">
                </div>
                <div class="zi">
                    <h2 class="pq">王菊菜馆(高新路)</h2>
                    <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                </div>
            </li>
            <li>
                <div class="imgs">
                    <img src="../assets/wu2.png" alt="" class="wu">
                </div>
                <div class="zi">
                    <h2 class="pq">毛乡情湖南土家菜</h2>
                    <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                </div>
            </li>
            <li>
                <div class="imgs">
                    <img src="../assets/wu3.png" alt="" class="wu">
                </div>
                <div class="zi">
                    <h2 class="pq">挚念粉(国宾店)</h2>
                    <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                </div>
            </li>
            <li>
                <div class="imgs">
                      <img src="../assets/wu4.png" alt="" class="wu">
                  </div>
                  <div class="zi">
                      <h2 class="pq">苏福记(紫薇臻品店)</h2>
                      <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                  </div>
            </li>
            <li>
                <div class="imgs">
                      <img src="../assets/wu5.png" alt="" class="wu">
                  </div>
                  <div class="zi">
                      <h2 class="pq">川人冒.大院香锅.冒菜</h2>
                      <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                  </div>
            </li>
            <li>
                <div class="imgs">
                      <img src="../assets/wu6.png" alt="" class="wu">
                  </div>
                  <div class="zi">
                      <h2 class="pq">正派川湘菜馆</h2>
                      <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                  </div>
            </li> -->
          </ul>
      </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'hao',
    data () {
    return {
      haodians:[
      ],
    }
  },
  created() {
      axios.get('/haoxuans')
      .then(res=>{
       this.haodians =res.data;
        console.log(this.haoxuans)
      })
     .catch(err=>{
       console.log(err);
     })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hao{
    width: 96%;
    margin: 0 auto;
    margin-bottom: .2rem
}
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
li{
  width:48%;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  margin-bottom: .1rem
}
.imgs{
  width: 1.74rem;
  height: 1.06rem;
  box-sizing: border-box;
  margin-right: .08rem;
}
.wu{
  width: 1.74rem;
  border-radius: 8px;
}
.zi{
  width: 1.74rem;
}
/* .pq{
  margin-left: .1rem;
} */
h2{
  font-size: 17px
}
.qp{
  display: block;
  margin-top: .1rem
}
.el-icon-circle-close{
  margin-left: .13rem;
  font-size: 18px
}
</style>

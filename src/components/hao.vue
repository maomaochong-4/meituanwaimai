<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 20:10:25
 * @Description: "推荐"
 -->
<template>
  <div class="box">
      <div class="hao">
          <ul>
            <li v-for="(haodian,index) in haodians" :key="index">
              <div class="imgs">
                <img :src="haodian.dpic" alt="" class="wu">
                </div>
                <div class="zi">
                    <h2 class="pq">{{haodian.dsname}}</h2>
                    <sapn class="pq qp">根据你看过的店推荐<i class="el-icon-circle-close"></i></sapn>
                </div>
            </li>
            
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
      axios.get('/shop/cha?sid=1')
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

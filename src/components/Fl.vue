<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-16 11:01:24
 * @Description: "分类"
 -->
<template>
  <div class="box">
      <div class="boxf">
          <ul>
              <!-- <li v-for="(leibie,index) in leibies" :key="index">
                <img :src="leibie.img" alt="">
                {{leibie.name}}
              </li> -->
              <li class="boxf1">
                  <ul class="boxf12">
                        <!-- <li v-for="(fenlei,index) in fenleis" :key="index">
                            <img :src="fenlei.img" alt="" class="boxf1_1">
                            {{fenlei.name}}
                        </li> -->
                      <router-link to="/Fenleim"><li><img src="../assets/fl1.png" alt="" class="boxf1_1">校园优选</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl2.png" alt="" class="boxf1_1">下午茶</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl3.png" alt="" class="boxf1_1">面包蛋糕</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl4.png" alt="" class="boxf1_1">川湘菜</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl5.png" alt="" class="boxf1_1">津贴联盟</li></router-link>
                  </ul>
              </li>
              <li class="boxf1">
                  <ul class="boxf12">
                      <router-link to="/Fenleim"><li><img src="../assets/fl6.png" alt="" class="boxf1_1">减免配送费</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl7.png" alt="" class="boxf1_1">到店自取</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl8.png" alt="" class="boxf1_1">跑腿代购</li></router-link>
                      <router-link to="/Fenleim"><li><img src="../assets/fl9.png" alt="" class="boxf1_1">美团专送</li></router-link>
                      <router-link to="/Fenleim">
                          <li><img src="../assets/fl10.png" alt="" class="boxf1_1">全部分类</li>
                    </router-link>
                  </ul>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {    return {
      fenleis:[
      ],
    }
  },
  // created() {
  //   fetch('http://localhost:3000/fenleis')
  //     .then(res=>{
  //       return res.json();
  //     })
  //     .then(data=>{
  //         this.fenleis =data;
          
  //       console.log(this.fenleis)
  //    })
  //    .catch(err=>{
  //      console.log(err);
  //    })
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.boxf{
    width: 96%;
    height: 1.65rem;
    margin: 0 auto;
    margin-top: .2rem
}
.boxf12{
    display: flex;
    justify-content: space-around;
    margin-top: .3rem
}
.boxf12 li{
    width: .7rem;
    text-align: center;
    color: #323433
}
.boxf1_1{
    width: .27rem;
    height: .27rem;
    display: block;
    margin-left: .26rem;
    margin-bottom: .05rem
}
</style>

<!--
 * @Author: 郭涛
 * @Date: 2019-11-14 19:34:12
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-15 14:28:07
 * @Description: 
 -->
<template>
  <div class="box">
      <footer>
           <ul>
            <li>
              <router-link to="/">
                <div :class="{'yellow':footerCls[0]}"  @touchstart="changeCls(0)">
                  <i class="el-icon-s-home"></i>
                  <span>首页</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/huiyuan">
              <div :class="{'yellow':footerCls[1]}"  @touchstart="changeCls(1)">
                  <i class="el-icon-thumb"></i>
                  <span>会员</span>
               </div>
              </router-link>
            </li>
            <li>
              <router-link to="/dindan">
              <div :class="{'yellow':footerCls[2]}"  @touchstart="changeCls(2)">
                  <i class="el-icon-tickets mac"></i>
                  <span class="spanhh">订单</span>
               </div>
              </router-link>
            </li>
            <li>
              <router-link to="/MinePage">
              <div :class="{'yellow':footerCls[3]}"  @touchstart="changeCls(3)">
                  <i class="el-icon-user"></i>
                  <span>我的</span>
               </div>
              </router-link>
            </li>
        </ul> 
      </footer>
  </div>

</template>

<script>
export default {
 name: 'Footer',
    data() {
        return {
            foots: [],
            
        }
    },
    computed: {
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    methods:{
        changeCls(Index){
            this.$store.commit('changeFooterCls',Index)
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
/* .mac{
    color: #fdb934;
}
.spanhh{
  color:#fdb934;
} */
.yellow span{
    
  color:#fdb934;
}
.yellow i{
  
  color:#fdb934;
}
</style>

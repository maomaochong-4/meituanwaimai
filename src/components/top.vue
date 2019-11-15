<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 16:13:59
 * @Description: "顶部"
 -->
<template>
  <div class="box">
      <div class="box_1">
              <div class="box_left">
                        <img src="../assets/dingwei.png" alt="" class="box_left1">
                    <router-link to="/DizhiPage">    
                        <span> 立人科技园</span>
                     </router-link>
                        <img src="../assets/youjiantou.png" alt="" class="box_left2"> 
          </div>
        
          <div class="box_right">
              <img src="../assets/xiaoxi.png" alt="" class="box_right1">
          </div>
      </div>
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
.box{
    width: 100%;
    height: .47rem;
    margin:0 auto;
}
.box_1{
    width: 96%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between
}
.box_left{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center
}
.box_left1{
    display: block;
    width: .2rem;
    height: .2rem;
    margin-right: .04rem;

}
.box_left2{
    margin-left: .05rem;
    display: block;
    width: .1rem;
    height: .1rem;

}
.box_right1{
    width: .2rem;
    height: .2rem;
}
.box_left span{
    font-size: 18px;
    font-weight: 600;

}
.box_right{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end
}
</style>

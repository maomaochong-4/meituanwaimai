<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-14 15:07:36
 * @Description: "搜索框"
 -->
<template>
      <div class="tou">
          <div class="tou1">
              <i class="el-icon-arrow-left" @click="back()"></i>
          </div>
          <div class="box">
                <img src="../assets/sousuo.png" alt="" class="box1">
                <input type="text" :placeholder="tip"> 
          </div>
      </div>
</template>

<script>
export default {
  name: 'toubu',
  data () {
    return {
      tip:"啃得驴驴肉火烧 满25减10"
    }
  },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tou{
    width:100%;
    height: .6rem;
    display: flex;
    margin: 0 auto;
    background: white;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(235, 235, 235);
    position: fixed;
    top: 0
}

.tou1{
     width: 20%;
    height: .35rem;
    font-size: 40px;
    line-height: .35rem;
    text-align: center
}
.box{
    box-sizing: border-box;
    padding: .2rem;
    width: 77%;
    height: .3rem;
    margin:0 auto;
    background: #f7f9fa;
    display: flex;
    align-items: center;
}
.box1{
    width: .25rem;
    height: .25rem;
    margin-left: .2rem
}
input{
  margin-left: .05rem;
  width: 100%;
  height: .35rem;
  border: 0;
  background: #f7f9fa;
  outline:none;
    border-radius: 10px;
}
</style>

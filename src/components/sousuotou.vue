<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-11 16:30:00
 * @Description: "导航栏"
 -->
<template>
  <div class="box">
      <header>
         <i class="el-icon-arrow-left" @click="back()"></i>
         <div class="sousuoy">
             搜索页
        </div> 
      </header>
  </div>

</template>

<script>
export default {
  name: 'top',
  data () {
    return {
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
header{
    width: 96%;
    height: .5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: .2rem    
}
.el-icon-arrow-left{
    font-size: .3rem;
    margin-left: .15rem
}

.sousuoy{
    width: 88%;
    height: 100%;
    text-align: center;
    line-height: .5rem;
    font-size: 22px;
    color: #666666;
}
</style>

<template>
  <div class="box">
        <div class="top">
            <i class="el-icon-close" @click="back()"></i>
            <span>帮助</span>
        </div>         
  </div>
</template>
<script>
export default {
  name: 'Zhuce',
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
    .box{
        width: 100%;
    }
    .top{
        width: 95%;
        margin:.17rem auto .58rem;
        font-size: .18rem;
        color: #ffd161;
    }
   .top span{
       float: right;
   }
</style>
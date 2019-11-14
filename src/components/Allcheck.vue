<!--
 * @Author: your name
 * @Date: 2019-11-11 15:03:54
 * @LastEditTime: 2019-11-14 16:04:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Allcheck.vue
 -->
<template>
  <div class="box">
    <!-- <div class="edit" v-if="cartStatus === 'edit'">
        <label>
            <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
            <b></b>
            <span>全选</span>
        </label>
        <span class="delet">删除(3)</span>
    </div>
    <div class="gotopay" v-if="cartStatus === 'account'">
        <label>
            <input type="checkbox" name="allRadio" class="disN" @click="allCheck($event)">
            <b></b>
            <span class="marginR40">全选</span>
            <span>合计：</span>
            <span class="sum">￥{{sumPrice.toFixed(2)}}</span>
        </label>
        <span class="delet" @click="cauSum">去结算({{totalNumber}})</span>
    </div> -->
    <div class="radioBox">
        <input type="checkbox" name="" class="allCheckBox"><span></span>   
    </div>
    <p class="quanxuan">全选</p>
    <div class="jiesuan">
        <span class="jie1">一键结算</span>
        <em class="jie2">{{totalNumber}}个商家</em> 
    </div>
    <div class="jia">
        <p><span class="jia1">合计</span>￥<em>0</em></p>
        <p><span class="jia2">总优惠</span>￥<em>0</em></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Allcheck',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width: 100%;
  height: .42rem;
  color: #666666;
  position: fixed;
  left:0;
  bottom:0;
  background: #ffffff;
  border-top: 2px solid #f4f4f4;
  
}
input{
    width: .18rem;
    height: .18rem;
    margin:0 2%;
    float: left;
    margin-top: .1rem;
}
.quanxuan{
    font-size: .16rem;
    color: #333333;
    float: left;
    margin-top: .1rem;
}
.jiesuan{
    width: 1.06rem;
    height: .42rem;
    background: #cccccc;
    float: right;
   border-radius: .21rem;
   margin:0 2%;
   color: white;
   text-align: center;
}
.jie1{
    display: block;
    font-size: .14rem;
}
.jie2{
    font-size: .09rem;
}
.jia{
    float: right;
    color: #fb4e44;

}
.jia1{
    font-size: .14rem;
    color: #333333;   
}
.jia2{
    font-size: .11rem;
    color: #333333;
}
</style>
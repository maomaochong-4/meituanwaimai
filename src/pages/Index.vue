<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-15 10:57:37
 * @Description: 
 -->
<template>
  <div class="box">
      <top></top>
      <Search></Search>
      <Nav></Nav>
      <banner></banner>
      <Dh></Dh>
      <Fl></Fl>
      <haodian></haodian>
      <hao></hao>
      <Vipm></Vipm>
      <daodianziqu></daodianziqu>
      <fujinshangjia></fujinshangjia>
      <router-link to="/ShoppingCarPage"><i class="el-icon-shopping-cart-2"></i></router-link>
      <img src="../assets/zhineng.png" alt="" class="zhi">
      <Footer></Footer>
  </div>
</template>

<script>

import top from '@/components/top';
import Search from '@/components/Search';
import Nav from '@/components/Nav';
import banner from '@/components/banner';
import Dh from '@/components/Dh';
import Fl from '@/components/Fl';
import haodian from '@/components/haodian';
import hao from '@/components/hao';
import Vipm from '@/components/Vipm';
import daodianziqu from '@/components/daodianziqu';
import fujinshangjia from '@/components/fujinshangjia';
import Footer from '@/components/Footer';
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components:{
   top,Search,Nav,banner,Dh,Fl,haodian,hao,Vipm,daodianziqu,fujinshangjia,Footer
  },
}
</script>
    
<style scoped>
  img{width: 64px;
    height: 83px;
    position:fixed;
    bottom: 1rem;
    right: .2rem;
  }
  .el-icon-shopping-cart-2{
    font-size: 40px;
    position:fixed;
    bottom: 2rem;
    right: .3rem;
    background: white;
    border-radius: 50%;
    color: #999
  }
</style>

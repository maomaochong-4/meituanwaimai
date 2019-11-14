<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-13 21:12:15
 * @Description: "搜索框"
 -->
<template>
  <div class="mmni"  id="searchBar">
      <div class="box">
          <img src="../assets/sousuo.png" alt="" class="box1">
          <router-link to="/Sousuoye">
          <input type="text" :placeholder="tip"> 
          </router-link>
      </div>
  </div>
 
</template>

<script>

export default {
  name: 'Search',
  data () {
    return {
      tip:"啃得驴驴肉火烧 满25减10"
    }
  },
      mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
      methods: {
      handleScroll () { //改变元素#searchBar的top值
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('#searchBar').offsetTop;

        if(scrollTop>=0){
          offsetTop=0;
          document.querySelector('#searchBar').style.top = offsetTop+'px';
        }else{
          document.querySelector('#searchBar').style.top = '0';
        }
      },
    },
      destroyed () {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mmni{
  width: 100%;
  height: .55rem;
  background: #fff;
   position: sticky;
  box-sizing: border-box;
  z-index: 2;
  display: flex;
  align-items: center
}
.box{
    box-sizing: border-box;
    padding: .2rem;
    width: 95%;
    height: .35rem;
    margin:0 auto;
    background: #f4f0ef;
    border-radius: 10px;
    display: flex;
    align-items: center;
    z-index: 2;
}
.box1{
    width: .25rem;
    height: .25rem;
    margin-left: .2rem
}
input{
  margin-left: .05rem;
  width: 100%;
  height: 100%;
  border: 0;
  background: #f4f0ef;
  outline:none;
    border-radius: 10px;
}
</style>

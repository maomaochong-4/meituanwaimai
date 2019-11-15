<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-15 22:13:31
 * @Description: "搜索框"
 -->
<template>
  <div class="box">
      <div class="box-sou">
          <p>搜索发现</p>
          <hr>
          <section>
              <span class="box-sou1">外婆印象</span>
              <span class="box-sou1">肯德基</span>
              <span class="box-sou1">奶茶</span>
              <span class="box-sou1">王菊</span>
              <span class="box-sou1">coco都可</span>
              <span class="box-sou1">麻辣烫</span>
              <span class="box-sou1">过钱米线</span>
              <span class="box-sou1">麦当劳</span>
              <span class="box-sou1">coco奶茶</span>
              <span class="box-sou1">大盘鸡</span>
              <span class="box-sou1">麦当劳</span>
              <span class="box-sou1">汉堡</span>
              <span class="box-sou1">星巴克</span>
          </section>
          <div class="box-sou2">
              <span class="box-sou3">历史记录</span>
              <i class="el-icon-delete"></i>
          </div>
            <div class="box-sou4">
                <span class="box-sou7">麦当劳</span>
                <span class="box-sou7">coco奶茶</span>
                <span class="box-sou7">大盘鸡</span>
            </div>
      </div>
  </div>
 
</template>

<script>
  import axios from 'axios';

export default {
  name: 'Search',
   data () {
    return {
      sousuos:[
      ],
    }
  },
  created() {
    axios.get('/shop/sou?sname=菜')
      .then(res=>{
       this.sousuos =res.data;
        console.log(this.sousuos)
      })
     .catch(err=>{
       console.log(err);
     })
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-sou{
    width: 96%;
    height: 5rem;
    margin: 0 auto
}
p{
    width: 96%;
    margin-top: .2rem;
    font-size: 16px;
    margin-left: .2rem;
    margin-bottom: .1rem;
    color: #999
}
section{
    width: 96%;
    margin: .1rem auto .1rem;
    display: flex;
    flex-wrap: wrap;
}
.box-sou1{
    color: #666666;
    font-size: 13px;
    width: .7rem;
    height: .3rem;
    background: rgb(223, 221, 221);
    border-radius: 5px;
    text-align: center;
    line-height: .3rem;
    margin-right: .1rem;
    margin-top: .1rem
}
.box-sou2{
    width: 93%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto
}
.box-sou3{
    font-size: 16px;
    color: #999
}
.el-icon-delete{
    font-size: 16px;
    color: #999
}
.box-sou4{
    width: 92%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap
}
.box-sou7{
    width: .8rem;
    height: .3rem;
    background: rgb(223, 221, 221);
    border-radius: 5px;
    text-align: center;
    line-height: .3rem;
    margin-right: .1rem;
    margin-top: .1rem;
    color: #666666;
}
</style>

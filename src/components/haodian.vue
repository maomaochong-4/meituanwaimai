<!--
 * @Author: 马川
 * @Date: 2019-11-06 20:41:40
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-11 20:39:31
 * @Description: "好店推荐"
 -->
<template>
  <div class="box">
      <div class="hao1">
          <div class="hleft">
              <span class="hspan">午餐好店</span>
          </div>
          <div class="hright">
              <span>更多></span>
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
.hao1{
    width: 96%;
    height: .53rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between
}
.hleft{
    width: 1.16rem;
}
.hright{
    width: .52rem;
}
.hright span{
    display: block;
    margin-top: .05rem;
    color: #5c5c5c;

}
.hspan{
    font-size: 22px;
    font-weight: 600;
}
.hright span .il{
    margin-left: .1rem;
    font-weight: 600;
    color: #5c5c5c;
}
</style>

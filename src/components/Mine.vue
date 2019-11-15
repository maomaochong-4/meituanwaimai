<!--
 * @Author: your name
 * @Date: 2019-11-11 17:45:43
 * @LastEditTime: 2019-11-15 09:16:52
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Mine.vue
 -->
<template>
  <div class="box">
    <ul class="liebiao">
        <li class="zichan">
            <p class="title">我的资产</p>
            <div class="content">
                <a href="#">
                    <i class="iconfont icon-hongbao"></i><em>红包</em>
                    <div class="you">
                        <span>5</span><b>个未使用</b>
                    </div>    
                </a>
                <a href="#">
                    <i class="iconfont icon-daijinjuanguanli"></i><em>代金券</em>
                    <div class="you">
                         <span>3</span><b>张未使用</b>
                    </div>    
                </a>
                <a href="#">
                    <i class="iconfont icon-guanlijintie"></i><em>津贴</em>
                    <div class="you"><span>20</span><b>元可叠加满减</b></div>   
                </a>
                <a href="#">
                    <i class="iconfont icon-wode-qianbaocopy"></i><em>我的钱包</em>
                    <div class="you"><b>绑卡立减</b></div>    
                </a>
                <a href="#">
                    <i class="iconfont icon-jieqian"></i><em>借钱</em>
                    <div class="you"><b>最高10万</b></div>   
                </a>
            </div>
        </li>
        <li class="zichan">
            <p class="title">我的功能</p>
            <div class="gongneng">
                <a href="#">
                    <i class="iconfont icon-wodedizhi"></i><em>我的地址</em>   
                </a>
                <a href="#">
                    <i class="iconfont icon-wodezuji"></i><em>我的足迹</em> 
                </a>
                <a href="#">
                    <i class="iconfont icon-wodeshoucang"></i><em>我的收藏</em>  
                </a>
                <a href="#">
                    <i class="iconfont icon-jilu"></i><em>答谢记录</em>
                </a>
                <a href="#">
                    <i class="iconfont icon-wodepingjia"></i><em>我的评价</em>  
                </a>
            </div>
        </li>
         <li class="zichan">
            <p class="title">我的服务</p>
            <div class="gongneng">
                <a href="#">
                    <i class="iconfont icon-bangzhu"></i><em>帮助与反馈</em>   
                </a>
                <a href="#">
                    <i class="iconfont icon-kefuzhongxin"></i><em>客服中心</em> 
                </a>
                <a href="#">
                    <i class="iconfont icon-lajifenleishidian"></i><em>分类助手</em>  
                </a>
            </div>
        </li>
        <li class="zichan">
            <p class="title">更多推荐</p>
            <div class="gongneng">
                <a href="#">
                    <i class="iconfont icon-yaoqingyoujiang"></i><em>邀请有奖</em>   
                </a>
                <a href="#">
                    <i class="iconfont icon-ruzhu"></i><em>商家入驻</em> 
                </a>
                <a href="#">
                    <i class="iconfont icon-qishouzhaomu"></i><em>骑手招募</em>  
                </a>
                <a href="#">
                    <i class="iconfont icon--woyaohezuo-me"></i><em>我要合作</em>
                </a>
                <a href="#">
                    <i class="iconfont icon-gongyi"></i><em>美团公益</em>  
                </a>
                <a href="#">
                    <i class="iconfont icon-lvsenengliang"></i><em>能量捐赠</em>  
                </a>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Mine',
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
        background: #f4f4f4;
        overflow-y:auto; 
        padding-bottom: .55rem;
    }
    .liebiao{
        width: 96%;
        margin:0 auto;
    }
    .zichan{
        background: #ffffff;
        border-radius: .14rem;
        margin-bottom: .12rem;
    }
    .title{
        padding-top: .17rem;
        margin-left: .13rem;
        margin-bottom: .17rem;
        color: #33312d;
        font-size: .15rem;
    }
    .iconfont{
        font-size: .22rem;
        color: #ffb733;
    }
    .icon-hongbao{
        color: #ff4a40;
    }
    .content{
        overflow: hidden;
    }
    .content a{
        /* margin: 0 .28rem; */
        width: 33%;
        float: left;
        text-align: center;
        margin-bottom: .16rem;
    }
    .content em{
        color: #403e3a;
        font-size: .14rem;
        margin-left: .08rem
    }
    .you{
        margin-top: .05rem;
    }
    .you span{
        color: #ff4a40;
    }
    .content b{
        font-weight: normal;
        font-size: .12rem;
        color: #999794;
    }
    .gongneng{
        overflow: hidden;
    }
    .gongneng a{
        float: left;
        width: 25%;
        text-align: center;
         margin-bottom: .16rem;
    }
    .gongneng em{
        display: block;
        margin-top: .05rem;
    }
</style>

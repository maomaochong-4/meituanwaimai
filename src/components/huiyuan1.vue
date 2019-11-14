<!--
 * @Author: your name
 * @Date: 2019-11-11 20:19:44
 * @LastEditTime: 2019-11-12 11:22:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\huiyuan1.vue
 -->
<template>
    <div class="box">
        <div class="dinta">
            <p class="pp1">美团外卖</p>
        </div>
        <div class="huiyuan">
            <div class="huiyuan1">
                <img src="../assets/img/huiyuan.png" alt="" class="huiyuan11">
                <p class="huiyuan12">139****3841</p>
                <p class="huiyuan13">暂未开通美团会员</p>
            </div>
            <img src="../assets/img/huiyuan1.png" alt="" class="huiyuan2">
        </div>
    </div>
</template>
<script>
</script>

<style scoped>
    #box{
        background-color: #fff;
    }
    .huiyuan{
        width: 100%;
        height: 1.66rem;
        background-color: #292826;
    }
    .huiyuan{
        margin-top: .6rem;
    }
    .dinta{
        width: 100%;
        position: fixed;
        top: 0;

    }
    .pp1{
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        line-height: .61rem;
        color: #faf9f7;
        background-color: #292826;
    }
    
    .huiyuan11{
        width: .41rem;
        height: .41rem;
        float: left;
        margin: 3px .05rem 0 6%;
        border-radius: 50%;
    }
    .huiyuan12{
        color:#cecdcb;
        font-size: 17px;
    }
    .huiyuan13{
        color:#777777;
        font-size: 14px;
        line-height: 26px;
    }
    .huiyuan2{
        width: 90%;
        height: 1.42rem;
        margin: 8px 5% 0.1rem;
    }
</style>

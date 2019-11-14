<!--
 * @Author: your name
 * @Date: 2019-11-09 17:43:44
 * @LastEditTime: 2019-11-14 10:51:10
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \第三阶段\work\meituanwaimai\src\components\jrtcTuijian.vue
 -->


<template>
    <div id="box">
        <div class="box2">
            <div>
                <p class="r1">今日套餐推荐</p>
                <span class="r2">60个 
                    <img class="r3" src="../assets/img/liebiaoyjt.png" alt="">
                </span>
            </div>
            <div class="bottom-meishi">
                <router-link to="/xiangqingye" class="fontsize" v-for="(tuijian,index) in tuijians" :key="index">
                    <div class="qwer">
                        <img :src="tuijian.img" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">{{tuijian.tuijian}}</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            {{tuijian.name}}
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥{{tuijian.xianjia}}</span>
                        <span class="ss2">￥{{tuijian.yuanjia}}</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <!-- <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜与面条的完美搭配，完美</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            四哥海鲜
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥99.9</span>
                        <span class="ss2">￥225.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">胖厨子美味烧烤一人份</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            胖厨子烧烤
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.90</span>
                        <span class="ss2">￥35.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tuijian1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">香辣鸡块豆角土豆焖面+孟妈妈特色面</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            孟妈妈特色焖面馆
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.47</span>
                        <span class="ss2">￥37.3</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜与面条的完美搭配，完美</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            四哥海鲜
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥99.9</span>
                        <span class="ss2">￥225.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">胖厨子美味烧烤一人份</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            胖厨子烧烤
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.90</span>
                        <span class="ss2">￥35.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tuijian1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">香辣鸡块豆角土豆焖面+孟妈妈特色面</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            孟妈妈特色焖面馆
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.47</span>
                        <span class="ss2">￥37.3</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜与面条的完美搭配，完美</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            四哥海鲜
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥99.9</span>
                        <span class="ss2">￥225.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">胖厨子美味烧烤一人份</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            胖厨子烧烤
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.90</span>
                        <span class="ss2">￥35.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tuijian1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">香辣鸡块豆角土豆焖面+孟妈妈特色面</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            孟妈妈特色焖面馆
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.47</span>
                        <span class="ss2">￥37.3</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜与面条的完美搭配，完美</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            四哥海鲜
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥99.9</span>
                        <span class="ss2">￥225.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">胖厨子美味烧烤一人份</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            胖厨子烧烤
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.90</span>
                        <span class="ss2">￥35.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tuijian1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">香辣鸡块豆角土豆焖面+孟妈妈特色面</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            孟妈妈特色焖面馆
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.47</span>
                        <span class="ss2">￥37.3</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui1.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">特色海鲜与面条的完美搭配，完美</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            四哥海鲜
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥99.9</span>
                        <span class="ss2">￥225.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui2.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">胖厨子美味烧烤一人份</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            胖厨子烧烤
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥19.90</span>
                        <span class="ss2">￥35.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link>
                <router-link to="/xiangqing" class="fontsize">
                    <div class="qwer">
                        <img src="../assets/img/tehui3.jpg" alt="">
                    </div>
                    <div class="last-qwer">
                        <p class="p2">一大碗排骨+一碗米饭</p>
                        <span>
                            <img src="../assets/img/dianbiao.png" alt="" class="tcdianbiao">
                            徐奶奶排骨
                        </span>
                        <br>
                        <span>实付：</span>
                        <span class="ss1">￥29.50</span>
                        <span class="ss2">￥5.55</span>
                         <router-link to="/xiadan">
                            <input type="button" value="下单" class="xiadan">
                        </router-link>
                    </div>
                </router-link> -->
            </div>
        </div>
        
    </div>  
</template>

<script>
export default {
  name: 'jrtcTuijian',
  data () {
    return {
       tuijians:[],
    }
  },
   
  created(){
    fetch(' /api/taocan')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.tuijians=data;
         console.log(this.tuijians)
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped>
    #box{
        width: 99%;
        float: right;
        margin-top: .1rem;
    }

   .r1{
       font-size: 19px;
       font-weight: 900;
       float: left;
       line-height: .46rem;
   }
   .r2{
       float: right;
       line-height: .46rem;
   }
   .r3{
       float: right;
       width: .1rem;
       margin-top:.14rem ;
       margin-left: .06rem;
       margin-right: .05rem;
   }
   .bottom-meishi{
       width: 100%;
       height: 2.5rem;
       display: flex;
       overflow-x: auto;
   }
   .qwer img{
       width: 100%;
       height: 1.47rem;
       border-radius: 10px;
   }
   .last-qwer{
       margin-left: .1rem;
   }
    .p2{
        font-size: 18px;
        font-weight: 900;
        line-height: .3rem;
        width: 2.25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .tcdianbiao{
        width: .16rem;
    }

    span{
        color: #939393;
        font-size: 16px;
    }
    .ss1{
        line-height: .4rem;
        margin-left: -0.14rem;
        color: red;
        font-size: .19rem;
        font-weight: 900;
    }
    .last-qwer{
        position: relative;
    }
    .ss2{
        font-size: 14px;
        text-decoration: line-through;
    }
    .xiadan{
        background: #fcc632;
        float: right;
        padding: 5px 10px;
        position: absolute;
        bottom:0.05rem;
        right: 0;
        border-radius: 5px;
        border: 0;
    }
    .fontsize{
        margin: 0 6px;
    }
</style>

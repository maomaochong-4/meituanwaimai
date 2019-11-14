<!--
 * @Author: your name
 * @Date: 2019-11-09 09:49:50
 * @LastEditTime: 2019-11-14 16:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Shoppingcar_top.vue
 -->
 <template>
    <div class="box">
        <div class="top">
            <i class="iconfont icon-back" @click="back()"></i>
            <span>购物车</span>
            <em>编辑</em>
            <em>取消</em>
        </div>
        <!-- 购物车列表 -->
        <ul class="zizixixi">
            <li class="goodsBox" v-for="(eat,index) in eats" :key="index">
                <div class="change">
                    <div class="radioBox">
                        <input type="checkbox" name="" class="allCheckBox"><label for="check1"></label>   
                    </div>
                    <div class="qingkuang">
                        <p class="dian">{{eat.dianming}}<i class="iconfont icon-jiantou"></i></p>
                        <p class="youhui">
                            <span>{{eat.youhui1}}</span>
                            <span>{{eat.youhui2}}</span>
                            <span>{{eat.youhui3}}</span>
                        </p>
                    </div>
                </div>
                <div class="goodslist">
                    <ul>
                        <li class="a1" >
                            <div class="isChack">
                                <input type="checkbox" name="" class="allCheckBox"><span></span>   
                            </div>
                            <div class="goodsImgBox">
                               <img :src="eat.img" alt="">
                            </div>
                            <div class="goodsInfoBox">
                                <div class="title">{{eat.title}}</div>
                                <p class="q1">x{{eat.count}}</p>
                                <div class="q2">
                                    <span class="market-price">￥{{eat.yuanjia}}</span>
                                    ￥<span class="price">{{eat.xianjia}}</span>    
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="p1">
                        <p class="q3">配送费</p>
                        <div class="q2 q22">
                            <span class="market-price">￥{{eat.yuanpeisong}}</span>
                             ￥<span class="price">{{eat.xianpeisong}}</span>   
                        </div>
                    </div>
                    <div class="p2">
                        <p class="a2">
                            <em>已优惠</em>￥<span>{{eat.zongyouhui}}</span>
                        </p>
                        <div class="q4">
                            <p class="q3l">￥<em>{{eat.zongji}}</em></p> 
                            <p class="q3r">￥<span>15起送</span></p> 
                        </div>
                    </div>
                </div>        
            </li>                                     
        </ul>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ShoppingCar',
  data () {
    return {
        eats:[],
        allcheck:false
    }
  },
  created() {
     axios.get('http://localhost:3000/cars')
     .then(res=>{
         let tempBooks = res.data;
         //给每个商品增加属性 isChecked
         for(let i in tempBooks){
             tempBooks[i].isChecked = false;
         }
         this.eats = tempBooks;
     })
     .catch(err=>{
         console.log(err);
     })
  },
  computed:{
      totalMoney:function () {          
          let money = 0;
          let isAllCheck = true;
          for(let i in this.books){
              if(this.books[i].isChecked){
                  money+=this.books[i].count*this.books[i].price;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          console.log(money);
          return money;
      }
  },
  methods:{
    back(){
        this.$router.go(-1);
    },
    checkall(){
    //   console.log(this.allcheck);
        console.log(event.target.checked);
        this.books.forEach(item=>{
            item.isChecked = event.target.checked;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 100%;
   min-height: 6.3rem;
    background: #f2f2f2;
    height: 100%;
    overflow: hidden;
}
.top{
  width: 100%;
  height: .51rem;
  line-height:.51rem;
  color: #666666;
  position: fixed;
  left:0;
  top:0;
  background: #fafafa;
}
.icon-back{
  font-size: .2rem;
  margin-left: 2%;
}
.top span{
  color: #333333;
  font-size:.16rem;
  padding-left: .1rem;
  border-left:1px solid #c4c4c4;
  margin-left: .12rem;
}
.top em{
  float:right;
  font-size: .14rem;
  margin-right: 2%;
}
.zizixixi{
    width: 96%;
    margin:.51rem auto 0;
}
.zizixixi li{
    width: 100%;
    display: block;
    padding: .1rem 0 0;
}
.change{
    height: .65rem;
    width: 100%;
    background: #fafafa;
    border-radius: 10px 10px 0 0;
}
.radioBox{
    margin-left: .12rem;
    float: left;
    margin-top: .25rem;
}
 input[type="checkbox"] {
    text-indent:0;
    margin: 0;
    width: .16rem;
    height: .16rem;
    text-align:center;
    display: inline-block;
    vertical-align: middle;
    line-height: .18rem;
    position: relative;
}
input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: -.022rem;
    left: -.0205rem;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border:2px solid #c6c6c6;
}
input[type="checkbox"]:checked::before {
    content: "\2713";
    background-color: #37b048;
    color: #fff;
    position: absolute;
    top: -.022rem;
    left: -.0205rem;
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    outline: none;
    border-color:#ccc;
    border:2px solid #c6c6c6;
    border-radius: 50%;
}
.qingkuang{
    height:.65rem;
    float: left;
    margin: .1rem .1rem;
    line-height: .22rem;
}
.dian{
    color: #333333;
    font-size: .14rem;
    /* margin-bottom: .07rem; */
}
.icon-jiantou{
    color: #737a77;
    font-size: .1rem;
    margin-left: .08rem;
}
.youhui span{
    border: 2px solid #fdc9c6;
    padding: 0 .05rem;
    font-size: .11rem;
    color: #fb645b;
    border-radius: 3px;
}
.goodslist{
    border-radius:0 0 10px 10px;
    background: #ffffff;
}
.a1{
    height: .82rem;
}
.isChack{
    /* display: inline-block; */
    clear: both;
    float: left;
    margin-left: .12rem;
    margin-top: .24rem;
}
.goodsImgBox{
    /* display: inline-block; */
    float: left;
   width: .62rem;
   height:.62rem;
   border:2px solid #f2f1f0;
    border-radius: 4px;
    margin: 0 .1rem;
    /* clear: both; */
}
.goodsImgBox img{
    width: 100%;
    height: 100%;
    border-radius: 4px;   
}
.market-price{
    margin-left: .06rem;
    color: #999999;
    font-size: .08rem;
    text-decoration: line-through;
}
.price{
    font-size:.11rem;
}
.title{
    /* height: 40px; */
    width: 62%;
   white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
    font-size: .14rem;
    color: #333333;
    margin-bottom: .3rem;
} 
.q1{
    font-size: .11rem;
    color:#999999;
    float: left;
}
.q2{
    float: right;
    margin-right:3%;
}
.q3{
    float: left;
    font-size: .13rem;
    color: #333333;
}
.q22{
    margin:0;
}
.p1{
    width:84%;
    height: .37rem; 
    border-bottom: 1px solid #e4e4e4;
    line-height: .37rem;
    margin-left: 13%;
    margin-right:3%;
}
.p2{
    width:87%;
    height: .55rem;
    line-height: .55rem;
    margin-left: 13%; 
}
.a2{
    float: left;
    font-size: .13rem;
    color: #fb4e44;
}
.a2 em{
    color: #333333;
}
.q4{
    float: right;
    text-align: center;
    margin-top: .15rem;
    line-height: .34rem;
    margin-right: .12rem;
}
.q3l{
    float: left;
    width: .45rem;
    height:.34rem; 
    background: #fff6df;
    border-radius: .2rem 0 0 .2rem;
    color: #fb4e44;
    font-size: .14rem;
}
.q3r{
    float: left;
    width: .78rem;
    height: .34rem;
    background: #cccccc;
    font-size: .12rem;
    color: white;
    border-radius: 0 .2rem .2rem 0;
}
</style>

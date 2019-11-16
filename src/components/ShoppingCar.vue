<!--
 * @Author: your name
 * @Date: 2019-11-09 09:49:50
 * @LastEditTime: 2019-11-16 08:55:52
 * @LastEditors: 郭涛
 * @Description: In User Settings Edit
 * @FilePath: \third-staged:\ruanjian\work\meituanwaimai\src\components\Shoppingcar_top.vue
 -->
 <template>
    <div class="box">
        <div class="top">
            <i class="iconfont icon-back" @click="back()"></i>
            <span >购物车</span>
            <em v-if="cartStatus=='account'" @click="cartStatus='edit'">编辑</em>
            <em v-if="cartStatus=='edit'" @click="cartStatus='account'">取消</em>
        </div>
        <!-- 购物车列表 -->
        <div class="shop">
            <ul class="zizixixi">
                <li class="goodsBox">
                    <div class="change">
                        <!-- <div class="radioBox">
                            <input type="checkbox" class="allCheckBox">   
                        </div> -->
                        <div class="qingkuang">
                            <p class="dian">东北巴福水饺（高新店）<i class="iconfont icon-jiantou"></i></p>
                            <p class="youhui">
                                <span>15减12</span>
                                <span>30减20</span>
                                <span>45减21</span>
                            </p>
                        </div>
                    </div>
                    <div class="goodslist">
                        <ul>
                            <li class="a1">
                                <div class="isChack">
                                    <input type="checkbox" class="allCheckBox"><span></span>   
                                </div>
                                <div class="goodsImgBox">
                                <img src="../assets/img/pic1.jpg" alt="">
                                </div>
                                <div class="goodsInfoBox">
                                    <div class="title">优质蔬菜混合大甩卖优惠多的数不过来！</div>
                                    <p class="q1">x1</p>
                                    <div class="q2">
                                        <span class="market-price">￥29.9</span>
                                        ￥<span class="price">13.9</span>    
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="p1">
                            <p class="q3">配送费</p>
                            <div class="q2 q22">
                                <span class="market-price">￥3.5</span>
                                ￥<span class="price">1</span>   
                            </div>
                        </div>
                        <div class="p2">
                            <p class="a2">
                                <em>已优惠</em>￥<span>3</span>
                            </p>
                            <div class="q4">
                                <router-link to="/jiesuanyemian"> 
                                <p class="q3l">￥<em>0</em></p>
                                    <p class="q3r"><span>去结算</span></p> 
                                </router-link>
                            </div>
                        </div>
                    </div>        
                </li>                                     
            </ul>
        </div>
        <div class="edit" v-if="cartStatus=='edit'">
            <div class="radioBox1">
                <input type="checkbox" name="" class="allCheckBox">   
            </div>
            <span class="quanxuan">全选</span>
            <span class="delate">删除</span>
        </div>
        <div class="gotopay" v-if="cartStatus=='account'">
            <div class="radioBox1">
                <input type="checkbox" class="allCheckBox">   
            </div>
            <span class="quanxuan">全选</span>
            <div class="jiesuan">
                <router-link to="/jiesuanyemian">
                    <span class="jie1">一键结算</span>
                    <em class="jie2">0个商家</em> 
                </router-link>
                
            </div>
            <div class="jia">
                <p><span class="jia1">合计</span>￥<em>0</em></p>
                <p><span class="jia2">总优惠</span>￥<em>0</em></p>
            </div>
        </div>    
    </div>
</template>

<script>

// import axios from 'axios';
// import { Toast } from 'mint-ui';
export default {
  name: 'ShoppingCar',
  data () {   
     return{
        cartStatus:"account",
        checkedAll: false,
    }
  },

   methods: { 
       back(){
                this.$router.go(-1);
             },
        //全选
        checkAll() {
            this.data.forEach(item => {
                item.checked = this.checkedAll;
                if (item.goodsList) {
                    item.goodsList.forEach(citem => {
                        citem.checked = this.checkedAll;
                    })
                }
            })
        },
        //商家全选
        _checkAll(val, k) {
            val.goodsList.forEach(item => {
                item.checked = val.checked;
            });
            if (this.data.every(item => item.checked)) {
                this.checkedAll = true;
            } else {
                this.checkedAll = false;
            }

        },
        //商品选择框
        handleCheck(item, index) {
            var check = []; //保存中间层是否被选中的布尔值
            this.data.forEach((items, index) => {
                if (items.goodsList) {
                    var bool = items.goodsList.every(citem => citem.checked);
                    if (bool) {
                        items.checked = true;
                    } else {
                        items.checked = false;
                    }
                    check.push(bool);
                }
            })
            if (check.indexOf(false) == -1) {
                this.checkedAll = true;
            } else {
                this.checkedAll = false;
            }
        },
        
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
  z-index: 1
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
    margin:.51rem auto .45rem;
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
.radioBox1{
    margin:.13rem 2% 0;
    float: left;
}
 input[type="checkbox"] {
    text-indent:0;
    margin: 0;
    width: .16rem;
    height: .16rem;
    text-align:center;
    display: inline-block;
    vertical-align: middle;
    line-height: .16rem;
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
    background-color: #fca70a;
    color: #333333;
    position: absolute;
    top: -.022rem;
    left: -.0205rem;
    width: 100%;
    font-size: 14px;
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
    padding:0 .1rem;
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
    background: #fca70a;
    font-size: .12rem;
    color: white;
    border-radius: 0 .2rem .2rem 0;
}
.gotopay{
  width: 100%;
  height: .42rem;
  /* line-height: .42rem; */
  color: #666666;
  position: fixed;
  left:0;
  bottom:0;
  background: #ffffff;
  border-top: 2px solid #f4f4f4;
  z-index: 1; 
}
.edit{
    width: 100%;
    height: .45rem;
    color: #666666;
    position: fixed;
    left:0;
    bottom:0;
    background: #ffffff;
    border-top: 2px solid #f4f4f4;
    z-index: 1; 
}
/* input{
    width: .18rem;
    height: .18rem;
    margin:0 2%;
    float: left;
    margin-top: .13rem;
} */
.quanxuan{
    font-size: .16rem;
    color: #333333;
    float: left;
    margin-top: .13rem;
}
.jiesuan{
    width: 1.06rem;
    height: .42rem;
    background: #fca70a;
    float: right;
   border-radius: .21rem;
   margin:0 2%;
   color: #333333;
   text-align: center;
}
.delate{
    height: .3rem;
    width: .8rem;
    float: right;
    margin:0 2%;
    background: #fb4e44;
    color:#fff;
    line-height: .3rem;
    text-align: center;
    margin-top: .07rem;
    border-radius: .15rem;  
}
.jie1{
    display: block;
    font-size: .14rem;
    margin-top: .04rem;
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

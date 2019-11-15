/*
 * @Author: CoolWind
 * @Date: 2019-11-07 19:29:59
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-15 14:25:53
 * @Description: 
 */
import Vue from 'vue'
import VueX from 'vueX'


Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        footerCls: [
            true,
            false,
            false,
            false
        ]
    },
    mutations: {//跟踪状态
        changeFooterCls(state,index){
            // 合法性判断
            if(index<0 || index>state.footerCls.length-1){
                return;
            }
            state.footerCls.forEach((item,index,arr)=>{
                arr[index] = false;
            });
            state.footerCls[index] = true;
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations

    }
})

<template>
   <div class="notice">
      <div class="banxin" style="height: 240px">
         <h4 class="notice-title" :style="img1">
             <a href="#">{{notice.info}}</a>
             <span>{{notice.time}}</span><more></more></i>
         </h4>
         <ul class="info">
            <li class="info1" :style="icon1">
               <h2>投资理财低门槛</h2>
               <p>50元起步，17%年化收益</p>
            </li>
            <li class="info2" :style="icon2">
                <h2>融资借款 方便快捷</h2>
                <p>专注于抵押，快速解决资金需求</p>
            </li>
            <li class="info3" :style="icon3">
                <h2>资金安全保障</h2>
                <p>风险备用金计划，全额本息垫付</p>
            </li>
            <li class="info4" :style="icon4">
               <h2>4年运营品质</h2>
               <p>数万用户的共同选择</p>
            </li>
         </ul>
         <ul class="tot">
            <li>累计注册数：<span>{{notice.regNum}}人</span></li>
            <li>累计成交额：<span>{{notice.turnover}}元</span></li>
            <li>已运营里程：<span>{{notice.mileage}}</span></li>
                <li class="more">经营数据实时同步网贷第三方<span>更多数据</span></li>
         </ul>
      </div>
   </div>
</template>

<script>
// 引入More组件
import More from '../More/More'
import {mapState,mapGetters} from 'vuex'
export default {
   computed:{
      ...mapState(['notice']),
      ...mapGetters(['newTurnover'])
   },
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/laba.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center left"
         },
         icon1: {
            backgroundImage: "url(" + require("../../../static/images/info1.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "15px center"
         },
         icon2: {
            backgroundImage: "url(" + require("../../../static/images/info2.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "15px center"
         },
         icon3: {
            backgroundImage: "url(" + require("../../../static/images/info3.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "15px center"
         },
         icon4: {
            backgroundImage: "url(" + require("../../../static/images/info4.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "15px center"
         }
      }
   },
   components: {
      More
   }
}
</script>

<style lang="less" scoped>
   .notice {
      width: 100%;
      height: 240px;
      background: #fff;

      .notice-title {
         height: 50px;
         line-height: 50px;
         border-bottom: 1px solid #F6F7FA;
         text-indent: 25px;
         font-size: 14px;
         position: relative;
         // background: url(../images/laba.png) no-repeat center left;
         span {
            padding-left: 20px;
            vertical-align: -1px;
            cursor: pointer;
         }
         i {
            display: inline-block;
            font-style: normal;
            position: absolute;
            right: 0px;
            top: 0px;
            padding-right: 20px;
            // background: url(../images/gd.png) no-repeat center right;
            cursor: pointer;
         }
      }

      .info {
         height: 135px;
         border-bottom: 1px solid #F6F7FA;
         li {
            height: 135px;
            float: left;
            width: 195px;
            padding-left: 105px;
            h2 {color: #444;font-size: 16px;padding: 45px 0 5px;}
            p {font-size: 13px;}
         }
      } 

      .tot {
         height: 53px;
         line-height: 53px;
         font-size: 14px;
         li {
            float: left;
            padding-right: 150px;
            span {
               color: #FF6662;
            }
            &.more {
               padding: 0px;
               font-size: 13px;
               span {
                  border: 1px solid #FF6662;
                  padding: 1px 4px;
                  font-size: 13px;
                  border-radius: 5px;
                  margin-left: 5px;
                  cursor: pointer;
               }
            }
         }
      }
   }
</style>
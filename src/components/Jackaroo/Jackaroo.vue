<template>
    <div class="jackaroo banxin">
       <div class="red-packet left" :style="img1">
          <h2><a href="#">新手专享</a></h2>
          <p><a href="#"><span>280</span>元专享红包+<span>10</span>元话费</a></p>
      </div>
      <div class="item left">
         <h1 class="item-title">新手项目 <strong><a href="#">每周二、周五更新。什么是新手？</a></strong></h1>
         <ul>
            <li class="item1">
               <h1>{{jackaroo.interest}}<span>%</span></h1>
               <p>预期年化</p>
            </li>
            <li class="item2">
               <h1>{{jackaroo.cycle}}<span>个月</span></h1>
               <p>投资期限</p>
            </li>
            <li class="item3">
               <h1>{{jackaroo.money}}元</h1>
               <p>借款金额</p>
            </li>
            <li class="item4">
                <p id="jackaroo">
                    <i></i><em :style="{width: progress}"></em>
                    <b>{{jackaroo.percentage}}%</b>
                </p>
               <button>{{jackaroo.res}}</button>
            </li>
         </ul>
      </div>
      <div class="help left" :style="img2">
         <h2><a href="#">帮助中心</a></h2>
         <p><a href="#"><span>30</span>分钟让您了解晋商金服</a></p>
      </div>
   </div>
</template>

<script>

import {mapState,mapGetters} from 'vuex'

export default {
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/hb.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom"
         },
         img2: {
            backgroundImage: "url(" + require("../../../static/images/help.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom"
         }
      }
   },
   computed: {
      ...mapState(['jackaroo']),
      ...mapGetters(['progress'])
   }
}
</script>

<style lang="less" scoped>
   .jackaroo {
      height: 222px;
      margin-top: 40px;
      overflow: hidden;
      .red-packet {
         // background: url(../images/hb.png) no-repeat center bottom;
         background-color: #fff;
         text-align: center;
         cursor: pointer;
      }
      .item {
         width: 560px;
         padding-left: 30px;
         .item-title {
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 18px;
            color: #444;
            a {
               color: #CECECE;
            }
            strong {
               font-size: 14px;
               margin-left: 10px;
            }
         }
         ul {
            overflow: hidden;
            li {
               float: left;
               width: 110px;
               height: 142px;
               &.item1 {
                  margin-right: 25px;
                  text-align: center;
                  h1 {
                     font-size: 45px;
                     text-align: center;
                     color: #FF6561;
                  }
                  span {
                     font-size: 16px;
                  }
                  p {
                     color: #9E9E9E;
                  }
               }
               &.item2 {
                  width: 100px;
                  text-align: center;
                  span {
                     font-size: 16px;
                     color: #444;
                     margin-left: 1px;
                  }
                  h1 {
                     font-size: 45px;
                     text-align: left;
                     color: #444;
                  }
                  p {
                     color: #9E9E9E;
                     text-align: left;
                     text-indent: 4px;
                  }
               }
               &.item3 {
                  margin-right: 25px;
                  text-align: center;
                  span {
                     font-size: 16px;
                  }
                  h1 {
                     font-size: 20px;
                     height: 60px;
                     line-height: 60px;
                     color: #444;
                  }
                  p {
                     color: #9E9E9E;
                  }
               }
               &.item4 {
                  width: 180px;
                  p {
                     width: 180px;
                     height: 39px;
                     line-height: 32px;
                     color: #888;
                     position: relative;
                     i {
                        width: 100px;
                        height: 10px;
                        background: #EEEEF4;
                        vertical-align: 1px;
                        margin-right: 8px;
                        border-radius: 10px;
                        position: absolute;
                        left: 0px;
                        top: 11px;
                     }
                     em {
                        position: absolute;
                        height: 10px;
                        background: #61CDFF;
                        border-radius: 10px;
                        left: 0px;
                        top: 11px;
                     }
                     b {
                        position: absolute;
                        left: 110px;
                        top: 0px;
                     }
                  }
                  button {
                     width: 125px;
                     height: 41px;
                     background: #61CDFF;
                     color: #fff;
                     text-align: center;
                     line-height: 41px;
                     border: none;
                     outline: none;
                      border-radius: 5px;
                      font-size: 16px;
                      cursor: pointer;
                  }
               }
            }
         }
      }
      .help {
         margin: 0;
         text-align: center;
         // background: url(../images/help.png) no-repeat center bottom;
         background-color: #fff;
         cursor: pointer;
      }
   }
   .jackaroo>div {
      width: 285px;
      height: 222px;
      background: #fff;
      margin-right: 20px;
      span {
         color: #F6615D;
      }
      h2 {
         font-size: 21px;
         line-height: 40px;
         padding-top: 16px;
      }     
      p {
         font-size: 16px;
      }
   }
</style>
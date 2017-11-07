<template>
	<div class="footer">
      <div class="banxin" style="overflow: hidden">
         <div class="left">
            <h1><a href="#">帮助中心</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">关于我们</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">安全保障</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">新手指引</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">联系我们</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">团队管理</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="#">公司资质</a></h1>
            <p>版权所有： @ 2017-2022 All rights reversevred 晋商金服</p>
            <p>IPC备案证书号：浙IPC备12034273号 增值电音业务经营许可证：浙B2-20130260</p>
            <p>
               <span><img src="../../../static/images/aqlm.png"></span>&nbsp;安全联盟
               <span><img src="../../../static/images/gongan.png"></span>
                浙公网安备 33030202000299 &nbsp;&nbsp;&nbsp;
                <strong style="color: #A6A6A6;">温馨提示： 投资有风险 理财需谨慎</strong></p>
         </div>
         <div class="right">
            <h2 class="left">
                <img src="../../../static/images/w1.png" alt="">
                <p>微信公众号</p>
            </h2>
            <h2 class="left">
               <img src="../../../static/images/w2.png" alt="">
               <p>手机APP</p>
            </h2>
            <div class="right">
               <p class="first">400-0577-700</p>
               <p class="time">工作时间：9：00-21：30</p>
               <p class="tishi">周日及节假日晚上无客服值班</p>
               <p class="address">中国.浙江省温州市六虹桥路钢材市场B幢5楼</p>
            </div>
         </div>
      </div>
      <div class="trademark" :style="img1"></div>
   </div>
</template>

<script>
export default {
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/di.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
         }
      }
   }
}
</script>


<style lang="less" scoped>
   .footer {
      width: 100%;
      height: 235px;
      padding-top: 35px;
      background: #fff;
      .trademark {
         width: 100%;
         height: 110px;
      }
      .left {
         width: 735px;
         height: 120px;
      }
      .right {
         width: 465px;
         height: 120px;   
         h2{
            width: 85px;
            height: 100px;
            margin-top: 3px;
            text-align: center;
            margin-right: 20px; 
            p{
               font-size: 14px;
               padding-top: 8px;
               color: #A6A6A6;
            }
         }
         div {
            width: 245px;
            height: 110px;
         }
         div .first {
            font-size: 24px;
            color: #FF6561;
            padding-bottom: 15px;
         }
         div .time {
            font-size: 13px;
            line-height: 16px;
            color: #A6A6A6;
         }
         div.footer .right div .tishi {
            font-size: 13px;
            color: #A6A6A6;
         }
         div.footer .right div .address {
            line-height: 35px;
         }
      }
      h1 {
         font-size: 14px;
         padding-bottom: 20px;
      }
      h1 a {color: #bbb;}
      p {
         color: #C6C6C6;
         font-size: 12px;
         line-height: 24px;
      }
      span {
         width: 24px;
         height: 23px;
         display: inline-block;
         vertical-align: 0px;
      }
   }
</style>
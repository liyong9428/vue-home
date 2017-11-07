<template>
   <div class="more">
       <span :style="img1">更多</span>
   </div>
</template>

<script>
export default {
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/gd.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px"
         }
      }
   }
}
</script>

<style lang="less" scoped>
   span {
      font-size: 14px;
      position: absolute;
      right: 0px;
      top: 0px;
      color: #C6C6C6;
      // background: url(../images/gd.png) no-repeat right 17px;
      margin-right: 15px;
      padding-right: 20px;
      cursor: pointer;
   }
</style>
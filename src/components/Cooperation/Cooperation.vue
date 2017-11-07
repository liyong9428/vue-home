<template>
   <div class="cooperation banxin">
      <ul>
         <li class="title">{{cooperation.title}}</li>
         <li class="brand1"><img src="../../../static/images/brand1.png"></li>
         <li class="brand1"><img src="../../../static/images/brand2.png"></li>
         <li class="brand1"><img src="../../../static/images/brand3.png"></li>
         <li class="brand1"><img src="../../../static/images/brand4.png"></li>
         <li class="brand1"><img src="../../../static/images/brand5.png"></li>
         <li class="brand1"><img src="../../../static/images/brand6.png"></li>
         <li class="brand1"><img src="../../../static/images/brand7.png"></li>
         <li class="brand1"><img src="../../../static/images/brand8.png"></li>
         <li class="brand1"><img src="../../../static/images/brand9.png"></li>
      </ul>
   </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
   data(){
      return {
      }
   },
   computed: {
      ...mapState(['cooperation'])
   }
}
</script>

<style lang="less" scoped>
   .cooperation {
      height: 90px;
      background: #fff;
      margin: 40px auto;
      line-height: 90px;
      font-size: 18px;
      overflow: hidden;
      li.title {line-height: 40px;text-align: center;}
      li {
         float: left;
         width: 110px;
         height: 40px;
         margin-top: 25px;
         margin-right: 10px;
         cursor: pointer;
      }
   }
</style>
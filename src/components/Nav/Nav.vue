<template>
	<div class="nav">
      <div class="banxin">
         <h1 class="left"><a href="index.html"><img src="../../../static/images/logo.png"></a></h1>
         <ul class="right">
            <li v-for="item in nav.list"><a href="#">{{item.name}}</a></li>
            <li class="login" :style="img1">
               <a href="#">登陆</a> /
               <a href="#">注册</a>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/login.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 28px"
         }
      }
   },
   computed: {
      ...mapState(['nav'])
   }
}
</script>


<style lang="less" scoped>
   .nav {
      width: 100%;
      height: 80px;
      background: #fff;
      line-height: 80px;
      img {
         vertical-align: middle;
      }
      ul {
         height: 80px;
         line-height: 80px;
         li {
            float: left;
            padding: 0 19px;
            text-align: center;
            color: #FF6662;
            font-size: 16px;
         }
         a {
            color: #5A5452;
            &:hover {
               color: #FF6662;
            }
         }
         .login {
            padding-right: 0;
            padding-left: 30px;
            margin-left: 10px;

         }
         .login a {
            color: #FF6662;
         }
      }
   }
</style>
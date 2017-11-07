<template>
   <div class="news banxin">
       <div class="left">
       <h2 class="news-title">{{news.notice.name}}<more></more></h2>
         <div class="content">
            <div class="img left"><img src="../../../static/images/news.png"></div>
            <ul class="list left">
               <li :style="img1" v-for="item in news.notice.list">
                  <h5>{{item.time}}</h5>
                  <p><a href="#">{{item.title}}</a></p>
               </li>
            </ul>
         </div>
       </div>
       <div class="right">
         <h2 class="news-title">{{news.report.name}}<more></more></h2>
         <div class="content">
            <div class="img left"><img src="../../../static/images/baodao.png"></div>
            <ul class="list left">
               <li :style="img1" v-for="itemh in news.report.list">
                  <h3>{{itemh.title}}</h3>
                  <p><a href="#">{{itemh.content}}</a></p>
               </li>
            </ul>
         </div>
       </div>
   </div>
</template>

<script>
// 引入more组件
import More from '../More/More'
import {mapState} from 'vuex'
export default {
   data(){
      return {
         img1: {
            backgroundImage: "url(" + require("../../../static/images/red.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left 2px"
         }
      }
   },
   components: {
      More  
   },
   computed: {
      ...mapState(['news'])
   }
}
</script>

<style lang="less" scoped>
   .news {
      height: 280px;
      margin-top: 40px;
      .left h5 {
         font-size: 13px;
         padding-bottom: 5px;
      }
      .left p {
         font-size: 14px;
         padding-bottom: 16px;
         a {
            color: #adadad;
         }
      }
      .right h3 {
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
         font-size: 14px;
         color: #555;
         padding-bottom: 5px;
      }
      .right p {
         font-size: 13px;
         padding-bottom: 20px;
         a {
            color: #adadad;
         }
      }
   }
   .news>div {
      width: 580px;
      height: 280px;
      background: #fff;
      .news-title {
         width: 100%;
         height: 52px;
         border-bottom: 1px solid #F5F6FA;
         font-size: 18px;
         line-height: 52px;
         text-indent: 20px;
         color: #444;
         position: relative;
         
      }
      .content {
         padding: 30px 0 0 25px;
         li {
            // background: url(../images/red.png) no-repeat left 2px;
            padding-left: 15px;
            margin-left: 5px;
            width: 260px;
         }
      }
   }
</style>
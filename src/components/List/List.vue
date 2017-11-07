<template>
   <div class="list banxin">
      <h1 class="list-title">
         <ul>
            <li v-for="item in list.item" @click="current=item.title" :class="{on: current==item.title}">{{item.name}}({{item.content.length}})</li>
         </ul>
      </h1>
      <listdetail v-for="item in list.item" :content="item.content" :class="{on: current==item.title}"></listdetail>
   </div>
</template>

<script>

import {mapState} from 'vuex' 
// 引入Listdetail组件
import Listdetail from '../Listdetail/Listdetail'

export default {
   data(){
      return {
         current: 'one'
      }
   },
   components: {
      Listdetail
   },
   computed: {
      ...mapState(['list'])
   },
   methods: {
      toggle(item){
         console.info(item);
      }
   }
}
</script>

<style lang="less" scoped>
   .list {
      overflow: hidden;
      margin-top: 40px;
      .list-title {
         width: 740px;
         height: 65px;
         margin: 0 auto;
         cursor: pointer;
         li {
            float: left;
            width: 170px;
            height: 65px;
            text-align: center;
            line-height: 65px;
            background: #e3e3e3;
            font-size: 17px;
            margin-right: 20px;
            border-radius: 10px 10px 0px 0px;
            a {
               display: inline-block;
               color: #a6a6a6;
               border-radius: 10px 10px 0px 0px;
               width: 170px;
               height: 65px; 
            }
            &.on {
               background: #FF6561;
               color: #fff;
            }
            &:last-child {
               margin: 0
            }
         }
      }
      .list-inner table {
         width: 1200px;
         background: #fff;
         tr {
            height: 80px;
            border-bottom: 1px solid #F5F6FA;
            td {
               text-align: center;
               span {
                  font-size: 20px;
                  color: #FF7874;
               }
               i {
                   font-size: 14px;
                   color: #FF7874;
                   font-style: normal;
               }
               &.pos {
                  position: relative;
                  i {
                     width: 100px;
                     height: 6px;
                     background: #EEEEF4;
                     vertical-align: 1px;
                     margin-right: 8px;
                     border-radius: 10px;
                     position: absolute;
                     left: 20px;
                     top: 38px;
                  }
                  em {
                     position: absolute;
                     width: 100px;
                     height: 6px;
                     background: #61CDFF;
                     border-radius: 10px;
                     left: 20px;
                     top: 38px;
                  }
                  b {
                     position: absolute;
                     left: 125px;
                     top: 30px;
                  }
               }
               button{
                  width: 160px;
                  height: 35px;
                  background: #61CDFF;
                  color: #fff;
                  text-align: center;
                  line-height: 35px;
                  border: none;
                  outline: none;
                  border-radius: 5px;
                  font-size: 14px;
                  cursor: pointer;
               }
            }
         }
      }
   }
</style>
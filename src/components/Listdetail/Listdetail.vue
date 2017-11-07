<template>
   <div>
      <table>
         <tr v-for="item in content">
            <td width="255">{{item.title}}</td>
            <td width="195">预期年化<span>{{item.interest}}</span><i>%</i></td>
            <td width="215">借款金额：{{item.money}}元</td>
            <td width="125">期限：{{item.cycle}}个月</td>
            <td class="pos" width="187"><i></i><em :style="{width: Math.round(item.percentage)+'px'}"></em><b>{{item.percentage}}%</b></td>
            <td width="220"><button :class="{on: item.percentage==100}">{{item.res}}</button></td>

         </tr>
      </table>
   </div>
</template>

<script>
export default {
   data(){
      return {}
   },
   props: {
      content: {
         type: Array,
         require: true,
         default: []
      }
   }
}
</script>

<style lang="less" scoped>
div {
   display: none;
   &.on {
      display: block;
   }
   table {
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
               &.on {
                  background: #E3E3E3
               }
            }
         }
      }
   }
}
</style>
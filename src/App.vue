<template>
   <div id="app">
      <app-top></app-top>
      <app-nav></app-nav>
      <app-swipe></app-swipe>
      <app-notice></app-notice>
      <app-jackaroo></app-jackaroo>
      <app-list></app-list>
      <app-news></app-news>
      <app-cooperation ></app-cooperation>
      <app-footer></app-footer>
   </div>
</template>

<script>
// 引入Top组件
import Top from './components/Top/Top'
// 引入Nav组件
import Nav from './components/Nav/Nav'
// 引入Swipe组件
import Swipe from './components/Swipe/Swipe'
// 引入Notice组件
import Notice from './components/Notice/Notice'
// 引入Jackaroo组件
import Jackaroo from './components/Jackaroo/Jackaroo'
// 引入List组件
import List from './components/List/List'
// 引入News组件
import News from './components/News/News'
// 引入Cooperation组件
import Cooperation from './components/Cooperation/Cooperation'
// 引入Footer组件
import Footer from './components/Footer/Footer'


export default {
   name: 'app',
   components: {
      "app-top": Top,        // Top组件
      "app-nav": Nav,        // Nav组件
      "app-swipe": Swipe,    // Swipe组件
      "app-notice": Notice,  // Notice组件
      "app-jackaroo": Jackaroo,   // Jackaroo组件
      "app-list": List,      // List组件
      "app-news": News,      // News组件
      "app-cooperation": Cooperation,  // Cooperation组件
      "app-footer": Footer   // Footer组件
   }
}
</script>

<style scoped>

</style>

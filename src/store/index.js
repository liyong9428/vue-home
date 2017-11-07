import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入各个状态模块
import cooperation from './modules/cooperation'
import news from './modules/news'
import nav from './modules/nav'
import notice from './modules/notice'
import jackaroo from './modules/jackaroo'
import list from './modules/list'
import swipe from './modules/swipe'

// 引入getters、mutation、actions模块
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 定义state
const state = {
	h: ""
}


// 实例化store
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		cooperation,
		news,
		nav,
		notice,
		jackaroo,
		list,
		swipe
	}
})
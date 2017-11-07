const state = {
   interest: 13.8,
   cycle: 1,
   money: 50,
   percentage: 28.5,
   res: "正在招标"
}

const getters = {
	progress(state){
       return Math.round(state.percentage)+"px";
	}
}
const mutations = {}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
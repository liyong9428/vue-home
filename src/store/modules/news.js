const state = {
	notice: {
		name: "官方公告",
        img: "https://ly809652226.github.io/test/images/news.png",
        list: [
            {
            	time: "2017年04月18日",
                title: "关于调整红包使用规则的公告"
            },
            {
            	time: "2017年06月21日",
                title: "关于周日素质拓展的安排公告"
            },
            {
            	time: "2016年08月30日",
                title: "关于2016年国庆节放假值班等安排的公告"
            } 
        ]
	},
	report: {
		name: "媒体报道",
        img: "https://ly809652226.github.io/test/images/baodao.png",
        list: [
            {
                title: "网贷联姻资本市场 挂牌前海股权交易中心",
                content: "2017年6月4日下午，中国互联网金融协会会员单位、网贷P2P平台乐金所在深圳前海股权"
            },
            {
                title: "互联网巨头牵手银行的背后或重新寻找定位",
                content: "值得注意的是，近期银行和互联网巨头密集签约的战略合作协议都不是排他性合作"
            }
        ]
	}
}

const getters = {}
const mutations = {}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
import listAction from '../actions/listAction'
import listMutation from '../mutations/listMutation'
import listGetter from '../getters/listGetter'

export default {
	state: {
		tableList: [],
		wait: false,
		searchInfo: '',
		totalCount: 100, //page的配置参数
		limit: 10 //page的配置参数
	},
	getters: listGetter,
	mutations: listMutation,
	actions: listAction
}
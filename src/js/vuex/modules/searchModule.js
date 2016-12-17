import searchAction from '../actions/searchAction'
import searchMutation from '../mutations/searchMutation'
import searchGetter from '../getters/searchGetter'

export default {
	state: {
		ProjectName: 'wang wang xiang',
		BeginDate: 1480557886049,
		EndDate: 1480557886049,
		PrincipalName: '',
		selectedProvince: '00', //选中的省
		selectedCity: '0000', //选中的市
		selectedDistrict: '000000', //选中的县
		Provinces: [], //所有的省
		Citys: [], //当前省下的市
		Districts: [], //当前市下的县
		AreaCode: ''
	},
	getters: searchGetter,
	mutations: searchMutation,
	actions: searchAction
}
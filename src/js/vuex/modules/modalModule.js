import modalAction from '../actions/modalAction'
import modalMutation from '../mutations/modalMutation'
import modalGetter from '../getters/modalGetter'

export default {
	state: {
		isView: false,
		poerWait: false,
		poerSearchInfo: '',
		priceWait: false,
		priceSearchInfo: '',
		UserName: '',
		projectName: '',
		poerList: [],
		priceList: [],
		uploadState: '',
		uploadInfo: ''
	},
	getters: modalGetter,
	mutations: modalMutation,
	actions: modalAction
}
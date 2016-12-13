import router from '../router/router'
const poreditStore = {
	state: {
		poerList: []
	},
	getters: {
		poerList: state => {
			return state.poerList;
		}
	},
	mutations: {
		modalOpen(state) {
			$('#vue_dialog').modal('show');
		},
		modalClose(state) {
			$('#vue_dialog').modal('hide');
			state.poerList = [];
		},
		closePricePage(state) {
			router.go({name: 'poer'});
		},
		poerPageInit(state) {
			$.ajax({
				url: '/api/Promoter/GetListByProject',
				dataType: 'json',
				type: 'get',
				data: {},
				cache: false,
				success: function(res){
					state.poerList = res.Data;
				}
			})
			router.go({name: 'poer'});
		},
		pricePageInit(state, item) {
			console.log(item.UserName, item.UserID);
			router.go({name: 'price'});
		}
	},
	actions: {
		porEdit({commit}) {
			commit('modalOpen');
			commit('poerPageInit');
		},
		porBusinessEdit({commit}, item) {
			commit('pricePageInit', item);
		},
		addPrice({commit}) {},
		submit({commit}) {},
		closePricePage({commit}) {
			commit('closePricePage')
		},
		modalClose({commit}) {
			commit('modalClose');
		}
	}
}
export default poreditStore;
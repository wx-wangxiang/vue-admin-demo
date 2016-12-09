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
		},
		pricePageInit(state, item) {
			console.log(item.UserName, item.UserID);
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
		modalClose({commit}) {
			commit('modalClose');
		}
	}
}
export default poreditStore;
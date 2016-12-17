const listStore = {
	state: {
		tableList: [],
		wait: false,
		searchInfo: '',
		totalCount: 100, //page的配置参数
		limit: 10 //page的配置参数
	},
	getters: {
		tableList: state => {
			return state.tableList;
		},
		wait: state => {
			return state.wait;
		},
		searchInfo: state => {
			return state.searchInfo;
		}
	},
	mutations: {
		getData(state, data) {
			state.searchInfo = "";
			state.tableList = [];
			state.wait = true;
			$.ajax({
				url: '/api/BusiMultisend/GetList',
				data: {},
				dataType: 'json',
				type: 'get',
				cache: false,
				success: function(res) {
					state.wait = false;
					state.tableList = res.Data.List;
					if(res.Data.List.length === 0){
						state.searchInfo = "暂时没有数据!";
					}
					console.log(res.Data.List);
				},
				error: function(res) {
					state.wait = false;
					alert('接口出错了');
				}
			})
			console.log(data);
		}
	},
	actions: {
		initPage({commit, state}) {
			$('#page').pages({
			    totleNum: state.totalCount,
			    currPage: 1,
			    pageLen: state.limit,
			    form: true,
			    callback: function (currentPage) {
			    	commit('getData', currentPage);
			    }
			});
		},
		getData({rootState, commit}) {
			const data = rootState.search.ProjectName;
			commit('getData', data);
		}
	}
}
export default listStore;
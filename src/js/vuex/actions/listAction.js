import router from '../../router/router'
export default {
	//初始化page插件
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
	//请求数据
	getData({rootState, commit}) {
		const data = rootState.search.ProjectName;
		commit('getData', data);
	},
	//推广员编辑
	porEdit({commit}) {
		commit('modalOpen');
		commit('poerPageInit');
		router.go({name: 'poer'});
	},
	//业务参数编辑
	businessEdit({commit}, item) {
		commit('setView', {view: false});
		commit('modalOpen');
		commit('priceTableInit', item);
		router.go({name: 'busi'});
	},
	//查看页
	deleteItem({commit}, item) {
		commit('modalOpen');
		commit('setView', {view: true});
		commit('priceTableInit', item);
		router.go({name: 'remove'});
	}
}
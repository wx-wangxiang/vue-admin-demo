const listStore = {
	state: {
		tableList: []
	},
	getters: {
		tableList: state => {
			return state.tableList;
		}
	},
	mutations: {
		getData(state, data) {
			console.log(data);
		}
	},
	actions: {
		getData({rootState, commit}) {
			const data = rootState.search.ProjectName;
			commit('getData', data);
		}
	}
}
export default listStore;
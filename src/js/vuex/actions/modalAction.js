import router from '../../router/router'
export default {
	//推广员业务参数编辑
	porBusinessEdit({commit}, item) {
		commit('setView', {view: false});
		commit('priceTableInit', item);
		router.go({name: 'price'});
	},
	//添加价格区间
	addPrice({commit}) {
		commit('addPrice');
	},
	//删除价格区间
	removePrice({commit}, price) {
		commit('removePrice', price)
	},
	//提交价格参数
	busiSubmit({state, commit}) {
		state.uploadState = 'green';
		state.uploadInfo = '提交中<img src="../src/img/loading.gif"/>';
		setTimeout(function(){
			state.uploadInfo = '上传完成';
		}, 2000)
		setTimeout(function(){
			commit('modalClose');
			commit('reset');
			router.go({name: 'index'});
		}, 3000)
	},
	//关闭推广员业务参数编辑页
	closePricePage({commit}) {
		commit('reset');
		router.go({name: 'poer'});
	},
	//关闭推广员编辑页
	modalClose({commit}) {
		commit('modalClose');
		commit('clearPoerList');
		router.go({name: 'index'});
	},
	//关闭业务参数编辑页
	closeBusiPage({commit}) {
		commit('modalClose');
		commit('reset');
		router.go({name: 'index'});
	},
	//确定移除按钮
	remove({commit}) {
		commit('remove');
	},
	//关闭移除页
	closeRemovePage({commit}) {
		commit('modalClose');
		commit('reset');
		router.go({name: 'index'});
	}
}
import router from '../router/router'
const modalStore = {
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
	getters: {
		//返回是否是查看页
		isView: state => {
			return state.isView;
		},
		//返回推广员数据的加载状态
		poerWait: state => {
			return state.poerWait;
		},
		//返回推广员数据加载的状态信息
		poerSearchInfo: state => {
			return state.poerSearchInfo;
		},
		//返回价格参数的加载状态
		priceWait: state => {
			return state.priceWait;
		},
		//返回价格参数的加载状态信息
		priceSearchInfo: state => {
			return state.priceSearchInfo;
		},
		//返回推广员姓名
		userName: state => {
			return state.UserName;
		},
		//返回项目名
		projectName: state => {
			return state.projectName;
		},
		//返回推广员列表
		poerList: state => {
			return state.poerList;
		},
		//返回价格参数列表
		priceList: state => {
			return state.priceList;
		},
		//返回提交状态
		uploadState: state => {
			return state.uploadState;
		},
		//返回提交信息
		uploadInfo: state => {
			return state.uploadInfo;
		}
	},
	mutations: {
		//设置当前页面的类型,是否是查看页type => {view: true/false}
		setView(state, type) {
			state.isView = type.view;
		},
		//弹出弹出框
		modalOpen(state) {
			$('#vue_dialog').modal('show');
		},
		//关闭弹出框
		modalClose(state) {
			$('#vue_dialog').modal('hide');
		},
		//添加一条价格区间
		addPrice(state) {
			const newPrice = {
                "MinValue": 19,
                "MaxValue": 20,
                "Price": 5
            }
			state.priceList.push(newPrice);
		},
		//移除一条价格区间
		removePrice(state, price) {
			state.priceList.$remove(price);
		},
		//清除推广员列表
		clearPoerList(state) {
			state.poerList = [];
		},
		//重置组件
		reset(state) {
			state.priceList = [];
			state.uploadInfo = '';
			state.uploadState = '';
		},
		//推广员编辑页的初始化
		poerPageInit(state) {
			state.poerWait = true;
			$.ajax({
				url: '/api/Promoter/GetListByProject',
				dataType: 'json',
				type: 'get',
				data: {},
				cache: false,
				success: function(res){
					state.poerWait = false;
					state.poerList = res.Data;
				},
				error: function(res) {
					state.poerWait = false;
				}
			})
		},
		//价格参数列表页的初始化
		priceTableInit(state, item) {
			state.priceWait = true;
			for(const i in item){
				state[i] = item[i]
			}
			$.ajax({
				url: '/api/BusiMultisend/GetPriceListByUserID',
				dataType: 'json',
				type: 'get',
				data: {},
				cache: false,
				success: function(res){
					state.priceWait = false;
					state.priceList = res.Data.PriceList;
				},
				error: function(res){
					state.priceWait = false;
				}
			})
		},
		//移除项目
		remove(state) {}
	},
	actions: {
		//推广员编辑
		porEdit({commit}) {
			commit('modalOpen');
			commit('poerPageInit');
			router.go({name: 'poer'});
		},
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
			state.uploadInfo = '提交中<img src="../src/img/loading.gif"/>'; //<img :src="loadingImg"/>
			setTimeout(function(){
				state.uploadInfo = '上传完成';
			}, 2000)
			setTimeout(function(){
				commit('modalClose');
				commit('reset');
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
		},
		//业务参数编辑
		businessEdit({commit}, item) {
			commit('setView', {view: false});
			commit('modalOpen');
			commit('priceTableInit', item);
			router.go({name: 'busi'});
		},
		//关闭业务参数编辑页
		closeBusiPage({commit}) {
			commit('modalClose');
			commit('reset');
		},
		//查看页
		deleteItem({commit}, item) {
			commit('modalOpen');
			commit('setView', {view: true});
			commit('priceTableInit', item);
			router.go({name: 'remove'});
		},
		//确定移除按钮
		remove({commit}) {
			commit('remove');
		},
		//关闭移除页
		closeRemovePage({commit}) {
			commit('modalClose');
			commit('reset');
		}
	}
}
export default modalStore;
export default {
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
}
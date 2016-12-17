export default {
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
}
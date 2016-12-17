export default {
	//返回列表数据
	tableList: state => {
		return state.tableList;
	},
	//返回ajax请求的状态
	wait: state => {
		return state.wait;
	},
	//返回ajax请求的状态信息(成功/失败)
	searchInfo: state => {
		return state.searchInfo;
	}
}
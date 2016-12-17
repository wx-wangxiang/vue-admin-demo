export default {
	//返回开始日期
	beginDate: state => {
		const date = new Date(state.BeginDate);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return year + '-' + month + '-' + day;
	},
	//返回结束日期
	endDate: state => {
		const date = new Date(state.EndDate);
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		return year + '-' + month + '-' + day;
	},
	//返回选中的城市
	selectedProvince: state => {
		return state.selectedProvince;
	},
	//返回选中的省份
	selectedCity: state => {
		return state.selectedCity;
	},
	//返回选中的地区
	selectedDistrict: state => {
		return state.selectedDistrict;
	},
	//返回所有的城市
	Provinces: state => {
		return state.Provinces;
	},
	//返回所有的城市
	Citys: state => {
		return state.Citys;
	},
	//返回所有的地区
	Districts: state => {
		return state.Districts;
	}
}
export default {
	//项目名字的双向绑定
	projectNameUpdate(state, value) {
		state.ProjectName = value;
	},
	//负责人的双向绑定
	principalNameUpdate(state, value) {
		state.PrincipalName = value;
	},
	//开始日期的双向绑定
	beginDateChange(state, value) {
		state.BeginDate = value;
	},
	//结束日期的双向绑定
	endDateChange(state, value) {
		state.EndDate = value;
	},
	//省份选择的双向绑定
	provinceUpdate(state, value) {
		const citys = JSON.parse(window.localStorage.getItem('Citys'));
		state.selectedProvince = value;
		state.selectedCity = '0000';
		state.selectedDistrict = '000000';
		state.Citys = [];
		state.Districts = [];
		for(let i = 0; i < citys.length; i++){
			if(citys[i].ProvinceCode === value){
				state.Citys.push(citys[i]);
			}
		}
	},
	//城市选择的双向绑定
	cityUpdate(state, value) {
		const districts = JSON.parse(window.localStorage.getItem('Districts'));
		state.selectedCity = value;
		state.selectedDistrict = '000000';
		state.Districts = [];
		$.each(districts, function(index, item){
			if(item.CityCode === value){
				state.Districts.push(item);
			}
		})
	},
	//地区选择的双向绑定
	districtUpdate(state, value) {
		state.selectedDistrict = value;
	},
	//处理地区编码
	getAreaCode(state) {
		function areaCode () {
			if(state.selectedDistrict !== '000000') {
				return state.selectedDistrict;
			}else if(state.selectedCity !== '0000') {
				return state.selectedCity;
			}else{
				return state.selectedProvince;
			}
		};
		state.AreaCode = areaCode();
	},
	//提交搜索数据
	submit(state) {
		const Data = {
			ProjectName: state.ProjectName,
			BeginDate: state.BeginDate,
			EndDate: state.EndDate,
			PrincipalName: state.PrincipalName,
			AreaCode: state.AreaCode
		};
		console.log(Data);
	}
}
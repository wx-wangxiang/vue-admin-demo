export default {
	//初始化地区数据
	initData({dispatch, state}) {
		dispatch('getProvinces');
		dispatch('getCitys');
		dispatch('getDistricts');
	},
	//获取省份,先判断localstorage中有没有，没有的话向后台请求
	getProvinces({state}) {
		if(window.localStorage.getItem('Provinces')){
			state.Provinces = JSON.parse(window.localStorage.getItem('Provinces'));
		}else{
			$.ajax({
				url: '/api/Home/GetAllProvinces',
				type: 'get',
				data: {},
				dataType: 'json',
				cache: false,
				success: function(res){
					if(res.Status && res.Code === 1){
						state.Provinces = res.Data;
						window.localStorage.setItem('Provinces', JSON.stringify(res.Data));
					}else{
						alert('接口出错了');
					}
				}
			})
		}
	},
	//获取所有的城市,先判断localstorage中有没有，没有的话向后台请求
	getCitys({state, commit}) {
		if(!window.localStorage.getItem('Citys')){
			$.ajax({
				url: '/api/Home/GetAllCities',
				type: 'get',
				data: {},
				dataType: 'json',
				cache: false,
				success: function(res){
					if(res.Status && res.Code === 1){
						window.localStorage.setItem('Citys', JSON.stringify(res.Data));
					}else{
						alert('接口出错了');
					}
				}
			})
		}
	},
	//获取所有的地区/县,先判断localstorage中有没有，没有的话向后台请求
	getDistricts({state, commit}) {
		if(!window.localStorage.getItem('Districts')){
			$.ajax({
				url: '/api/Home/GetAllDistricts',
				type: 'get',
				data: {},
				dataType: 'json',
				cache: false,
				success: function(res){
					if(res.Status && res.Code === 1){
						window.localStorage.setItem('Districts', JSON.stringify(res.Data));
					}else{
						alert('接口出错了');
					}
				}
			})
		}
	},
	//触发地区处理函数，将选中的地区处理为地区编码
	getAreaCode({commit}) {
		commit('getAreaCode');
	},
	//触发提交函数
	submit({dispatch, commit}) {
		/*dispatch('getAreaCode').then(() => {
			commit('submit');
		})*/
		commit('getAreaCode');
		commit('submit');
	}
}
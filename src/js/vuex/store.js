import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		ProjectName: 'wang wang',
		BeginDate: '2016-11-30',
		EndDate: '2016-11-30',
		PrincipalName: '',
		selectedProvince: '',
		selectedCity: '',
		selectedDistrict: '',
		Provinces: [{
							ProvinceCode: '01',
							ProvinceName: '北京'
						},{
							ProvinceCode: '02',
							ProvinceName: '天津'
						},{
							ProvinceCode: '03',
							ProvinceName: '上海'
						}],
		Citys: [{
							CityCode: '0001',
							CityName: '北京'
						},{
							CityCode: '0002',
							CityName: '北京'
						},{
							CityCode: '0003',
							CityName: '北京'
						}],
		Districts: [{
							DistrictCode: '000001',
							DistrictName: '东城区'
						},{
							DistrictCode: '000002',
							DistrictName: '西城区'
						},{
							DistrictCode: '000003',
							DistrictName: '王府井'
						}]
	},
	mutations: {
		initData(state) {
			$.ajax({
				url: '/api/Home/GetAllProvinces',
				type: 'get',
				data: {},
				dataType: 'json',
				cache: false,
				success: function(){
					console.log('ok');
				}
			})
		},
		beginDateChange(state, value) {
			state.BeginDate = value;
		},
		submit(state) {
			console.log(state.BeginDate)
		}
	}
})
export default  store; 
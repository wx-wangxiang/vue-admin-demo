import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		ProjectName: 'wang wang',
		BeginDate: 1480557886049,
		EndDate: 1480557886049,
		PrincipalName: '',
		selectedProvince: '00', //选中的省
		selectedCity: '0000', //选中的市
		selectedDistrict: '000000', //选中的县
		Provinces: [], //所有的省
		Citys: [], //当前省下的市
		Districts: [] //当前市下的县
	},
	getters: {
		beginDate: state => {
			const date = new Date(state.BeginDate);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			return year + '-' + month + '-' + day;
		},
		endDate: state => {
			const date = new Date(state.EndDate);
			const year = date.getFullYear();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			return year + '-' + month + '-' + day;
		},
		selectedProvince: state => {
			return state.selectedProvince;
		},
		selectedCity: state => {
			return state.selectedCity;
		},
		selectedDistrict: state => {
			return state.selectedDistrict;
		}
	},
	mutations: {
		initData(state) {
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
		beginDateChange(state, value) {
			state.BeginDate = value;
		},
		endDateChange(state, value) {
			state.EndDate = value;
		},
		provinceUpdate(state, value) {
			const citys = JSON.parse(window.localStorage.getItem('Citys'));
			state.selectedProvince = value;
			state.selectedCity = '0000';
			state.selectedDistrict = '000000';
			state.Citys = [];
			state.Districts = [];
			for(var i = 0; i < citys.length; i++){
				if(citys[i].ProvinceCode === value){
					state.Citys.push(citys[i]);
				}
			}
		},
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
		districtUpdate(state, value) {
			state.selectedDistrict = value;
		},
		submit(state) {
			console.log(state.BeginDate)
		}
	},
	actions: {
		initData({commit}) {
			commit('initData');
		},
		submit({commit}) {
			commit('submit');
		}
	}
})
export default  store; 
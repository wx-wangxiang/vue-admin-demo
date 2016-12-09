import Vue from 'vue';
import Vuex from 'vuex';
import searchStore from './search_module';
import listStore from './list_module';
import modalStore from './modal_module';
Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		search: searchStore,
		list: listStore,
		modal: modalStore
	}
})
export default  store; 























/*,
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
		Districts: [], //当前市下的县
		AreaCode: ''
	}*//*,
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
		projectNameUpdate(state, value) {
			state.ProjectName = value;
		},
		principalNameUpdate(state, value) {
			state.PrincipalName = value;
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
	},
	actions: {
		initData({commit}) {
			commit('initData');
		},
		getAreaCode({commit}) {
			commit('getAreaCode');
		},
		submit({dispatch, commit}) {
			dispatch('getAreaCode').then(() => {
				commit('submit');
			})
			commit('getAreaCode');
			commit('submit');
		}
	}*/
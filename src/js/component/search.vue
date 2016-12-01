<template>
	<div class="container-fluid">
		<!-- search -->
		<div class="well well-sm">
			<form class="form-horizontal">
				<div class="row">
					<div class="col-lg-10 col-sm-10 text-nowrap">
						<div class="col-lg-3 col-sm-4">
							<div class="form-group form-group-sm">
								<label class="control-label col-lg-4 col-sm-4">项目名称：</label>
								<div class="col-lg-8 col-sm-8">
				                    <input type="text" class="form-control" v-model="ProjectName" />
				                </div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-8">
							<div class="form-group form-group-sm">
								<label class="control-label col-lg-2 col-sm-2">加入日期：</label>
								<div class="col-lg-10 col-sm-10">
									<div class="input-group">
										<input readonly="readonly" type="text" id="dateTimePicker1" class="form-control" v-datetimepickerfirst="beginDate">
										<span class="input-group-addon">至</span>
										<input readonly="readonly" id="dateTimePicker2" type="text" class="form-control" v-datetimepickersecond="endDate">
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-sm-4">
							<div class="form-group form-group-sm">
								<label class="control-label col-lg-4 col-sm-4">负责人：</label>
								<div class="col-lg-8 col-sm-8">
				                    <input type="text" class="form-control input-sm" ms-duplex="input"/>
				                </div>
							</div>
						</div>
						<div class="col-lg-6 col-sm-8">
							<div class="form-group form-group-sm">
								<label class="control-label col-lg-2 col-sm-2">地区：</label>
								<div class="col-lg-10 col-sm-10">
									<div class="col-lg-4 col-sm-4">
										<select v-model='selectedProvince' class="form-control">
											<option value="00">省</option>
											<option v-for="province in Provinces" :value="province.ProvinceCode">{{province.ProvinceName}}</option>
										</select>
									</div>
									<div class="col-lg-4 col-sm-4">
										<select v-model='selectedCity' class="form-control">
											<option value="0000">市</option>
											<option v-for='city in Citys' :value="city.CityCode">{{city.CityName}}</option>
										</select>
									</div>
									<div class="col-lg-4 col-sm-4">
										<select v-model='selectedDistrict' class="form-control">
											<option value="000000">县</option>
											<option v-for="district in Districts" :value="district.DistrictCode">{{district.DistrictName}}</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-2 col-sm-2 text-right">
						<div class="form-group">
							<button type="submit" class="btn btn-primary btn-sm" @click="search"><i class="glyphicon glyphicon-search"></i> 搜索</button>
						</div>
					</div>
				</div>
			</form>
		</div>
		<!-- /.search -->
	</div>
</template>
<script type="text/javascript">
	import './bootstrap-datetimepicker.min.js';
	import './bootstrap-datetimepicker.zh-CN.js';
	import store from '../vuex/store.js';
	import {mapState} from 'vuex';
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
        export default{
			store,
			ready() {
				this.$store.commit('initData');
			},
			computed: {
				selectedProvince: {
					get() {
						return this.$store.getters.selectedProvince;
					},
					set(value) {
						this.$store.commit('provinceUpdate', value);
					}
				},
				selectedCity: {
					get() {
						return this.$store.getters.selectedCity;
					},
					set(value) {
						this.$store.commit('cityUpdate', value);
					}
				},
				selectedDistrict: {
					get() {
						return this.$store.getters.selectedDistrict;
					},
					set(value) {
						this.$store.commit('districtUpdate', value);
					}
				},
				...mapState({
					ProjectName: 'ProjectName',
					Provinces: 'Provinces',
					Citys: 'Citys',
					Districts: 'Districts'
				}),
				...mapGetters({
					beginDate: 'beginDate',
					endDate: 'endDate'
				})
			},
			directives: {
				'datetimepickerfirst': {
					//twoWay: true, //使用set方法时要开启该属性
					bind: function () {
		            	var self = this;
		            	$(this.el)
		            		.datetimepicker({
								language: 'zh-CN',
								format: 'yyyy-mm-dd',
								autoclose: true,
								minView: "month",
								todayBtn: true
							})
							.on('changeDate', function(evt){
								//self.set(evt.date.valueOf())
								self.vm.$store.commit('beginDateChange', evt.date.valueOf());
								//self.vm.$store.state.BeginDate = evt.date.valueOf();
							})
		                console.log('bind');
		            },
		            update: function (value) {
		            	this.el.value = value;
		            	$(this.el).datetimepicker('update');
		                console.log("update =>" + value);
		            },
		            unbind: function () {
		            	$(this.el).datetimepicker('remove');
		                console.log('unbind');
		            }
				},
				'datetimepickersecond': {
					//twoWay: true,
					bind: function(){
						var self = this;
						$(this.el)
							.datetimepicker({
								language: 'zh-CN',
								format: 'yyyy-mm-dd',
								autoclose: true,
								minView: "month",
								todayBtn: true
							})
							.on('changeDate', function(evt){
								//self.set(evt.date.valueOf());
								//self.$store.state.EndDate = evt.date.valueOf();
								self.vm.$store.commit('endDateChange', evt.date.valueOf());
							})
						console.log('bind');
					},
					update: function (value) {
						this.el.value = value;
		                $(this.el).datetimepicker('update');
		                console.log("update =>" + value);
		            },
		            unbind: function () {
		            	$(this.el).datetimepicker('remove');
		                console.log('unbind');
		            }
				}
			},
			methods: {
				search(e) {
					e && e.preventDefault();
					this.submit();
				},
				...mapActions({
					initData: 'initData',
					submit: 'submit'
				})
			}
		}
</script>
<template>
	<!-- <h1 @click="changeColor" :style="{color: activeColor}">Hello {{msg}}</h1> -->
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
					                    <input type="text" class="form-control" ms-duplex="input" ms-on-focus="focus"/>
					                </div>
								</div>
							</div>
							<div class="col-lg-6 col-sm-8">
								<div class="form-group form-group-sm">
									<label class="control-label col-lg-2 col-sm-2">加入日期：</label>
									<div class="col-lg-10 col-sm-10">
										<div class="input-group">
											<input readonly="readonly" type="text" id="dateTimePicker1" class="form-control" ms-duplex-string="StaticData.searchData.BeginDate">
											<span class="input-group-addon">至</span>
											<input readonly="readonly" id="dateTimePicker2" type="text" class="form-control" ms-duplex="StaticData.searchData.EndDate">
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-sm-4">
								<div class="form-group form-group-sm">
									<label class="control-label col-lg-4 col-sm-4">负责人：</label>
									<div class="dropdown col-lg-8 col-sm-8">
					                    <input type="text" class="form-control input-sm" ms-duplex="input" ms-on-focus="focus"/>
					                </div>
								</div>
							</div>
							<div class="col-lg-6 col-sm-8">
								<div class="form-group form-group-sm">
									<label class="control-label col-lg-2 col-sm-2">地区：</label>
									<div class="col-lg-10 col-sm-10">
										<div class="col-lg-4 col-sm-4">
											<select ms-duplex='StaticData.selectedProvince' class="form-control">
												<option value="00">省</option>
												<option v-for="province in Provinces" :value="province.ProvinceCode">{{province.ProvinceName}}</option>
											</select>
										</div>
										<div class="col-lg-4 col-sm-4">
											<select ms-duplex='StaticData.selectedCity' class="form-control">
												<option value="0000">市</option>
												<option v-for='city in Citys' :value="city.CityCode">{{city.CityName}}</option>
											</select>
										</div>
										<div class="col-lg-4 col-sm-4">
											<select ms-duplex='StaticData.selectedDistrict' class="form-control">
												<option value="000000">县</option>
												<option v-for="district in Districts" ms-attr-value="district.DistrictCode">{{district.DistrictName}}</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-2 col-sm-2 text-right">
							<div class="form-group">
								<button type="submit" class="btn btn-primary btn-sm" ms-click="search"><i class="glyphicon glyphicon-search"></i> 搜索</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<time-picker></time-picker>
		<!-- /.search -->
		</div>
</template>
<script type="text/javascript">	
	import timePicker from './timePicker/index';
	require('../../css/components/timePicker.less');
	export default{
		data() {
			return {
				msg: 'world',
				activeColor: 'red',
				Provinces: [
					{
						ProvinceCode: '01',
						ProvinceName: '北京'
					},{
						ProvinceCode: '02',
						ProvinceName: '天津'
					},{
						ProvinceCode: '03',
						ProvinceName: '上海'
					}
				],
				Citys: [
					{
						CityCode: '0001',
						CityName: '北京'
					},{
						CityCode: '0002',
						CityName: '北京'
					},{
						CityCode: '0003',
						CityName: '北京'
					}
				],
				Districts: [
					{
						DistrictCode: '000001',
						DistrictName: '东城区'
					},{
						DistrictCode: '000002',
						DistrictName: '西城区'
					},{
						DistrictCode: '000003',
						DistrictName: '王府井'
					}
				]
			}
		},
		components: {timePicker},
		methods: {
			changeColor() {
				this.activeColor = this.activeColor === 'red' ? 'green' : 'red';
			}
		}
	}
</script>
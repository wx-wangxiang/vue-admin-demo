<template>
	<div class="form-group">
		<label class="control-label col-sm-3">推广价格设置：</label>
		<div class="col-sm-9">
			<table class="table table-bordered price">
				<thead>
					<tr>
						<th>人数下限</th>
						<th>人数上限</th>
						<th>区间价格(元)</th>
						<th v-if="!isView">操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="price in priceList">
						<td>
							<input type="text" readonly class="form-control input-sm" v-model="price.MinValue">
						</td>
						<td>
							<input type="text" :readonly="isView" class="form-control input-sm" v-model="price.MaxValue" @change="modify($index)">
						</td>
						<td>
							<input type="text" :readonly="isView" class="form-control input-sm" v-model="price.Price" @change="digitLimit($index)">
						</td>
						<td v-if="!isView">
							<button :disabled="$index === 0" v-if="$index === (priceList.length - 1)" @click="removePrice(price)" type="button" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-remove"></i>删除</button>
						</td>
					</tr>
					<tr>
						<td colspan="4" style="height: 100px;" v-if="wait" :class="{'loading': wait}"></td>
					</tr>
				</tbody>
			</table>
			<div v-html="searchInfo" class="text-center"></div>
		</div>
	</div>
	<div v-if="!isView" class="form-group">
		<label class="control-label col-sm-3"></label>
		<div class="col-sm-9 text-center">
			<button @click="addPrice" type="button" class="btn btn-success btn-sm"><i class="glyphicon glyphicon-plus"></i>添加</button>
		</div>
		<div class="form-group">
			<div class="text-center" :style = "{color: uploadState}" v-html="uploadInfo"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store.js'
	import {mapActions, mapGetters} from 'vuex'
	export default {
		store,
		computed: {
			...mapGetters({
				isView: 'isView',
				wait: 'priceWait',
				searchInfo: 'priceSearchInfo',
				uploadInfo: 'uploadInfo',
				uploadState: 'uploadState',
				userName: 'userName',
				priceList: 'priceList'
			})
		},
		watch: {},
		methods: {
			...mapActions({
				removePrice: 'removePrice',
				closePricePage: 'closePricePage',
				addPrice: 'addPrice'
			})
		}
	}
</script>
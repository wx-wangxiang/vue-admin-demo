<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" @click="closePricePage" class="close">&times;</button>
			<h4 class="modal-title">项目下推广员价格区间设置</h4>
		</div>
		<div class="modal-body">
			<form class="form-horizontal">
				<div class="form-group">
					<label class="control-label col-sm-3">推广员：</label>
					<div class="col-sm-5">
	                    <input disabled="disabled" type="text" class="form-control input-sm" v-model="UserName"/>
	                </div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-3">推广价格设置：</label>
					<div class="col-sm-9">
						<table class="table table-bordered price">
							<thead>
								<tr>
									<th>人数下限</th>
									<th>人数上限</th>
									<th>区间价格(元)</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="price in PriceList">
									<td>
										<input type="text" readonly class="form-control input-sm" v-model="price.MinValue">
									</td>
									<td>
										<input type="text" class="form-control input-sm" v-model="price.MaxValue" @change="modify($index)">
									</td>
									<td>
										<input type="text" class="form-control input-sm" v-model="price.Price" @change="digitLimit($index)">
									</td>
									<td>
										<button :disabled="true" @click="$remove" type="button" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-remove"></i>删除</button>
										<button type="button" :disabled="true" @click="$remove" class="btn btn-danger btn-sm" v-if="wait"><i class="glyphicon glyphicon-remove"></i>删除</button>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="jumbotron jumbotron-w text-center" v-if="wait" :class="{'loading':wait}"> </div>
						<div :html="searchInfo" class="text-center"></div>
					</div>
				</div>
				<div class="form-group">
					<label class="control-label col-sm-3"></label>
					<div class="col-sm-9 text-center">
						<button @click="addPrice" type="button" class="btn btn-success btn-sm"><i class="glyphicon glyphicon-plus"></i>添加</button>
					</div>
					<div class="form-group">
						<div class="text-center" :style = "{color: uploadState}">{{uploadInfo}}</div>
					</div>
				</div>
			</form>
		</div>
		<div class="modal-footer">
			<button @click="closePricePage" class="btn btn-default btn-sm">取消</button>
			<button @click="submit" class="btn btn-primary btn-sm">提交</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store.js'
	import {mapActions} from 'vuex'
	export default {
		store,
		methods: {
			...mapActions({
				closePricePage: 'closePricePage',
				addPrice: 'addPrice',
				submit: 'submit'
			})
		}
	}
</script>
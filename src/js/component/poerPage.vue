<template>
	<div class="modal-content">
		<div class="modal-header">
			<button @click="closeDialog" class="close" type="button">&times;</button>
			<h4 class="modal-title">项目下推广员名单</h4>
		</div>
		<div class="modal-body">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>推广员</th>
						<th>联系方式</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in poerList">
						<td>{{item.UserName}}（{{item.UserID}}）</td>
						<td>{{item.PhoneNo}}</td>
						<td>
							<button @click="porBusinessEdit({UserName: item.UserName, UserID: item.UserID})" type="button" class="btn btn-success btn-sm">业务参数编辑</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="jumbotron jumbotron-w text-center" v-if="wait" :class={'loading':wait}> </div>
			<div :html="searchInfo" class="text-center"></div>
		</div>
		<div class="modal-footer">
			<button @click="closeDialog" type="button" class="btn btn-primary btn-sm">确定</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store.js'
	import {mapGetters, mapActions} from 'vuex'
	export default{
		store,
		computed: {
			...mapGetters({
				poerList: 'poerList'
			})
		},
		methods: {
			...mapActions({
				porBusinessEdit: 'porBusinessEdit',
				closeDialog: 'modalClose'
			})
		}
	}
</script>
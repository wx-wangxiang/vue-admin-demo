<template>
	<div class="container-fluid">
		<div class="clearfix mb10">
			<div class="pull-right">
				<button type="button" class="btn btn-success btn-sm" @click="addItem('0')"><i class="glyphicon glyphicon-plus"></i> 新增项目</button>
			</div>
		</div>
		<!-- list -->
		<div class="panel panel-default">
			<table class="table table-bordered table-striped">
				<thead>
					<tr>
						<th>加入时间</th>
						<th>项目名称</th>
						<th>负责人</th>
						<th>地区</th>
						<th>项目推广员</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tableList">
						<td>{{item.CreateTime}}</td>
						<td>{{item.ProjectName}}</td>
						<td>{{item.Principal}}</td>
						<td>{{item.AreaName}}</td>
						<td>{{item.PromoterCount}}人</td>
						<td>
							<a href="javascript:;" @click="porEdit(item.ProjectID)" class="btn btn-xs btn-success"><i class="glyphicon glyphicon-eye-open"></i> 推广员编辑</a>
							<button type="button" @click="businessEdit({ID: item.ID, projectName: item.ProjectName})" class="btn btn-xs btn-primary"><i class="glyphicon glyphicon-pencil"></i> 业务参数编辑</button>
							<a href="javascript:;" @click="deleteItem({ID: item.ID, projectName: item.ProjectName})" class="btn btn-xs btn-danger"><i class="glyphicon glyphicon-remove"></i> 移除</a>
						</td>
					</tr>
					<tr>
						<td colspan="6" style="height: 300px;" v-if="wait" :class="{'loading':wait}"></td>
					</tr>
				</tbody>
			</table>
			<div class="panel-footer clearfix text-right">
				<div :html="searchInfo" class="text-center"></div>
				<div id="page"></div>
			</div>
		</div>
		<!-- /.list -->
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store.js'
	import {mapGetters, mapActions} from 'vuex'
	import '../lib/page.min.js'
	export default{
		store,
		ready() {
			this.initPage();
		},
		computed: {
			...mapGetters({
				wait: 'wait',
				searchInfo: 'searchInfo',
				tableList: 'tableList'
			})
		},
		methods: {
			addItem(id) {
				console.log(id);
			},
			...mapActions({
				initPage: 'initPage',
				businessEdit: 'businessEdit',
				deleteItem: 'deleteItem',
				porEdit: 'porEdit',
				modalClose: 'modalClose'
			})
		}
	}
</script>

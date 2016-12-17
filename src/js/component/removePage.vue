<template>
	<div class="modal-content">
		<div class="modal-header">
			<button type="button" @click="closeRemovePage" class="close">&times;</button>
			<h4 class="modal-title">移除项目</h4>
		</div>
		<div class="modal-body">
			<form class="form-horizontal">
				<div class="form-group">
					<label class="control-label col-sm-3">项目名称：</label>
					<div class="col-sm-5">
	                    <input disabled="disabled" type="text" class="form-control input-sm" v-model="projectName"/>
	                </div>
				</div>
				<price-table></price-table>
			</form>
		</div>
		<div class="modal-footer">
			<button @click="closeRemovePage" class="btn btn-default btn-sm">取消</button>
			<button @click="remove" class="btn btn-primary btn-sm">确定移除</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store.js'
	import {mapActions, mapGetters} from 'vuex'
	import priceTable from './priceTable'
	export default {
		store,
		components: {priceTable},
		computed: {
			...mapGetters({
				projectName: 'projectName'
			})
		},
		methods: {
			...mapActions({
				closeRemovePage: 'closeRemovePage',
				remove: 'remove'
			})
		}
	}
</script>
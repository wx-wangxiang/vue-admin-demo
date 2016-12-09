<template>
	<div id="vue_dialog" class="modal fade">
		<div class="modal-dialog">
			<!-- <poer-page></poer-page> -->
			<price-page></price-page>
		</div>
	</div>
</template>
<script type="text/javascript">
	import poerPage from './poerPage'
	//import pricePage from './pricePage'
	import store from '../vuex/store.js'
	export default{
		store,
		components: {poerPage}//, pricePage}//}
	}
</script>
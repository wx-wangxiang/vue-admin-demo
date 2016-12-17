export default {
	//请求数据
	getData(state, data) {
		state.searchInfo = "";
		state.tableList = [];
		state.wait = true;
		$.ajax({
			url: '/api/BusiMultisend/GetList',
			data: {},
			dataType: 'json',
			type: 'get',
			cache: false,
			success: function(res) {
				state.wait = false;
				state.tableList = res.Data.List;
				if(res.Data.List.length === 0){
					state.searchInfo = "暂时没有数据!";
				}
				console.log(res.Data.List);
			},
			error: function(res) {
				state.wait = false;
				alert('接口出错了');
			}
		})
		console.log(data);
	}
}
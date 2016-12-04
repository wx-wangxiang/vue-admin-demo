import Vue from 'vue'

/* 自定义方法
Array.prototype.forEach = function(callback){
	for(var i = 0; i < this.length; i++){
   		callback(i, this[i]);
	}
}*/
Vue.filter('date', function(value) {
	return value + 'world';
})
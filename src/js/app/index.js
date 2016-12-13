import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import '../component/bootstrap.min';

import router from '../router/router';
import search from '../component/search';
import list from '../component/list';
import modal from '../component/modal';

Vue.use(VueRouter);

/*new Vue({
	el: 'body',
	components: {search, list, modal}
})*/

const App = Vue.extend({
	template: '<search></search><list></list><modal></modal>',
	components: {search, list, modal}
})
//注册组件
Vue.component('app', App)
//挂载
router.start(App, 'app')
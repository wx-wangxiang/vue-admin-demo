import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import '../lib/bootstrap.min'

import router from '../router/router'
import search from '../component/search'
import list from '../component/list'
import modal from '../component/modal'

Vue.use(VueRouter)

//使用router.start()挂载，就不能使用 new Vue()这种方式实例化了
/*new Vue({
	el: 'body',
	components: {search, list, modal}
})*/

const App = Vue.extend({
	template: '<search></search><list></list><modal></modal>',
	components: {search, list, modal}
})

//挂载
router.start(App, 'app')
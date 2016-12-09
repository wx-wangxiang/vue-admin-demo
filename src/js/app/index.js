import Vue from 'vue';
import Vuex from 'vuex';
import '../component/bootstrap.min';
import search from '../component/search';
import list from '../component/list';
import modal from '../component/modal';

new Vue({
	el: 'body',
	components: {search, list, modal}
})
import Vue from 'vue';
import Vuex from 'vuex';
import search from '../component/search';
import list from '../component/list';

new Vue({
	el: 'body',
	components: {search, list}
})
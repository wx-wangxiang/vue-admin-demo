<template>
	<h1 @click="changeColor" :style="{color: activeColor}">Hello {{msg}}</h1>
</template>
<script type="text/javascript">
	export default{
		data() {
			return {
				msg: 'world',
				activeColor: 'red'
			}
		},
		methods: {
			changeColor() {
				this.activeColor = this.activeColor === 'red' ? 'green' : 'red';
			}
		}
	}
</script>
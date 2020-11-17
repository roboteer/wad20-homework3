/*

I'm thinking that BlogPosts will manage a list of single Posts (also component).
Other possible components: LoginPage, Authors, NavBar/TitleBar?


*/
<template>
	<section>
		<Header></Header>
		<section class="main-container">test</section>
		<!--For some reason this is not working-->
		<!--<h1>{{posts.firstname}}</h1>-->
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
	export default {
		name: "BlogPosts",
		components: {
			Header,
		},
		methods: {

		},
		props: {
			posts: Array
		}
	}
</script>

<style scoped>

</style>
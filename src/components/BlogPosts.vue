/*

I'm thinking that BlogPosts will manage a list of single Posts (also component).
Other possible components: LoginPage, Authors, NavBar/TitleBar?


*/
<template>
	<section>
		<Header></Header>
		<section class="main-container">
			<Posts></Posts>
		</section>
	</section>
</template>

<script>
	import Header from '../components/Header.vue'
	import Posts from '../components/Posts.vue'
	export default {
		name: "BlogPosts",
		components: {
			Header,
			Posts
		},
		methods: {

		},

	}
</script>

<style scoped>

</style>
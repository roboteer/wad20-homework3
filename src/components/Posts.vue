<template>
	<div class="post-contents">
    <div class="post" v-for="(post, index) in posts" :key="index">
        <span class="post-author"><span class="post-author-info"><img :src="post.author.avatar" alt="alt">
            <small>{{post.author.firstname}} {{post.author.lastname}}</small></span><small>{{post.date}}</small></span>
        <div class="post-image">
            <img v-if="post.type==='image'" :src="post.post_src" :alt="post.text"></div>
            <video v-if="post.type==='video'" controls>
                <source :src="post.post_src">
            </video>
        <div class="post-title"><h3>{{post.title}}</h3></div>
        <div class="post-actions">
            <LikeButton></LikeButton>

        </div>
    </div>
</div>
</template>

<script>
    import LikeButton from '../components/LikeButton.vue'
    export default {
        name: 'Posts',
        components:{
            LikeButton
        },
        data: function () {
            return {
                clicked: false,
            }
        },
        computed: {
            posts: function () {
                return this.$store.state.posts
            }
        },
        filters: {

        },
        mounted(){
            this.$store.dispatch("getPosts");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

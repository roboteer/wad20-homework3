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
            <button type="button" class="like-button">100k</button>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Posts',
        methods: {

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

<template>
    <div class="post">
        <span class="post-author"><span class="post-author-info"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="Bruce Wayne"><small>Bruce Wayne</small></span><small>Sep 18, 2020 17:18</small></span>
        <div class="post-image"><img src="https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg" alt="Felt cute, might delete later"></div>
        <div class="post-title"><h3>Felt cute, might delete later</h3></div>
        <div class="post-actions"><button type="button" class="like-button">100k</button></div>
    </div>
</template>

<script>
    import Post from '../models/Post'

    export default {
        name: 'Posts',
        methods: {

        },
        data: function () {
            return {
                commentField: null,
                posts: []
            }
        },
        computed: {

        },
        filters: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>

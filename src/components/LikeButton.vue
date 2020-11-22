<template>
     <button type="button" class="like-button"  v-on:click ="clicked = !clicked" v-bind:class="{'like-button': !clicked, 'like-button-liked': clicked}">{{nr_of_likes || 0}}</button>

</template>

<script>
    
    export default {
        name: 'LikeButton',
        props: ['nr_of_likes'], /* todo: this is where normally filter would be sanctioned - if nr of likes would be natural number*/
        data: function () {
            return {
                clicked: false,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like-button {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
}

.like-button-liked {
    background-image: url(../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    width: 60px;
    height: 25px;
    padding-left: 23px;
    line-height: 10px;
    text-align: left;
    border: none;
    background-color: #01579b;
}

</style>

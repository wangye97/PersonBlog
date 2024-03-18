<template>
  <div style="background-color:rgb(223, 225, 228);">
    <div class="article">
        <router-link to="/article/css" active-class="active">CSS</router-link>
        <router-link to="/article/js" active-class="active">JS</router-link>
        <router-link to="/article/promise" active-class="active">PROMISE</router-link>
        <router-link to="/article/ajax" active-class="active">AJAX</router-link>
        <router-link to="/article/node" active-class="active">NODE.JS</router-link>
        <router-link to="/article/vue" active-class="active">VUE</router-link>
    </div>
    <keep-alive :include="['CssArticle','AjaxArticle','JsArticle','NodeArticle','PromiseArticle','VueArticle']">
        <router-view></router-view>
    </keep-alive>
</div>
</template>

<script>
export default {
    name:'Article',
    
}
</script>

<style scoped>
    .article{
        width: 50%;
        margin: 0px auto;
        font-size: 20px;
        display: flex;
        justify-content: space-evenly;

    }
    .article a{
        text-decoration: none; 
    }
    .active{
        color: aqua;
    }

    @media only screen and (max-width:768px) {
        .article{
            width: 100%;
        }
    }

    
</style>
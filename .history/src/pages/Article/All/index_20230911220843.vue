<template>
  <div>
    <Item></Item>
  </div>
</template>

<script>
import Item from '../Item'
export default {
    name:'AllArticle',
    components:{Item},
    mounted() {
        console.log(this.$route);
    },
}
</script>

<style>

</style>
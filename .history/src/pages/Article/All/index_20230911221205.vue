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
    data() {
        return {
            path:''
        }
    },
    mounted() {
        this.path=this.$route.path
    },

    activated(){
        console.log('激活');
    }
}
</script>

<style>

</style>
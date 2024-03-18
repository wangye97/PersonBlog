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
    watch:{
        'this.$route.path':{
            handler(){
                console.log(123);
            }
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
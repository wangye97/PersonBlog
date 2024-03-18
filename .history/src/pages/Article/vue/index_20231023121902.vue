<template>
  <div>
    <div class="userInfo">
      <img :src="homeInfo.avatar" alt="" />
      <span style="font-size: 18px">{{ homeInfo.author }}</span>
      <h1>VUE笔记</h1>
    </div>
    <div class="all-column">
      {{ this.$store.state.article.vueInfo }}
    </div>
    <Message title="vue"></Message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "VueArticle",
  data() {
    return {
      homeInfo:''
    }
  },
  computed:{
    ...mapGetters({homeList:'homeList'}) 
  },
  mounted() {
    this.$store.state.home.index=5
    this.$store.dispatch("getVueInfo");
    this.homeInfo=this.homeList
  },
};
</script>
  
  <style scoped>
.userInfo {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.userInfo img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.all-column {
  width: 90%;
  margin: 20px auto;
  column-count: 3;
  column-width: 200px;
  column-gap: 100px;
  font-size: 18px;
  column-rule: 1px red solid;
  column-span: all;
}
</style>
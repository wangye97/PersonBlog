<template>
  <div>
    <div class="userInfo">
      <img :src="homeInfo.avatar" alt="" />
      <span style="font-size: 18px">{{ homeInfo.author }}</span>
      <h1>CSS笔记</h1>
    </div>
    <transition name="hello" appear>
      <div class="all-column">
         {{ this.$store.state.article.cssInfo }}
      </div>
    </transition>
    <Message title="css"></Message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "CssArticle",
  data() {
    return {
      homeInfo:''
    }
  },
  computed:{
    ...mapGetters({homeList:'homeList'}) 
  },
  mounted() {
    this.$store.state.home.index=0
    this.$store.dispatch("getCssInfo");
    this.homeInfo=this.homeList
  },
};
</script>

<style scoped>
.hello-enter-active{
    animation: aini 1s linear;
  }
  
    @keyframes aini {
        from{
          /* transform: translateX(-100%); */
          height: 0;
        }
        to{
          /* transform: translateX(0%); */
          height: 1000px;
        }
    }
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
  height: 100%;
}
</style>
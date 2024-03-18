<template>
  <div id="app">
      <Header v-if="$route.meta.head"></Header>
      <router-view></router-view>  
      <Footer v-if="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    this.$store.dispatch('getHomeInfo')
  }
};
</script>

<style >
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  overflow: auto;
    /* background-size: 100%; */
  /* background-image: url("https://img2.baidu.com/it/u=3669621074,626247377&fm=253&fmt=auto&app=138&f=JPEG?w=888&h=500");
  background-size: 100% 100%; */
}
#app::-webkit-scrollbar {
     width: 8px; /*  设置纵轴（y轴）轴滚动条 */
     /* height: 5px;  设置横轴（x轴）轴滚动条 */
 }
 /* 滚动条滑块（里面小方块） */
 #app::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
 }
 /* 滚动条轨道 */
 #app::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius: 2px;
 }

</style>

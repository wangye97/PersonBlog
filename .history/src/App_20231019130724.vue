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
.app::-webkit-scrollbar {
     width: 4px; /*  设置纵轴（y轴）轴滚动条 */
     height: 4px; /*  设置横轴（x轴）轴滚动条 */
 }
 /* 滚动条滑块（里面小方块） */
 .app::-webkit-scrollbar-thumb {
     border-radius: 10px;
     box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
     background: rgba(0,0,0,0.9);
 }
 /* 滚动条轨道 */
 .app::-webkit-scrollbar-track {
     border-radius: 0;
     box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
     background: red;
 }
————————————————
版权声明：本文为CSDN博主「前端张三」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44784401/article/details/130130150

</style>

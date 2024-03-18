<template>
      <div class="center" ref="center" style="{height:80%}">
        <div class="random" >
          <div style="margin: 130px 0 180px 0;">
            <h1 style="font-size: 35px">{{ getRandom }}</h1>
          </div>
          <div style="display: flex; justify-content: space-evenly; margin: 0px 0 193.4px 0;">
            <button class="el-icon-arrow-down read" @click="read">开始阅读</button>
            <button class="el-icon-document-checked github" @click="github">GITHUB</button>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name:'Index',
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        getRandom: (state) => state.capital.getRandom,
      }),
    },
    methods: {
      async getRandoms() {
        let result = await this.$store.dispatch("getRandom");
        return result;
      },
      read(){
        this.$router.push('/home')
      },
      github(){
        window.open('https://github.com/')
      }
    },
  
    async mounted() {
      let length = await this.getRandoms();
      while (true) {
        if (length > 20) {
          length = await this.getRandoms();
        } else {
          break;
        }
      }
      // console.log(document.documentElement.clientHeight);
      
     
    },
  }
  </script>
  
  <style>
    
    .center{
      position: relative;
      width: 100%;
      /* height: calc(100vh - 50%); */
      background-color:rgb(223, 225, 228);
      /* background-image: url('https://img1.baidu.com/it/u=315306407,1729225353&fm=253&fmt=auto&app=138&f=JPEG?w=921&h=500'); */
      background-size: 100% 100%;
      overflow-x: auto;
    }
    .random {
    text-align: center;
    margin: 0px auto;
    width: 800px;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    /* top: 40%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    /* font-size: 25px; */
    color: white;
    /* margin: auto; */
  }
    .center .random .read {
    width: 100px;
    height: 35px;
    border: 1px solid white;
    border-radius: 10px;
    opacity: 0.3;
    font-size: 14px;
    cursor: pointer;
  }
  .center .random .github {
    width: 100px;
    height: 35px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(80, 219, 80);
    opacity: 0.5;
    font-size: 14px;
    cursor: pointer;
  }
  </style>
<template>
    <div>
      <div class="center">
        <div class="random">
          <h1 style="font-size: 35px" v-show="!getRandom">
            知足且上进,温柔且坚定
          </h1>
          <h1 style="font-size: 35px">{{ getRandom }}</h1>
          <div
            style="display: flex; justify-content: space-evenly; margin-top: 80px"
          >
            <button class="el-icon-arrow-down read" @click="read">开始阅读</button>
            <button class="el-icon-document-checked github">GITHUB</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  export default {
    name:'Index',
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
    },
  }
  </script>
  
  <style>
    .center{
      position: relative;
      width: 100%;
      height: calc(100vh - 170px);
      background-color:rgb(223, 225, 228);
      /* background-image: url('https://img1.baidu.com/it/u=315306407,1729225353&fm=253&fmt=auto&app=138&f=JPEG?w=921&h=500'); */
      background-size: 100% 100%;
    }
    .random {
    text-align: center;
    width: 800px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
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
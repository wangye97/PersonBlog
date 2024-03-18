<template>
  <div style="min-height: 80%; background-color:red;  min-width: 100%;">
    <div style="height: 400px; background-color: rgb(223, 225, 228);">
      <div class="random" >
            <h1 style="font-size: 35px">{{ getRandom }}</h1>
            <div style="display: flex; justify-content: space-evenly;">
              <button class="el-icon-arrow-down read" @click="read">开始阅读</button>
              <button class="el-icon-document-checked github" @click="github">GITHUB</button>
            </div>
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
    
    .random {
    text-align: center;
    margin: 0 auto;
    width: 1215px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    color: white;
    background-color:rgb(223, 225, 228);

  }
     .random .read {
    width: 100px;
    height: 35px;
    border: 1px solid white;
    border-radius: 10px;
    opacity: 0.3;
    font-size: 14px;
    cursor: pointer;
  }
   .random .github {
    width: 100px;
    height: 35px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(80, 219, 80);
    opacity: 0.5;
    font-size: 14px;
    cursor: pointer;
  }
@media only screen and (max-width: 768px) {
   .random{
    width: 100%;
  }
}
  </style>
<template>
  <div>
    <div class="wrapper">
      <div class="contain">
        <transition-group name="hello" appear>
          <div v-for="(h,index) in homeInfo" :key="h.id" class="capital" >
            <div style="width: 280px;height: 200px;" v-show="index%2==0" class="active" @click="skip(h)">
              <h1>{{h.title}}</h1>
              <div class="inner">
                <div>
                  <img :src="h.avatar" alt="" style="width: 30px; height: 30px; border-radius: 50%;">
                </div>
                <span>{{h.author}}</span>
                <div>
                  <span class="el-icon-reading"> {{h.views}} </span>
                  <span  v-if="h.views>60"> 热度 </span>
                  <span v-else> 加油</span>
                </div>
                <span class="el-icon-chat-dot-square"> {{h.message}}</span>
              </div>
              <h2>{{getText[index]}}</h2>
            </div>
            <div style="width: 320px;height: 200px; overflow: hidden;"><img ref="img" :src="h.img" alt="" class="imgs"></div>
        
        
            <div style="width: 280px;height: 200px;" v-show="index%2==1" class="active" @click="skip(h)">
              <h1>{{h.title}}</h1>
              <div class="inner">
                <div>
                  <img :src="h.avatar" alt="" style="width: 30px; height: 30px; border-radius: 50%;">
                </div>
                <span>{{h.author}}</span>
                <div>
                  <span class="el-icon-reading"> {{h.views}} </span>
                  <span  v-if="h.views>60"> 热度 </span>
                  <span v-else> 加油</span>
                </div>
                <span class="el-icon-chat-dot-square"> {{h.message}}</span>
              </div>
              <h2>{{getText[index]}}...</h2>
            </div>
          </div>
        </transition-group>
    </div>
    </div>
    <!-- <button class="btn">更多文章</button> -->
  </div>
</template>

<script>
  import { mapState } from "vuex";
export default {
  name:'Home',
  computed:{
    ...mapState({
      homeInfo:(state)=>state.home.homeInfo}),
    // ...mapState('home',['homeInfo']),
    // ...mapState('home',{homeInfo:'homeInfo'}),
    getText(){
      return this.homeInfo.map(element => {
            return element.text
        });
    }
  },
  methods: {
    skip(h){
      const paths=h.title.slice(0,h.title.indexOf('相')).toLowerCase()
      this.$router.push({
        path:`/article/${paths}`,
      })
    }
  },
  mounted(){
    // this.$store.dispatch('home/getHomeInfo')
    // this.$store.dispatch('getHomeInfo')
  }
}
</script>

<style scoped>

  .hello-enter-active{
    animation: aini 0.5s linear;
  }
  .hello-leave-active{
        animation: aini 0.5s linear;
    }
    @keyframes aini {
        from{
          transform: translateX(-100%);
        }
        to{
          transform: translateX(0%);
        }
    }
    .wrapper{
      min-width: 1215px;
      background-color:rgb(223, 225, 228);
      overflow: hidden;
    }
    .contain{
      width: 620px;
      margin: 0 auto;
      margin-top: 10px;
    }
    .contain .capital{
      height: 200px;
      display: flex;
      margin-bottom: 20px;
      background-color: white;
      border-radius: 10px;
      
    }
    .contain .imgs{
      width: 320px;
      height: 200px;
      
}
  .contain .imgs:hover{
    transform: scale(1.2);
    transition: all 1s;
  }
  .contain .capital .active{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10px;
    cursor: pointer;
  }
  .capital .inner{
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  .btn{
    display: block;
    width: 80px;
    height: 30px;
    margin: 0 auto;
    border-radius: 5px;
    opacity: .5;
    cursor: pointer;
  }

  @media only screen and (max-width:768px){
    .wrapper{
      min-width: 100%;
    }
    .contain{
      width: 100%;
    }    

  }
</style>
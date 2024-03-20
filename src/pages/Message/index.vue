<template>
  <div>
    <div class="img-contain">
      <img src="" alt="">
      <div></div>
    </div>

    <div class="tools-contain">
      <div class="all-contain">
        <h1>算法之家</h1>


        <div class="out-contain">

          <div ref="inner" class="inner-contain" @mouseenter="move" @mouseleave="moveto">

           <transition name="change1">
            <div class="isShow-left" v-show="isShow">
              <img
                src="https://ts2.cn.mm.bing.net/th?id=ODLS.75fbaa62-ad18-4e8b-9ca8-67706ec82c93&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
                alt="">
              <div style="width: 180px;">
                <h1 style="margin: 5px 0;">Leetcode</h1>
                <h2>算法平台</h2>
              </div>
            </div>
           </transition>
           
            <transition name="change">
              <div class="isShow-right" v-show="!isShow">
                <div style="width: 280px; margin-left: 15px;">
                  <h1 style="margin: 5px 0;">Leetcode</h1>
                  <h2>算法平台</h2>
                </div>
              </div>
            </transition>

          </div>






        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {reqGetTool} from '@/api'
export default {
  name: '',
  components: {},
  data() {
    return {
      isShow:true
    };
  },
  computed: {},
  methods: {
    move(){
      this.isShow=false
    },
    moveto(){
      this.isShow=true
    }
  },
  async mounted(){ 
    let result=await reqGetTool()
    console.log(result);
  }
};
</script>
<style lang="scss" scoped>
.tools-contain {
  width: 80%;
  background-color: aqua;
  margin: 0 auto;

  .all-contain {
    width: 90%;
    background-color: pink;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .out-contain {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .inner-contain {
        width: 280px;
        height: 90px;
        margin: 10px;
        display: flex;
        overflow: hidden;

        .isShow-left {
          width: 280px;
          height: 90px;
          display: flex;
          background-color: azure;
          border-radius: 10px;
          align-items: center;

          img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 0 20px;
          }
        }

        .isShow-right {
          width: 280px;
          height: 90px;
          background-color: aqua;
          border-radius: 10px;
        //  animation: 1s change linear;

        }



      }

      // .inner-contain:hover {
      //   animation: 1s change linear;
      // }

    }

  }
}

.change1-enter-active{
  animation: change2 0.7s linear;
}
.change1-leave-active{
  animation:  change2 .7s linear reverse;
}
.change-enter-active{
  animation: change .7s linear reverse;
}
.change-leave-active{
  animation: change 0.7s linear ;

}


@keyframes change {
  from {
    transform: translateX(-280px);
    opacity: 1;
  }

  to {
    transform: translateX(0);
    opacity: 0;
  }
}
@keyframes change2 {
  from {
    transform: translateX(280px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
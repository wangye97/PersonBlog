<template>
  <div class="contain" style="min-height: 79%; background-color: azure;">
    <div class="carousel">
      <el-carousel class="max-carousel" :interval="3000" type="card" height="320px" >
        <el-carousel-item class="carousel-item" v-for="(item,index) in imgList" :key="index">
            <el-image
                style="width: 100%;height: 100%"
                :src="item"
            ></el-image>            
        </el-carousel-item>
      </el-carousel>

      <el-carousel class="min-carousel" :interval="3000" arrow="always" height="320px" >
        <el-carousel-item class="carousel-item" v-for="(item,index) in imgList" :key="index">
            <el-image
                style="width: 100%;height: 100%"
                :src="item"
            ></el-image>            
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="person-introduction" ref="introduction">
        <div class="person-introduction-left">
            <img :src="userAvatar" alt="" class="imgs">
        </div>
        <div class="person-introduction-right">
         
          <h3 style="border-bottom: 1px solid black;">个人介绍/Introduction</h3>
          <h5>爱好:</h5>
          <ul>
            <li>看电视剧、篮球、LOL</li>
          </ul>
          <h5>性格:</h5>
          <ul>
            <li>性格偏内向，倾向于和熟悉的人交流</li>
          </ul>
          <h5>其他:</h5>
          <ul>
            <li>喜欢动物</li>
            <li>喜欢独立思考</li>
            <li>喜欢清净,但也不介意喧嚣</li>
            <li>喜欢一个人</li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "About",
  data() {
    return {
        imgList: ["https://scpic.chinaz.net/files/default/imgs/2022-11-02/ef0e4bab22a08494.jpg"
          , "https://scpic.chinaz.net/files/default/imgs/2022-10-16/d34367f413668279.jpg"
          , "https://scpic.chinaz.net/files/default/imgs/2022-10-06/8105db2afe794e65.jpg"
          , "https://scpic.chinaz.net/files/default/imgs/2022-09-01/720b9ab754f90f6e.jpg"
          , "https://scpic.chinaz.net/files/default/imgs/2022-10-21/47fa6f662157326f.jpg"
        ],
    }
  },
  computed:{
    ...mapState({userAvatar:(state)=>state.user.userInfo.avatar})
  },
  mounted(){
  }
};
</script>

<style scoped>



.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.contain {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.carousel{
  background-color:azure;
  min-width: 1215px;
  /* display: flex; */
  /* justify-content: center; */
}
.max-carousel{
  display: block;
}
.min-carousel{
  display: none;
}

.person-introduction{
    min-width: 1215px;
    display: flex;
    justify-content: center;
    height: 232px;
    background-color: azure;
}
.person-introduction .person-introduction-left{
  height: 100%;
  overflow: hidden;
  border: 1px solid orange;
  text-align: center;
}
.person-introduction .person-introduction-left .imgs{
  width: 100%;
  height: 100%;
}
.person-introduction .person-introduction-right{
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: space-evenly;
}

@media only screen and (max-width:768px) {
 .contain .carousel{
  min-width: 100%;
 }
 .contain .person-introduction{
  min-width: 100%;
 }
 .contain .carousel .max-carousel{
  display: none;
}
.contain .carousel .min-carousel{
  display: block;
}
}
</style>
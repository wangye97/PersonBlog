<template>
  <div class="contain">
    <div style=" margin-top: 30px;background-color:rgb(223, 225, 228);">
      <el-carousel :interval="3000" type="card" height="300px" >
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <el-image
                style="width: 100%;height: 100%;"
                :src="item"
            ></el-image>            
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="person-introduction">
        <div class="person-introduction-left">
            <img :src="userAvatar" alt="" class="imgs">
        </div>
        <div class="person-introduction-right">
          <h1 style="border-bottom: 1px solid black;display: block;">教育背景/Eudcation</h1>
          <div>
            <span>湖南科技大学潇湘学院</span>
            <span>本科</span>
          </div>
          <h1 style="border-bottom: 1px solid black;">个人介绍/Introduction</h1>
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
        ]
    }
  },
  computed:{
    ...mapState({userAvatar:(state)=>state.user.userInfo.avatar})
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
.person-introduction{
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100vh - 528px);
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
</style>
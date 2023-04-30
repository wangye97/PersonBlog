<template>
  <div class="box">
    <div ref="vantaRef" style="width:100%; height: 170px"></div>
    <div class="header banner" >
      <div style="margin-left: 50px; display: flex; align-items: center;">
        <img class="imgs" :src="getUserInfo.avatar" alt="">
        <router-link to="/index">{{getUserInfo.username}}</router-link>
      </div>
      <ul class="right-header">
        <li >
          <i class="el-icon-user-solid"></i>
          <router-link class="active" to="/home">主页</router-link>
        </li>
        <li>
          <i class="el-icon-document"></i>
          <router-link class="active" to="/article/css">知识库</router-link>
        </li>
        <li >
          <i class="el-icon-link"></i>
          <router-link class="active" to="/about">关于</router-link>
        </li>
        <li>
          <i  class="el-icon-user-solid"></i>
          <router-link class="active" to="/more">更多</router-link>
        </li>
        <li class="setting">
          <i class="el-icon-s-custom"></i>
          <a class="active" @click="isShow=true">设置</a>
          <div class="inner-setting" v-show="isShow" @mouseleave="isShow=false">
            <a href="javascript:;" @click="resetPassword">修改密码</a>
            <a href="javascript:;" @click="logout">退出登录</a>
          </div>
        </li>
      </ul>

      <span>213333331</span>
    </div>
    
  </div>
</template>

<script>
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";
import { mapState } from 'vuex';
import {reqLogout} from '@/api'
export default {
  name: "Header-header",
  data(){
    return{
      isShow:false
    }
  },
  computed:{
    ...mapState({getUserInfo:(state)=>state.user.userInfo})
  },
  methods:{
    resetPassword(){
      this.$router.push('/reset')
    },
    async logout(){
      const {id}=this.getUserInfo
      let result=await reqLogout(id)
      if(result.status==200){
        sessionStorage.clear('isLogin')
        this.$message.success('退出成功')
        this.$router.replace('/login')
      }else{
        this.$message('退出失败')
      }
    },
   
  },
  mounted(){
    this.vantaEffect = BIRDS({
      el: this.$refs.vantaRef,
      THREE: THREE,
    });
    // 修改颜色时 cells 需要全大写字母 可生效
    VANTA.BIRDS({
      el: this.$refs.vantaRef,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xffffff,
      color: 0xaab89a,
      backgroundAlpha: 0.87
    });
    // if(this.$route.path=='/index'){
    //   this.$router.push('/index')
    // }
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
.box{
  position: relative;
  background-color: rgb(223, 225, 228);
}
.box .banner{
    z-index: 999;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: #000;
}
.header {
  font-family: 隶书;
  width: 80%;
  height: 40px;
  /* background-color: white; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 15px;
  margin: 0 auto;
}
.header .imgs{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
.header .right-header{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.right-header .active{
  font-family: 隶书;
  cursor: pointer;
}
.setting{
  position: relative;
  
}
/* .setting:hover .inner-setting{
  display: block;
}
.inner-setting:hover{
  display: block;
} */
.inner-setting{
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgb(223, 225, 228);
  top: 19px;
  left: -20px;
}
.inner-setting a{
  display: block;
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  color: azure;
}

@media screen and (max-width:792px) {
  .box .banner{
    margin: 0;
  }
  .box .header{
    width: 100%;
    background-color: #bfa;
    display: block;
  }
 .box .header .right-header{
    width: 100vw;
    height: 100vh;
    display: block;
    background-color: azure;
  }
  .box .header .right-header li{
    width: 100%;
    height: 50px;
  }
}

</style>
<template>
  <div style="min-height: 20%;">
    <div class="box">
      <div class="header banner" >
        <div style="margin-left: 50px; display: flex; align-items: center;">
          <img class="imgs" :src="getUserInfo.avatar" alt="">
          <router-link to="/index">{{getUserInfo.username}}</router-link>
        </div>
        <div class="right-header">
          <div class="el-icon-user-solid">
            <router-link class="active" to="/home">主页</router-link>
          </div>
          <div class="el-icon-document">
            <router-link class="active" to="/article/css">知识库</router-link>
          </div>
          <div class="el-icon-link">
            <router-link class="active" to="/about">关于</router-link>
          </div>
          <div class="el-icon-user-solid">
            <router-link class="active" to="/more">更多</router-link>
          </div>
          <div class="el-icon-s-custom setting">
            <span class="active">设置</span>
            <div class="inner-setting">
              <a href="javascript:;" @click="resetPassword">修改密码</a>
              <a href="javascript:;" @click="logout">退出登录</a>
            </div>
          </div>
        </div>
        <div class="bar">
            <div class="ball"></div>
        </div>
    </div>
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
      clientHeight:'0px'
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
        sessionStorage.removeItem('isLogin')
        this.$message.success('退出成功')
        this.$router.replace('/login')
      }else{
        this.$message('退出失败')
      }
    }
  },
  mounted(){
    this.clientHeight=sessionStorage.getItem('clientHeight')*0.2+'px'

    // this.vantaEffect = BIRDS({
    //   el: this.$refs.vantaRef,
    //   THREE: THREE,
    // });
    // 修改颜色时 cells 需要全大写字母 可生效
    // VANTA.BIRDS({
    //   el: this.$refs.vantaRef,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   minHeight: 200.00,
    //   minWidth: 200.00,
    //   scale: 1.00,
    //   scaleMobile: 1.00,
    //   backgroundColor: 0xffffff,
    //   color: 0xaab89a,
    //   backgroundAlpha: 0.87
    // });
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
  height: 150px;
  background-color: rgb(223, 225, 228);
  background-color: aliceblue;
}
/* .box .banner{
    z-index: 999;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    color: #000;
} */
.header {
  font-family: 隶书;
  color: #000;
  width: 1215px;
  height: 50px;
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
}
.setting{
  position: relative;
  
}
.setting:hover .inner-setting{
  display: block;
}
.inner-setting:hover{
  display: block;
}
.inner-setting{
  display: none;
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

.ball {
  position: relative;
  bottom: 50px;
  left: calc(100% - 20px);
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  animation: ball-move8234 3s ease-in-out 1s infinite alternate;
}

.ball::after {
  position: absolute;
  content: '';
  top: 25px;
  right: 5px;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
}

.bar {
  width: 200px;
  height: 12.5px;
  background: #FFDAAF;
  border-radius: 30px;
  transform: rotate(-15deg);
  animation: up-down6123 3s ease-in-out 1s infinite alternate;
}

@keyframes up-down6123 {
  from {
    transform: rotate(-15deg);
  }

  to {
    transform: rotate(15deg);
  }
}

@keyframes ball-move8234 {
  from {
    left: calc(100% - 40px);
    transform: rotate(360deg);
  }

  to {
    left: calc(0% - 20px);
    transform: rotate(0deg);
  }
}
</style>
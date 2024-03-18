<template>
  <div class="box">
    <div class="header banner">
      <ul class="nav-contain">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="left-header" style="display: flex; align-items: center">
        <img class="imgs" :src="getUserInfo.avatar" alt="" />
        <router-link to="/index">{{ getUserInfo.username }}</router-link>
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
</template>


<script>
import * as THREE from "three";
import BIRDS from "vanta/src/vanta.birds";
import { mapState } from "vuex";
import { reqLogout } from "@/api";
export default {
  name: "Header-header",
  data() {
    return {};
  },
  computed: {
    ...mapState({ getUserInfo: (state) => state.user.userInfo }),
  },
  methods: {
    resetPassword() {
      this.$router.push("/reset");
    },
    async logout() {
      const { id } = this.getUserInfo;
      let result = await reqLogout(id);
      if (result.status == 200) {
        sessionStorage.removeItem("isLogin");
        this.$message.success("退出成功");
        this.$router.replace("/login");
      } else {
        this.$message("退出失败");
      }
    },
  },
  mounted() {
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
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.box {
  width: 100%;
  position: relative;
  height: 150px;
  background-color: aliceblue;
  /* display: flex;
  align-items: center;
  justify-content: center; */
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
.box .header {
  font-family: 隶书;
  color: #000;
  width: 1215px;
  height: 50px;
  background-color: aliceblue;
  font-size: 18px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin:auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.header .nav-contain{
  display: none;
}

.header .imgs {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.header .right-header {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.right-header .active {
  font-family: 隶书;
}
.setting {
  position: relative;
}
.setting:hover .inner-setting {
  display: block;
}
.inner-setting:hover {
  display: block;
}
.inner-setting {
  display: none;
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgb(223, 225, 228);
  top: 19px;
  left: -20px;
}
.inner-setting a {
  display: block;
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  color: azure;
}
.bar{
  order: 3;
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
  content: "";
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
  background: #ffdaaf;
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

@media only screen and (max-width:768px){
  .box .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box .header .nav-contain{
    display: block;
    width: 18px;
    height: 48px;
    background-color: aquamarine;
    position: relative;
    list-style: none;
  }
  .box .header .nav-contain li{
    height: 1px;
    width: 100%;
    position: absolute;
    background-color: #000;
  }
  .box .header .nav-contain li:nth-child(1){
    top: 16px;
  }
  .box .header .nav-contain li:nth-child(2){
    top: 24px;
  }
  .box .header .nav-contain li:nth-child(3){
    bottom: 16px;
  }
  .box .header .left-header{
    order: 2;
  }
  .box .header .right-header{
    order: 1;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    z-index: 999;
    background-color: azure;
  }
  .box .header .right-header div{
    display: block;
    width: 100%;
    height: 48px;
    line-height: 48px;
  }

  .box .header .right-header .setting{
    display: none;
  }
}
</style>
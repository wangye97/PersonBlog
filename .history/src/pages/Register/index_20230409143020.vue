<template>
  <div>
    <div class="contain">
      <transition name="hello" appear>
        <div class="register-wrapper">
        <div class="Header">SignIn Form</div>
        <input
          type="text"
          class="input-item"
          placeholder="username"
          v-model="user.username"
        />
        <input
          type="password"
          class="input-item"
          placeholder="password"
          v-model="user.password"
        />
        <span style="font-size: 20px; position: relative; top: -10px; left: 35px"
          >头像选择</span
        >
        <el-upload
          class="avatar-uploader"
          action="http://120.26.8.174:8889/api/uploads"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <button class="Footer" @click="register">Register</button>
        <div class="msg">
          Already have an account?
            <a href="javascript:;" @click="$router.push('/login')">go login in</a>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>
  
  <script>
import {reqRegister} from '@/api'
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      // this.imageUrl = URL.createObjectURL(file.response.path);
      this.imageUrl=res.url
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    async register(){
      const {username,password}=this.user
      if(username!==''&&password!=''){
        let result=await reqRegister({username,password,avatar:this.imageUrl})
        console.log(result);
        if(result.data.message){
          this.$message.error(result.data.message)
        }else{
          result.data.status==1?this.$message(result.data.data):this.$message.success(result.data.data)
          if(result.data.status==0){
          this.$router.push('/login')
        }
        }
      }else{
        this.$message.error('用户名或密码不能为空')
      }
    }
  },
};
</script>
  
  <style scoped>
  .hello-enter-active{
    animation: aini 1s linear;
  }
  
    @keyframes aini {
        from{
          transform: translateY(-100%);
        }
        to{
          transform: translateY(0%);
        }
    }
.contain {
  width: 100%;
  height: 100vh ;
  background-image: url('https://img2.baidu.com/it/u=2831139371,2887176436&fm=253&fmt=auto&app=138&f=JPEG?w=700&h=438');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-wrapper {
  width: 358px;
  height: 518px;
  border-radius: 15px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
  
}
.register-wrapper .Header {
  width: 100%;
  font-size: 25px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}
.register-wrapper .input-item {
  width: 80%;
  display: block;
  margin: 0 auto;
  border: 0;
  border-bottom: 1px solid black;
  height: 50px;
  margin-bottom: 30px;
  outline: none;
  font-size: 15px;
}


.contain .register-wrapper .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  left: 130px;
  top: -30px;
}
.contain .register-wrapper .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.contain .register-wrapper .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.contain .register-wrapper .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.contain .register-wrapper .Footer{
  width: 80%;
        height: 30px;
        display: block;
        margin: 0 auto;
        color: #fff;
        background-image: linear-gradient(to right,#a6c1ee,#fbc2eb);
        cursor: pointer;
        border: 0;
        border-radius: 5px;
}
.contain .register-wrapper .msg{
  width: 80%;
        margin: 0 auto;
        text-align: center;
}
.contain .register-wrapper .msg a{
  color: #adc1ee
}
</style>
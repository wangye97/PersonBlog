<template>
    <div>
      <div class="wrapper">
          <transition name="hello" appear>
            <div class="login-contain">
              <div class="Header">Reset</div>
              <div>
                  <input type="text" class="input-item" :value="getUserInfo.username" :disabled="true">
                  <input ref="psw1" type="password" class="input-item" placeholder="oldPassword" v-model="user.password">
                  <input ref="psw2" type="password" class="input-item" placeholder="newPassword" v-model="user.newPwd">
                  <button class="Footer" @click="reset">Reset</button>
              </div>
          </div>
          </transition>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import {reqResetPassword,reqLogout} from '@/api'
  export default {
      name:'Reset',
      computed:{
         ...mapState({getUserInfo:(state)=>state.user.userInfo})
     },
      data() {
          return {
              user:{
                  password:'',
                  newPwd:'',
                  id:''
              }
          }
      },
      methods:{
          async reset(){
            const {password,newPwd}=this.user
            if(password!=''&&newPwd!=''){
                this.user.id=this.getUserInfo.id
                let result=await reqResetPassword(this.user)
                if(result.data.code==200){
                    this.$message.success(result.data.data)
                    sessionStorage.clear('isLogin')
                    this.$router.push('/login')
                    reqLogout(this.user.id)
                }else{
                    this.$message.error(result.data.data)
                    if(result.data.data=='旧密码输入错误'){
                        this.password=''
                        this.$refs.psw1.focus()
                        
                    }
                }
            }
          }
      },
      mounted(){
       this.$refs.psw1.focus()
      }
  }
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
      .wrapper{
          width: 100%;
          height: 100vh;
          background-image: url('https://img1.baidu.com/it/u=3603228316,2235752900&fm=253&fmt=auto&app=120&f=JPEG?w=814&h=500');
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      .wrapper .login-contain{
          width: 358px;
          height: 518px;
          border-radius: 15px;
          margin: 0 auto;
          background-color: #fff; 
          overflow: hidden;
      }
      .wrapper .login-contain .Header{
          width: 100%;
          font-size: 25px;
          color: black;
          text-align: center;
          margin-bottom: 20px;
          margin-top: 30px;
      }
      .wrapper .login-contain .input-item{
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
      .wrapper .login-contain .Footer{
          width: 80%;
          height: 30px;
          display: block;
          margin: 0 auto;
          margin-bottom: 20px;
          color: #fff;
          background-image: linear-gradient(to right,#a6c1ee,#fbc2eb);
          cursor: pointer;
          border: 0;
          border-radius: 5px;
      }
      
  
  
      
  </style>
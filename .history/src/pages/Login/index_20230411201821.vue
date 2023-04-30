<template>
  <div>
    <div class="wrapper" ref="wrapper">
        <!-- <transition name="hello" appear> -->
            <div class="login-contain">
                <div class="Header">Login</div>
                <div>
                    <input ref="ipts" type="text" class="input-item" placeholder="username" v-model="user.username">
                    <input ref="psw" type="password" class="input-item" placeholder="password" v-model="user.password" @keydown.enter="login">
                    <button class="Footer" @click="login">Login</button>
                    <div class="msg">
                        Don't have account?
                        <a href="javascript:;" @click="$router.push('/register')">go sign up</a>
                    </div>
                </div>
        </div>
        <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
    name:'Login',
    data() {
        return {
            user:{
                username:'',
                password:''
            },
            //验证规则
            message:''
        }
    },
    methods:{
        async login(){
           try {
                if(this.user.username!=''&&this.user.password!=''){
                   let result= await this.$store.dispatch('validateLogin',this.user)
                   if(result.message){
                    this.$message.error(result.message)
                   }
                   if(result.code==200){
                        this.$message.success('登录成功')
                        sessionStorage.setItem('isLogin',1)
                        this.$router.replace('/index')
                   }else if(result.code==400){
                        this.$message(result.data)
                        if(result.data=='密码错误'){
                            this.user.password=''
                            this.$refs.psw.focus()
                        }else{
                            this.user.username=''
                            this.user.password=''
                            this.$refs.ipts.focus()
                        }

                    
                }
                   
                }
                else{
                    this.$message.error('账户名或密码不能为空')
                }

           } catch (error) {
                alert(error.message)
           }
        }
    },
    mounted(){
        this.$refs.ipts.focus()
        // gsap.to('.login-contain',{y:200,duration:1})
    }
}
</script>

<style scoped>
/* .hello-enter-active{
    animation: aini 1s linear;
  }
  
    @keyframes aini {
        from{
          transform: translateY(-100%);
        }
        to{
          transform: translateY(0%);
        }
    } */
    .wrapper{
        width: 100%;
        /* height: calc(100vh - 170px); */
        height: 100vh;
        background-image: url('https://img1.baidu.com/it/u=779394252,3452690001&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500');
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper .login-contain{
        width: 358px;
        height: 518px;
        border-radius: 15px;
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
    .wrapper .login-contain .msg{
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
    .wrapper .login-contain .msg a{
        color: #adc1ee
    }


    
</style>
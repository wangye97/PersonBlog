<template>
    <div class="wrapper-contain" ref="contain">
        <div class="wrapper" ref="wrapper">

            <transition-group name="login">
                <div class="login-contain" v-show="!isShow" :key="1">
                    <div class="Header">Login</div>
                    <div>
                        <input ref="ipts" type="text" class="input-item" placeholder="username" v-model="user.username">
                        <input ref="psw" type="password" class="input-item" placeholder="password"
                            v-model="user.password" @keydown.enter="login">
                        <div class="addTag-contain">
                            <input class="input-code" placeholder="Enter code" v-model="values">
                            <div ref="addTag" @click="getCode"></div>
                        </div>
                        <input type="checkbox" v-model="user.rememberMe" class="input-checkbox">记住我
                        <button class="Footer" @click="login">Login</button>
                        <!-- <div class="msg">
                            Don't have account?
                            <a href="javascript:;" @click="$router.push('/register')">go sign up</a>
                        </div> -->
                    </div>
                </div>

                
            </transition-group>

            <transition-group name="user">
                <div class="no-user" v-show="!isShow" :key="3">
                    <div class="user">
                        <h1>没有账号？</h1>
                        <h3>立即注册吧</h3>
                        <button @click="isShow = false">注册</button>
                    </div>
                </div>

                

            </transition-group>

            <transition-group name="login">
                <div class="no-user" v-show="isShow" :key="5">
                    <div class="user">
                        <h1>没有账号？</h1>
                        <h3>立即注册吧</h3>
                        <button @click="isShow = !isShow">注册</button>
                    </div>
                </div>
            </transition-group>

            <transition-group name="user">
                <div class="login-contain" v-show="isShow" :key="1">
                    <div class="Header">Login</div>
                    <div>
                        <input ref="ipts" type="text" class="input-item" placeholder="username" v-model="user.username">
                        <input ref="psw" type="password" class="input-item" placeholder="password"
                            v-model="user.password" @keydown.enter="login">
                        <div class="addTag-contain">
                            <input class="input-code" placeholder="Enter code" v-model="values">
                            <div ref="addTag" @click="getCode"></div>
                        </div>
                        <input type="checkbox" v-model="user.rememberMe" class="input-checkbox">记住我
                        <button class="Footer" @click="login">Login</button>
                        <!-- <div class="msg">
                            Don't have account?
                            <a href="javascript:;" @click="$router.push('/register')">go sign up</a>
                        </div> -->
                    </div>
                </div>

                
            </transition-group>
            
        </div>

      
    </div>
</template>

<script>
import Cookies from 'js-cookie'
//给cookie加密
import CryptoJS from "crypto-js";
import Config from '@/setting'
import axios from 'axios';
export default {
    name: 'Login',
    data() {
        return {
            user: {
                username: '',
                password: '',
                remember: ''
            },
            //验证规则
            message: '',
            //动态修改元素的高度
            elementHeight: '0px',
            innerHeigth: '0px',
            validation: '',
            values: '',
            isShow: 'true'
        }
    },
    methods: {
        async login() {
            try {
                if (this.validation.toLowerCase() == this.values.toLowerCase()) {
                    if (this.user.username != '' && this.user.password != '') {
                        let result = await this.$store.dispatch('validateLogin', this.user)
                        if (result.message) {
                            this.$message.error(result.message)
                            this.getCode()
                            this.values = ''
                        }
                        if (result.code == 200) {
                            if (this.user.rememberMe) {
                                Cookies.set('username', this.user.username, { expires: Config.tokenCookieExpires })
                                // Cookies.set('password',this.user.password,{expires:Config.tokenCookieExpires})
                                Cookies.set('password', CryptoJS.AES.encrypt(this.user.password, "123456789"), { expires: Config.tokenCookieExpires })
                                Cookies.set('remember', this.user.rememberMe, { expires: Config.tokenCookieExpires })
                            } else {
                                Cookies.remove('username')
                                Cookies.remove('password')
                                Cookies.remove('remember')
                            }
                            this.$message.success('登录成功')
                            this.$router.push('/index')
                        } else if (result.code == 400) {
                            this.$message(result.data)
                            this.getCode()
                            this.values = ''
                            if (result.data == '密码错误') {
                                this.user.password = ''
                                this.$refs.psw.focus()
                            } else {
                                this.user.username = ''
                                this.user.password = ''
                                this.$refs.ipts.focus()
                            }
                        }
                    }
                    else {
                        this.$message.error('账户名或密码不能为空')
                        this.getCode()
                        this.values = ''
                    }
                } else {
                    this.$message.error('验证码错误')
                    this.getCode()
                    this.values = ''
                }
            } catch (error) {
                alert(error.message)
            }
        },
        getCookie() {
            this.user.username = Cookies.get('username')
            this.user.password = CryptoJS.AES.decrypt(Cookies.get("password"), "123456789").toString(CryptoJS.enc.Utf8);
            this.user.rememberMe = Cookies.get('remember')
        },
        getCode() {
            axios({ url: 'http://127.0.0.1:8889/api/getCode', methods: 'get' })
                .then(res => {
                    this.validation = res.data.text
                    this.$refs.addTag.innerHTML = res.data.data
                })
        }
    },
    mounted() {
        this.getCode()
        this.$refs.ipts.focus()
        try {
            this.getCookie()
        } catch (error) {
        }
        // if(!sessionStorage.getItem('clientHeight')){
        //     sessionStorage.setItem('clientHeight',this.$refs.contain.clientHeight)
        // }
        // this.elementHeight=sessionStorage.getItem('clientHeight')+'px'
        // this.elementHeight=this.$refs.contain.clientHeight-1+'px'
        // window.addEventListener('resize',()=>{
        //     this.elementHeight=this.$refs.contain.clientHeight-1+'px'
        // })
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
.wrapper-contain {
    overflow: hidden;
    min-height: 100%;
    width: 100%;
    background: #fbc2eb;
    display: flex;
    align-items: center;
    background-image: url('https://img1.baidu.com/it/u=779394252,3452690001&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500');
    background-size: 100% 100%;
}

.wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.wrapper .login-contain {
    width: 375px;
    height: 450px;
    border-radius: 15px 0 0 15px;
    background-color: #fff;
    overflow: hidden;
}

.wrapper .no-user {
    width: 375px;
    height: 450px;
    background-image: linear-gradient(to right, rgb(183, 145, 78), rgb(112, 201, 99));
    border-radius: 0 15px 15px 0;
    display: flex;
    align-items: center;
    margin-left: 0;
    /* animation: move 1s linear; */
}

.wrapper .no-user .user {
    width: 80%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.wrapper .no-user .user h1 {
    color: white;
    font-size: 30px;
}

.wrapper .no-user .user h1 {
    color: white;
}

.wrapper .no-user .user button {
    width: 80%;
    height: 30px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    color: #fff;
    background-image: linear-gradient(to right, orange, rgb(112, 201, 99));
    cursor: pointer;
    border: 0;
    border-radius: 5px;
}


.wrapper .login-contain .Header {
    width: 100%;
    font-size: 25px;
    color: black;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 30px;
}

.wrapper .login-contain .input-item {
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

.wrapper .login-contain .addTag-contain {
    height: 54px;
    width: 80%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    cursor: pointer;
}

.wrapper .login-contain .input-code {
    margin-top: 25px;
    width: 40%;
    margin-bottom: 30px;
    display: block;
    outline: none;
    border: 0;
    border-bottom: 1px solid black;
    font-size: 15px;
}

.wrapper .login-contain .input-checkbox {
    margin: 0px 10px 10px 40px;
}

.wrapper .login-contain .Footer {
    width: 80%;
    height: 30px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    color: #fff;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    cursor: pointer;
    border: 0;
    border-radius: 5px;
}

.wrapper .login-contain .msg {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

.wrapper .login-contain .msg a {
    color: #adc1ee
}

.login-enter-active{
    animation: reseveMove 1s linear reverse;
}
.login-leave-active {
    animation: reseveMove 1s linear ;
}

.user-enter-active {
    animation: move 1s linear;
}

.user-leave-active {
    animation: move 1s linear reverse;
}

@keyframes move {
    from {
        transform: translateX(-100%);
        opacity: 1;
    }

    to {
        transform: translateX(0);
        opacity: 0;
    }
}
@keyframes reseveMove {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
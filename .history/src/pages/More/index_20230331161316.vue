<template>
  <div>
    <!-- 资源库 -->
    <div style="margin-top: 30px; overflow: hidden;">
        <h1>资源库</h1>
        <div class="contain">
            <div class="wrapper-top">
                <div style="margin-left: 20px;">
                    <button class="btn" style="margin-right: 10px;">资源分类</button>
                   
                    <span v-if="category=='学习类'">{{getStudyInfo[0].category}} (共{{getStudyInfo.length}}个资源)</span>
                    <span v-else-if="category=='娱乐类'">{{getPlayInfo[0].category}} (共{{getPlayInfo.length}}个资源)</span>
                    <span v-else>所有资源 (共{{getPlayInfo.length+getStudyInfo.length}}个资源)</span>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;" @click="category='学习类'">学习类</button>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;" @click="category='娱乐类'">娱乐类</button>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;" @click="category=''">查看全部资源</button>
                </div> 
                <div>
                    <input type="text" placeholder="搜索名称" class="ipts">
                    <button class="btn" style="background-color: green;margin: 0 20px; color: aliceblue;">搜索</button>
                </div>
            </div>

            <div v-show="category=='学习类'||category==''">
                <h1 style="text-align: center;">{{someStudyInfo[0].category}}</h1>
                <div class="wrapper-bottom">
                    <div class="wrapper-box" v-for="item in someStudyInfo" :key="item.id">
                        <img class="imgs" :src="item.imgUrl" alt="">
                        <div style="display: flex; flex-direction: column;">
                            <h1 style="margin: 15px 0;">{{item.title}}</h1>
                            <span>{{item.text}}</span>
                        </div>
                        <button class="btns" @click="Jump(item.jumpUrl)">{{item.content}}</button>
                    </div>
                </div>
                <button class="btn btnMore" @click="loadMore1" v-show="studyNum<getStudyInfo.length">加载更多</button>
            </div>

            <div v-show="category=='娱乐类'||category==''">
                <h1 style="text-align: center;">{{somePlayInfo[0].category}}</h1>
                <div class="wrapper-bottom">
                    <div class="wrapper-box" v-for="item in somePlayInfo" :key="item.id">
                        <img class="imgs" :src="item.imgUrl" alt="">
                        <div style="display: flex; flex-direction: column;">
                            <h1 style="margin: 15px 0;">{{item.title}}</h1>
                            <span>{{item.text}}</span>
                        </div>
                        <button class="btns" @click="Jump(item.jumpUrl)">{{item.content}}</button>
                    </div>
                </div>
                <button class="btn btnMore" @click="loadMore2" v-show="playNum<getPlayInfo.length">加载更多</button>
            </div>
        </div>
    </div>

    <!-- 图片库 -->
   <div>
        <h1>图片库</h1>
        <div class="image-gallery">
            <div class="image-contain">
                <img src="https://img0.baidu.com/it/u=3555546729,1369961285&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333" alt="">
            </div>
        </div>
   </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'More',
    data() {
        return {
            category:'',
            studyNum:6,
            playNum:3,
        }
    },
    computed:{
        //得到所有的资源
        ...mapState({getMoreInfo:(state)=>state.more.getMoreInfo}),
        //得到学习类的资源
        getStudyInfo(){
            return this.getMoreInfo.filter(item=>{
               return item.category=='学习类'
            })
        },
        //得到娱乐类的资源
        getPlayInfo(){
            return this.getMoreInfo.filter(item=>{
               return item.category=='娱乐类'
            })
        },
        //得到部分娱乐类的资源，加载更多时加载3个
        someStudyInfo(){
            return this.getStudyInfo.slice(0,this.studyNum)
        },
        //得到部分学习类的资源，加载更多时加载3个
        somePlayInfo(){
            return this.getPlayInfo.slice(0,this.playNum)  
        }
    },
    methods:{
        Jump(url){
            window.open(url,"_blank")
        },
        loadMore1(){
            this.studyNum+=3
        },
        loadMore2(){
            this.playNum+=3
        },
        
    },
    mounted(){
        this.$store.dispatch('getMoreInfo')
        
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin: 20px;
    }
    .contain{
        margin: 0 auto;
        width: 70%;
        background-color: rgb(233, 236, 247);
        border-radius: 20px;
        margin-bottom: 30px;
        overflow: hidden;
    }
    .contain .wrapper-top{
        width: 98%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(218, 221, 232);
        opacity: .6;
        position: relative;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 5px;

    }

    .contain .wrapper-top .ipts{
        height: 22px;
        width: 200px;
        border: none;
        border-radius: 5px;
        outline: none;
        color: darkgray;
    }
    .contain .btn{
        opacity: .5;
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 5px;
    }
    .contain .btnMore{
        display: block;
        margin: 10px auto;
    }
    .contain .wrapper-bottom{
        width: 100%;
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
    }
    .contain .wrapper-bottom .wrapper-box{
        width: 340.48px;
        margin: 10px 5px;
        height: 160px;
        border-radius: 15px;
        display: flex;
        justify-content: space-around;
        font-size: 15px;
        position: relative;
        z-index: 0;
        background-color: rgb(248, 251, 255);
        opacity: .9;
    }
    .contain .wrapper-bottom .wrapper-box .btns{
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        opacity: .5;
        font-size: 10px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
    .contain .wrapper-bottom .wrapper-box .imgs{
        width: 80px;
        height: 80px;
        margin: 10px;
    }

    .image-gallery{
        width: 70%;
        height: 300px;
        margin: 0 auto;
        background-color: rgb(233, 236, 247);
        border-radius: 20px;
        margin-bottom: 30px;
        overflow: hidden;
    }
    .image-gallery .image-contain{
        width: 252.92px;
        margin: 10px 5px;
        border-radius: 5px;
    }
    .image-gallery .image-contain img{
        width: 100%;
    }
</style>
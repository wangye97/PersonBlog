<template>
  <div>
    <!-- 资源库 -->
    <div style="margin-top: 30px; overflow: hidden;min-width: 1215px">
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
            <div class="image-wrapper">
                <div class="image-contain" v-for="item in someImg" :key="item.id" @click="checkImg(item)">
                    <img :src="item.imgUrl" alt="">
                </div>
            </div>
            <button class="btn" @click="loadMore3" v-if="imgNum<getMoreImg.length">加载更多</button>
        </div>
   </div>

   <div class="mark" ref="mark" :style="{top}">
        <img :src="imgUrl" alt="">
        <div @click="clearFork" class="fork">X</div>
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
            imgNum:8,
            imgUrl:'',
            top:'0'
        }
    },
    computed:{
        //得到所有的资源和图片
        ...mapState(
            {getMoreInfo:(state)=>state.more.getMoreInfo,
             getMoreImg:(state)=>state.more.getMoreImg
        }),
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
        },
        //得到部分学习类的资源，加载更多时加载3个
        someImg(){
            return this.getMoreImg.slice(0,this.imgNum)  
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
        loadMore3(){
            this.imgNum+=4
        },
        checkImg(item){
            this.top=document.documentElement.scrollTop+'px'
            this.imgUrl=item.imgUrl
            this.$refs.mark.style.display='block'
            document.documentElement.style.overflow = 'hidden';
        },
        clearFork(){
            this.$refs.mark.style.display='none';
            document.documentElement.style.overflow = 'auto';
        }
    },
    mounted(){
        this.$store.dispatch('getMoreInfo')
        this.$store.dispatch('getMoreImg')
    }
}
</script>

<style scoped>

    h1{
        text-align: center;
        margin: 20px;
    }
    .mark{
        width: 100%;
        height: 100%;
        position: absolute; 
        background-color: rgba(223, 21, 21, 0.26);
        top: 0;
        left: 0;    
        display: none;
    }
    .mark .fork{
        font-size: 20px;
        position: absolute;
        top: 25.2%;
        right: 29.8%;
        color: aqua;
        cursor: pointer;
    }
    .mark img{
        width: 600px;
        height: 350px;
        position: absolute;
        top: 0;
        left:0;
        bottom: 0;
        right: 0;
        margin: auto;

    }
   
    .contain{
        margin: 0 auto;
        width: 1215px;
        background-color: rgb(233, 236, 247);
        border-radius: 20px;
        margin-bottom: 30px;
        overflow: hidden;
    }
    .contain .wrapper-top{
        width: 1215px;
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
        width: 1100px;
        display: flex;
        overflow: hidden;
        margin: 0 auto;
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
        width: 1215px;
        margin: 0 auto;
        background-color: rgb(233, 236, 247);
        border-radius: 20px;
        margin-bottom: 30px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 1s;
    }
    .image-gallery .image-wrapper{
        display: flex;
        flex-wrap: wrap;
    }
    .image-gallery .image-contain{
        width: 252.92px;
        margin: 10px 5px;
        overflow: hidden;
        border-radius: 5px;
        /* height: 150px; */
    }
    .image-gallery .image-contain img{
        width: 100%;
        border-radius: 5px;
        height: 100%;
    }
    .image-gallery .image-contain img:hover{
        transform: scale(1.3);
        transition: all 1s;
        cursor: pointer;
    }
    .image-gallery  .btn{
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        opacity: .5;
        font-size: 10px;
        display: block;
        margin: 10px auto;
    }
</style>
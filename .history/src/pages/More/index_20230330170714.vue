<template>
  <div>
    <div style="margin-top: 30px;">
        <h1 style="text-align: center;">资源库</h1>
        <div class="contain">
            <div class="wrapper-top">
                <div style="margin-left: 20px;">
                    <button class="btn" style="margin-right: 10px;">资源分类</button>
                   
                    <span v-if="category=='学习类'">{{getStudyInfo[0].category}} (共{{getStudyInfo.length}}个资源)</span>
                    <span v-else-if="category=='娱乐类'">{{getPlayInfo[0].category}} (共{{getPlayInfo.length}}个资源)</span>
                    <span v-else>所有资源 (共{{getPlayInfo.length+getStudyInfo.length}}个资源)</span>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;">学习类</button>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;">娱乐类</button>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;">查看全部资源</button>
                </div> 
                <div>
                    <input type="text" placeholder="搜索名称" class="ipts">
                    <button class="btn" style="background-color: green;margin: 0 20px; color: aliceblue;">搜索</button>
                </div>
            </div>

            <div v-show="category=='学习类'||category==''">
                <h1 style="text-align: center;">{{getStudyInfo[0].category}}</h1>
                <div class="wrapper-bottom">
                    <div class="wrapper-box" v-for="item in getStudyInfo" :key="item.id">
                        <img class="imgs" :src="item.imgUrl" alt="">
                        <div style="display: flex; flex-direction: column;">
                            <h1 style="margin: 15px 0;">{{item.title}}</h1>
                            <span>{{item.text}}</span>
                        </div>
                        <button class="btns">{{item.content}}</button>
                    </div>
                </div>
            </div>

            <div v-show="category=='娱乐类'||category==''">
                <h1 style="text-align: center;">{{getPlayInfo[0].category}}</h1>
                <div class="wrapper-bottom">
                    <div class="wrapper-box" v-for="item in getPlayInfo" :key="item.id">
                        <img class="imgs" :src="item.imgUrl" alt="">
                        <div style="display: flex; flex-direction: column;">
                            <h1 style="margin: 15px 0;">{{item.title}}</h1>
                            <span>{{item.text}}</span>
                        </div>
                        <button class="btns">{{item.content}}</button>
                    </div>
                </div>
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
        }
    },
    computed:{
        ...mapState({getMoreInfo:(state)=>state.more.getMoreInfo}),
        getStudyInfo(){
            return this.getMoreInfo.filter(item=>{
               return item.category=='学习类'
            })
        },
        getPlayInfo(){
            return this.getMoreInfo.filter(item=>{
               return item.category=='娱乐类'
            })
        },
        
    },
    mounted(){
        this.$store.dispatch('getMoreInfo')
    }
}
</script>

<style scoped>
    .contain{
        margin: 0 auto;
        width: 70%;
        background-color: rgb(233, 236, 247);
        border-radius: 20px;
    }
    .contain .wrapper-top{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(218, 221, 232);
        opacity: .6;
        position: relative;
    }

    .contain .wrapper-top .ipts{
        height: 18px;
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
</style>
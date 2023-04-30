<template>
  <div>
    <div style="margin-top: 30px;">
        <h1>资源库</h1>
        <div class="contain">
            <div class="wrapper-top">
                <div style="margin-left: 20px;">
                    <button class="btn" style="margin-right: 10px;">资源分类</button>
                    <span>学习类 (共17个资源)</span>
                    <button class="btn" style="background-color: skyblue;margin-left: 10px;">查看全部资源</button>
                </div> 
                <div>
                    <input type="text" placeholder="搜索名称" class="ipts">
                    <button class="btn" style="background-color: green;margin: 0 20px; color: aliceblue;">搜索</button>
                </div>
            </div>
            <h1>学习类</h1>
            <div class="wrapper-bottom">
                <div class="wrapper-box" style="background-color: rgb(248, 251, 255);">
                    <img class="imgs" src="https://img1.baidu.com/it/u=2831570901,1353965474&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
                    <div style="display: flex; flex-direction: column;">
                        <h1 style="margin: 15px 0;">哔哩哔哩</h1>
                        <span>相信看到这的小伙伴都知道B站是个学习网站吧!</span>
                    </div>
                    <button class="btns">学习视频</button>
                </div>
                <div class="wrapper-box" style="background-color: #bfa;">1</div>
                <div class="wrapper-box" style="background-color: red;">1</div>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'More'
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
        width: 344.48px;
        margin: 10px 5px;
        height: 160px;
        display: flex;
        justify-content: space-around;
        font-size: 15px;
    }
    .contain .wrapper-bottom .wrapper-box .btns{
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        opacity: .5;
        font-size: 10px;
    }
    .contain .wrapper-bottom .wrapper-box .imgs{
        width: 80px;
        height: 80px;
        margin: 10px;
    }
</style>
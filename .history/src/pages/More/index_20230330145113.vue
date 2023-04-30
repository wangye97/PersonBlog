<template>
  <div>
    <div style="margin-top: 30px;text-align: center;">
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
                <div class="wrapper-box" style="background-color: aqua;">1</div>
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
        background-color: azure;
        border-radius: 20px;
    }
    .contain .wrapper-top{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(223, 225, 228);
    }
    .contain .wrapper-top .ipts{
        height: 25px;
        
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
    }
</style>
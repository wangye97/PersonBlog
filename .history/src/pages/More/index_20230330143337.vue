<template>
  <div>
    <div style="margin-top: 30px;text-align: center;">
        <h1>资源库</h1>
        <div class="contain">
            <div class="wrapper-top">
                <div>
                    <button>资源分类</button>
                    <span>学习类(共17个资源)</span>
                    <button>查看全部资源</button>
                </div> 
                <div>
                    <input type="text" placeholder="搜索名称">
                    <button>搜索</button>
                </div>
            </div>
            <h1>学习类</h1>
            <div class="wrapper-bottom">
                <div></div>
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
    }
</style>
<template>
  <div>
    <div style="margin-top: 30px;">
        <h1>资源库</h1>
        <div class="contain">
            <div>
                <div>
                    <button>资源分类</button>
                    <span>学习类(共17个资源)</span>
                    <button>查看全部资源</button>
                </div>
                <input type="text" placeholder="搜索名称">
            </div>
            <h1>学习类</h1>
            <div>
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
        width: 80%;
        background-color: azure;
    }

</style>
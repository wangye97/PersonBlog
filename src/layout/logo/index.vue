<template>
    <div class="logo">
        <img src="../../assets/image/logo.png" alt="">
        <p>自我探索个人系统</p>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    methods: {},
    mounted() { }
};
</script>
<style lang="scss" scoped>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 30px;
        margin-right: 15px;
    }
    p{
        color: white;
        font-size: 20px;
    }
}
</style>
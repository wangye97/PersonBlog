<template>
    <div>
        <div class="particles-js-box">
            <div id="particles-js"></div>
        </div>
    </div>
</template>

<script>
import particlesJs from "particles.js";
import particlesConfig from "./particles.json";
export default {
    name: 'particles',
    components: {},
    data() {
        return {
        };
    },
    computed: {},
    methods: {
        init() {
            particlesJS("particles-js", particlesConfig);
            document.body.style.overflow = "hidden";
        }
    },
    mounted() {
        this.init();
    }
};
</script>
<style scoped>
.particles-js-box {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}

#particles-js {
    background-color: #211f1f;
    width: 100%;
    height: 100%;
}
</style>
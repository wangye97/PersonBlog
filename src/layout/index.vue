<template>
  <div class="all-contain">
    <div class="left-contain">
      <Logo></Logo>
      <Menu></Menu>
    </div>
    <div class="tabbar">
      <Tabbar></Tabbar>
    </div>
    <div class="main">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Menu from './menu'
import Logo from './logo'
import Tabbar from './tabbar'
import Main from './main'
export default {
  name: '',
  components: { Menu, Logo },
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
.all-contain {
  .left-contain {
    width: 260px;
    background-color: blue;
  }
}
</style>
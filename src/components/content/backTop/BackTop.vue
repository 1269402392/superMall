<template>
  <div class="back-top">
    <img src="~assets/img/common/backTop.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 55px;
    img{
      width: 33px;
      height: 33px;
      z-index: 99;
    }
  }
</style>
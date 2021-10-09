<template>
  <div class="shop-cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "ShopCart",
    components: {
      NavBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style lang="less" scoped>
  .cart-nav{
    background: #eb4868;
    div{
      color: #ffffff;
      font-weight: bold;
    }
  }
</style>
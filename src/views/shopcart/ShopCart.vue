<template>
  <div class="shop-cart">
    <!--导航-->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!--商品列表-->
    <shop-cart-list/>
    <!--底部汇总-->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import NavBar from "components/common/navbar/NavBar";
  import ShopCartList from "./childComps/ShopCartList";
  import Scroll from "components/common/scroll/Scroll";
  import CartBottomBar from "./childComps/CartBottomBar";
  export default {
    name: "ShopCart",
    components: {
      NavBar,
      Scroll,
      ShopCartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style lang="less" scoped>
  .shop-cart{
    .cart-nav{
      background: #eb4868;
      div{
        color: #ffffff;
        font-weight: bold;
      }
    }

  }

</style>
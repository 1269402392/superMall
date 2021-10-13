<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <shop-cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :product="item"/>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Scroll from "components/common/scroll/Scroll";
  import ShopCartListItem from "./ShopCartListItem";

  export default {
    name: "ShopCartList",
    components: {
      Scroll,
      ShopCartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .content{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
  .cart-list{
    height: 100vh
  }
</style>
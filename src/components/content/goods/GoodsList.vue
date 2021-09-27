<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goodsList" :goodsItemList="item">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods{
    /*margin-top: 10px;*/
    /*box-sizing: border-box;*/
    /*width: 100%;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
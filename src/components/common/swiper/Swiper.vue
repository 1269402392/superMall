<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in imageList" :key="item.index"><img :src="item" class="banner-img"></van-swipe-item>
  </van-swipe>
</template>

<script>
  import { Swipe, SwipeItem } from 'vant';

  export default {
    name: "Swiper",
    props: {
      imageList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swipe,
      SwipeItem
    }
  }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
    height: 200px;
  }
  .my-swipe img{
    width: 100%;
  }
</style>
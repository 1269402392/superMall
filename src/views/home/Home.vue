<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <home-fashion-view :fashions="recommends"/>
    <tab-control class="tab-control" :titles="titles"/>
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>

  import HomeSwiper from "./homeChild/HomeSwiper";
  import HomeRecommendView from "./homeChild/HomeRecommendView";
  import HomeFashionView from "./homeChild/HomeFashionView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/TabControl/TabControl"

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "HOME",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFashionView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ["流行","新款","精选"],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
      //请求商品数据
      getHomeGoods("pop",1).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style type="text/less" scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: rgba(246,122,130,1);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background: #fff;
  }
</style>
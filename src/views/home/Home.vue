<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <Scroll class="content"
            :probe-type="3"
            ref="scroll"
            @contentScroll="contentScroll"
            :pull-up-load="true"
            @loadMore="loadMore">
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <home-fashion-view :fashions="recommends"/>
      <tab-control class="tab-control"
                   :titles="titles"
                   @tabClick="tabClick"/>
      <goods-list :goodsList="showGoods"/>
    </Scroll>
    <back-top v-show="showBackTop" @click.native="backClick"/>
  </div>
</template>

<script>

  import HomeSwiper from "./homeChild/HomeSwiper";
  import HomeRecommendView from "./homeChild/HomeRecommendView";
  import HomeFashionView from "./homeChild/HomeFashionView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/TabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeMultidata,getHomeGoods} from "network/home";

  export default {
    name: "HOME",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFashionView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ["流行","新款","精选"],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        showBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods: {
      /**
       * 网络请求相关
       */
      //请求多个数据 轮播图 流行时尚
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },
      //商品展示
      getHomeGoods(type) {
        const page = this.goods[type].page += 1;
        getHomeGoods(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.data.list);

          this.$refs.scroll.finishPullUp()
        })

      },
      /**
       * 事件监听相关
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
      },
      /**
       * Better-Scroll滚动相关
       */
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        this.showBackTop = -position.y > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
      }
    }
  }
</script>

<style type="text/less" scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
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
  .content{
    height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>
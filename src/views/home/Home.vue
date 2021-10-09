<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="titles"
                 ref="tabControl1"
                 @tabClick="tabClick"
                 class="tab-control"
                 v-show="isTabFixed"/>
    <Scroll class="content"
            :probe-type="3"
            ref="scroll"
            @contentScroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend-view :recommends="recommends" />
      <home-fashion-view :fashions="recommends"/>
      <tab-control :titles="titles"
                   ref="tabControl2"
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
  import {itemListenerMixin} from "../../common/mixin";

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
        showBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    mixins: [itemListenerMixin],
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      //请求多个数据
      this.getHomeMultidata();

      //请求商品数据
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    mounted() {

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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      //获取tabControl的offsetTop
      //所有组件都有一个属性$el , 用于获取组件中的元素
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      /**
       * Better-Scroll滚动相关
       */
      backClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        //判断BackTop是否显示
        this.showBackTop = -position.y > 1000
        //判断offsetTop是否吸顶(position : fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
      },
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // 1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()
      // 2.取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
  }
</script>

<style type="text/less" scoped>
  #home{
    height: 100vh;
    position: relative;
    padding-top: 44px;
  }
  .home-nav{
    background-color: rgba(246,122,130,1);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .content{
    height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .tab-control{
    position: relative;
    z-index:8;
    background: white;
  }
</style>
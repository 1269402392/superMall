<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content" :probe-type="3" ref="scroll" @contentScroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info @imageLoad="imageLoad" :detail-info="detailInfo"/>
      <detail-goods-param ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods-list="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top v-show="showBackTop" @click.native="backClick"/>

  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailGoodsParam from "./childComps/DetailGoodsParam";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail.js'
  import {itemListenerMixin} from "../../common/mixin";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        currentIndex: 0,
        showBackTop: false
      }
    },
    mixins: [itemListenerMixin],
    components: {
      Scroll,
      BackTop,
      GoodsList,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailBottomBar,
      DetailGoodsInfo,
      DetailGoodsParam,
      DetailCommentInfo,
    },
    created() {
      //保存传入的商品id
      this.iid = this.$route.params.id
      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.data.result
        //轮播图数据
        this.topImages = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取商家信息对象
        this.shop = new Shop(data.shopInfo)
        //保存商品详情数据
        this.detailInfo = data.detailInfo
        //获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //取出评论信息
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }

      })
      //请求推荐数据
      getRecommend().then(res => {
        console.log(res)
        this.recommends = res.data.data.list
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
        //获取标题的offsetTop
        this.$nextTick(() => {
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.param.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        })
      },
      titleClick(index) {
        //点击标题跳转到相应的位置
        this.$refs.scroll.scrollTo(0 ,-this.themeTopYs[index], 800)
      },
      contentScroll(position) {
        //内容滚动显示正确的标题
        // 1.获取y值
        const positionY = -position.y
        const length = this.themeTopYs.length;
        // 2.positionY和主题中的值进行对比
        // this.currentIndex !== i -> 解决重复问题
        for (let i = 0; i < length; i++) {
          if(this.currentIndex !== i && ((i < length - 1 && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) || (i == length - 1 && positionY >= this.themeTopYs[i]))) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        //判断BackTop是否显示
        this.showBackTop = -position.y > 1000
        //判断offsetTop是否吸顶(position : fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      backClick() {
        //返回顶部
        this.$refs.scroll.scrollTo(0,0)
      },
      addToCart() {
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.price
        product.iid = this.iid
        product.realPrice = this.goods.realPrice
        this.$store.dispatch('addCartList',product)
      }
    },
    destroyed() {
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    top: 0;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
    background: #fff;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background: #fff;
  }
</style>
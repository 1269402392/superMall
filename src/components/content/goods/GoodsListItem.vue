<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" :key="showImage" @load="imageLoad" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit("itemImageLoad")
      },
      itemClick() {
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style lang="less" scoped>

  .goods-item{
    width: 48%;
    margin-bottom: 15px;
    >img{
      width: 100%;
      height: 216px;
      border-radius: 5px;
    }
    >.goods-info{
      font-size: 13px;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        margin-bottom: 8px;
      }
      >.collect{
        display: inline-block;
        width: 40px;
        background: url("~assets/img/home/like.png") 0px 0.5px no-repeat;
        background-size: 13px;
        padding-left: 15px;
      }
    }
  }
</style>
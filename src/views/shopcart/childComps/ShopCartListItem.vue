<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-button @click.native="checkClick" :is-checked="product.checked"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.realPrice}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "ShopCartListItem",
    components: {
      CheckButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
  #shop-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 5px;
    border-bottom: 1px solid #ccc;

  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 12px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
  }
  .info-bottom .item-price {
    color: orangered;
  }
</style>
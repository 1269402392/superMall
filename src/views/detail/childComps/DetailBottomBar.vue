<template>
  <div class="bottom-bar">
    <div class="left-box">
      <ul>
        <li>
          <img src="~assets/img/detail/collections.png" alt="">
          <a href="##">客服</a>
        </li>
        <li>
          <img src="~assets/img/detail/Store.png" alt="">
          <a href="##">店铺</a>
        </li>
        <li>
          <img src="~assets/img/detail/customer.png" alt="">
          <a href="##">收藏</a>
        </li>
      </ul>
    </div>
    <div class="right-box">
      <div><a href="##" @click="addToCart">加入购物车</a></div>
      <div><a href="##">购买</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailButtonBar",
    methods: {
      addToCart() {
        this.$emit('addToCart');
      }
    }
  }
</script>

<style lang="less" scoped>
  .bottom-bar{
    box-sizing: border-box;
    height: 49px;
    background: #fff;
    position: fixed;
    width: 100%;
    bottom: 0px;
    display: flex;
    >div{
     width: 50%;
    }
    .left-box{
      ul{
        display: flex;
        justify-content: space-between;
        padding: 0px 8px;
        li{
          text-align: center;
          margin-top: 5px;
          img{
            width: 22px;
            display: block;
          }
          a{
            font-size: 13px;
          }
        }
      }
    }
    .right-box{
      display: flex;
      div{
        width: 50%;
        text-align: center;
        line-height: 49px;
        a{
          color: black;
        }
        &:first-child{
          background: rgba(251,211,4,1);
        }
        &:last-child{
          background: rgba(248,97,132,1);
          color: black;
        }
      }
    }
  }

</style>
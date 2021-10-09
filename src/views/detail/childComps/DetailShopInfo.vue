<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(val) {
        return (val / 10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-info{
    padding: 20px 10px;
    box-sizing: border-box;
    .shop-top{
      margin-bottom: 30px;
      img{
        width: 50px;
        border: 2px solid #999999;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 15px;
      }
      >.title{
        font-size: 15px;
      }
    }
    .shop-middle{
      display: flex;
      justify-content: space-between;
      .shop-middle-left{
        margin: 15px;
        display: flex;
        height: 40px;
        padding-right: 20px;
        border-right: 1px solid #999999;
        .info-sells{
          text-align: center;
          margin-right: 20px;
          .sells-count{
            font-size: 17px;
            margin-bottom: 6px;
          }
          .sells-text{
            font-size: 13px;
          }
        }
        .info-goods{
          text-align: center;
          .goods-count{
            font-size: 17px;
            margin-bottom: 6px;
          }
          .goods-text{
            font-size: 13px;
          }
        }
      }
      .shop-middle-right{
        font-size: 13px;
        tr{
          display: block;
          margin-bottom: 8px;
          td{
            display: inline-block;
          }
          .score{
            width: 35px;
            text-align: left;
            margin-left: 10px;
            color: #5ea732;
          }
          .score-better{
            color: #f13e3a;
          }
          .better-more span{
            color: #f13e3a;
            background: #f13e3a !important;
          }
          .better{
            span{
              display: inline-block;
              width: 15px;
              height: 15px;
              background: #5ea732;
              color: #fff;
              text-align: center;
              line-height: 16px;
              font-size: 12px;
            }
          }
        }
      }
    }
    .shop-bottom{
      .enter-shop{
        width: 40%;
        text-align: center;
        background: rgba(237,242,247);
        height: 30px;
        font-size: 13px;
        line-height: 30px;
        border-radius: 10px;
        color: black;
        margin: 5px auto;
      }
    }
  }
</style>
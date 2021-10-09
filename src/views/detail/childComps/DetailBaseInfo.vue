<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-services-item" v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .base-info{
    >div{
      padding: 0px 10px;
    }
    box-sizing: border-box;
    .info-title{
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 10px;
      margin-top: 15px;
    }
    .info-price{
      .n-price{
        font-size: 21px;
        color: red;
      }
      .o-price{
        font-size: 14px;
        color: #999999;
        text-decoration: line-through;
        display: inline-block;
        margin: 0px 10px;
      }
      .discount{
        display: inline-block;
        font-size: 12px;
        width: 50px;
        height: 15px;
        line-height: 15px;
        text-align: center;
        background: red;
        color: white;
        border-radius: 15px;
        position: relative;
        top: -2px;
      }
    }
    .info-other{
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
      color: #666666;
      border-bottom: 1px dashed #999999;
      padding-bottom: 15px;
    }
    .info-service{
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      border-bottom: 5px solid rgba(244,244,244);
      padding: 0px 5px 15px 5px;
      .info-services-item{
        img{
          margin-right: 3px;
          width: 14px;
          vertical-align: middle;
        }
      }

    }
  }
</style>
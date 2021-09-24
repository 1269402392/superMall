<template>
  <div class="fashion">
    <h3 class="fashion-title">本周流行</h3>
    <ul>
      <li v-for="item in fashions" :key="item.index">
        <img :src="item.image" alt="">
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
    <ul>
      <li v-for="item in fashions" :key="item.index">
        <img :src="item.image" alt="">
        <a :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeFashionView",
    props: {
      fashions: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .fashion{
    .fashion-title{
      text-align: center;
      margin-top: 20px;
    }
    >ul{
      display: flex;
      text-align: center;
      margin-top: 15px;
      li{
        flex:1;
        img{
          width: 70px;
        }
      }
    }
  }
</style>
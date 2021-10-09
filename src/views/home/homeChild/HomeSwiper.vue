<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in banners" :key="item.index" >
        <img :src="item.image" alt="" @load="imageLoad" class="banner-img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "homeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      imageLoad() {
        if(!this.isLoad) {
          this.$emit('swiperImageLoad');
          this.isLoad = true;
        }


      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .banner-img{
    width: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
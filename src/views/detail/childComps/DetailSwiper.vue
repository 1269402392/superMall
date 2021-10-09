<template>
  <swiper :image-list="topImages"/>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  export default {
    name: "detailSwiper",
    components: {
      Swiper
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
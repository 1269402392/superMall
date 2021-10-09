<template>
  <div>
    <nav-bar>
      <div slot="left" class="backImg" @click="backClick">
        <img src="~assets/img/detail/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             :key="item"
             @click="titleClick(index)"
        :class="{active: index === currentIndex}">{{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
        this.$emit('titleClick',index)
      },
      backClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .active{
    color: red;
  }
  .backImg img{
    width: 20px;
    margin-top: 13px;
  }
</style>
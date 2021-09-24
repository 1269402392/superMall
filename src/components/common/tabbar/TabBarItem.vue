<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor:{
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      activeStyle() {
        return this.isActive ? {color : this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    font-size: 14px;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item div{
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
  .active{
    color: red;
  }
</style>
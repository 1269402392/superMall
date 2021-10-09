<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles" :class="{active : currentIndex === index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)
      },
    },
  }
</script>

<style scoped lang="less">
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;

    .tab-control-item{
      flex: 1;
    }
  }
  .active{
    color: deeppink;
    span{
      border-bottom: 3px solid deeppink;
      padding-bottom: 2px;
    }
  }
</style>
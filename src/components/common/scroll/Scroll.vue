<template>
  <div class="wrapper"  ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        message: "aaa",
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      //监听滚动位置
      this.scroll.on("scroll", (position) => {
        this.$emit("contentScroll",position)
      })
      //监听上拉事件
      this.scroll.on('pullingUp', () => {
        this.$emit("loadMore")
      })
      //3.监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x,y,time=500) {
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      },
    }
  }
</script>

<style scoped>

</style>
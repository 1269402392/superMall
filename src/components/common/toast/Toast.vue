<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props: {
      message: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      shows(message = "默认显示", duration = 1500 ) {
        this.isShow = true;
        this.message = message

        setTimeout(() => {
          this.isShow = false;
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    color: #fff;
    z-index: 99;
    border-radius: 10px;
    background: rgba(0,0,0,.75);
  }
</style>
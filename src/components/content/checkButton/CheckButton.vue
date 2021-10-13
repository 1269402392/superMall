<template>
  <div class="check-button"  :class="{check: isChecked}">
    <img src="~assets/img/cart/yes.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
  }
  .check-button img{
    width: 15px;
    border-radius: 50%;
  }
  .check{
    border-color: red;
    background: red;
  }
</style>
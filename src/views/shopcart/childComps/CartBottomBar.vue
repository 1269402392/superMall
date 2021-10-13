<template>
  <div class="bottom-bar">
    <div class="check-box">
      <check-button
        :is-checked="isSelectAll"
        @click.native="allCheckedClick"
      />
      <span @click="allCheckedClick">全选</span>
    </div>
    <div class="total">
      {{totalPrice}}
    </div>
    <div class="computedBtn" @click="account">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    components: {CheckButton},
    data() {
      return {
        isChecked: false
      }
    },
    computed: {
      ...mapGetters(['cartList','isSelectAll']),
      totalPrice() {
        return "合计 ￥:" + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item)=> {
          return preValue + item.realPrice * parseInt(item.count)
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.reduce((preValue, item) => {
          return preValue + item.count
        },0)
      },

    },
    methods: {
      allCheckedClick() {
        this.$store.dispatch('allCheckedClick')
      },
      account() {
        if (!this.isSelectAll) {
          this.$toast.shows("请选择商品",1500)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .bottom-bar{
    height: 40px;
    width: 100%;
    background: #eee;
    position: fixed;
    bottom: 49px;
    display: flex;
    line-height: 40px;
    justify-content: space-between;
    *{
      font-size: 15px;
    }
    .computedBtn{
      background: red;
      color: #ffffff;
      width: 100px;
      text-align: center;
      font-size: 14px;
    }
  }
  .check-box{
    line-height: 23px;
    margin-top: 10px;
    >.check-button{
      margin:0px 5px;
      img{
        vertical-align: middle;
      }
      width: 15px;
      height: 15px;
    }

    display: flex;
  }
  .check-box{

  }
</style>
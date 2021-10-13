export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  //按钮是否全选 数字取反 -> 非0为真
  isSelectAll(state) {
    if(state.cartList.length === 0) return false
    return !state.cartList.find(item => !item.checked)
  }
}

export default {
  addCounter(state, payload) {
    payload.count++
  },
  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  editAllChecked(state, payload) {
    if (!payload) {
      state.cartList.forEach(item => {
        item.checked = true
      })
    } else {
      state.cartList.forEach(item => {
        item.checked = false
      })
    }
  }
}

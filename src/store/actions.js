export default {
  addCartList(context, payload) {
    let oldPayload = context.state.cartList.find(item => {
      return item.iid == payload.iid
    })
    if(oldPayload) {
      context.commit('addCounter', oldPayload)
    }else{
      payload.count = 1
      context.commit('addToCart', payload)
    }
  }
}
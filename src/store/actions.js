export default {
  addCartList(context, payload) {
    return new Promise((resolve, reject) => {
      let oldPayload = context.state.cartList.find(item => {
        return item.iid == payload.iid
      })
      if(oldPayload) {
        context.commit('addCounter', oldPayload)
        //响应添加成功后的回条信息 resolve
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        context.commit('addToCart', payload)
        resolve('添加了新的商品')
      }
    })
  },
  allCheckedClick(context, payload) {
    if (context.getters.isSelectAll) {
      context.commit('editAllChecked',true)
    } else {
      context.commit('editAllChecked',false)
    }
  }

}
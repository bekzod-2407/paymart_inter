export function addToCart({ commit }, payload) {
  commit('addToCart', payload)
}

export function removeCartItem({commit}, payload){
  commit('removeCartItem', payload)
}
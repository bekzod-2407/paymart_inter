export function addToCart(state, payload){
    state.items.push(payload)
}

export function removeCartItem(state, payload){
    state.items = state.items.filter(item => item.id !== payload)
}
export function login({commit}, payload){
  commit('signIn', payload)
}

export function logout({commit}) {
  commit('signOut');
}

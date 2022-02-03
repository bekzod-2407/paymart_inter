export function signIn(state, { isAuthenticated, token }){
    state.isAuthenticated = isAuthenticated;
    state.token = token;
}

export function signOut(state){
    state.isAuthenticated = false;
    state.token = null;
}

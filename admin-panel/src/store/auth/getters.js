export function isAuthenticated(state) {
    return !!state.isAuthenticated;
}

export function token(state) {
    return state.token;
}

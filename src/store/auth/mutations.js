/*
export function someMutation (state) {
}
*/
export const SET_AUTH = (state, payload) => {
    state.isLogged = payload.isLogged
}

export const SET_COMPANIES = (state, payload) => {
    state.companies = payload
}
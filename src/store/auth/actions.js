import { api } from "../../boot/axios";
/*
export function someAction (context) {
}
*/
export const Login = async ({ commit }, loginData) => {
    try {
        const res = await api.post('dataapp/loginpagos', loginData)
        if (res) {
            commit('SET_AUTH', { isLogged: true })
            localStorage.setItem('b1session', res.headers['b1session'])
            localStorage.setItem('routeid', res.headers['routeid'])
        }
    } catch (error) {

    }
}

export const Logout = ({ commit }) => {
    commit('SET_AUTH', { isLogged: false })
    localStorage.removeItem('b1session')
    localStorage.removeItem('routeid')
}

export const GetCompanies = async ({ commit }) => {
    try {
        const res = await api.get('dataapp/sociedades')
        if (res) {
            commit('SET_COMPANIES', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}
import axios from "axios";
import { api } from "../../boot/axios";
/*
export function someAction (context) {
}
*/
export const Login = async ({ commit }, loginData) => {
    try {
        console.log(loginData)
        const res = await api.post('Login', loginData)
        if (res) {
            commit()
        }
    } catch (error) {

    }
}

export const GetCompanies = async ({ commit }) => {
    try {
        const res = await axios.get('https://localhost:5001/api/dataapp/sociedades')
        if (res) {
            commit('SET_COMPANIES', res.data)
        }
    } catch (error) {
        console.log(error)
    }
}
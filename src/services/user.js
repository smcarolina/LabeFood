import axios from "axios"
import {BASE_URL} from '../constants/url.js'
import { goToHomePage } from "../routes/Coordinator"

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            clear()
            goToHomePage(history)
        })
        .catch((error)=>{
            alert(error.response.message)
        })
}

export const signup = (body, clear, history) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((response)=>{
            console.log(response)
            localStorage.setItem("token", response.data.token)
            clear()
            goToHomePage(history)
        })
        .catch((error)=>{
            console.log(error)
        })
}
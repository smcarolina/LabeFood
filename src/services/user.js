import axios from "axios"
import {BASE_URL} from '../constants/url.js'
import { goToAddresPage, goToHomePage } from "../routes/Coordinator"

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
            localStorage.setItem("token", response.data.token)
            clear()
            goToAddresPage(history)
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const addAddress = (body, clear, history) => {
    const token = localStorage.getItem("token")

    const headers = {
        auth: token
    }
    
    axios.put(`${BASE_URL}/address`, body, {headers})
    .then((response)=>{
        localStorage.setItem("token", response.data.token)
        goToHomePage(history)
        clear()
    })
    .catch((error)=>{
        console.log(error)
    })
}
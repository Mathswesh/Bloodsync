import axios from 'axios'

import {myaxios} from './helper'

export const signupuser = (data)=>{
    return myaxios.post("/signup",data)
    .then((response)=>response.data)
}

export const signinuser = async (data)=>{
    return axios.post("http://localhost:3000/login",data)
    .then((response)=>response.data)
}
export const userregistration = async (data)=>{
    return axios.post("http://localhost:3000/registration",data)
    .then((response)=>response.data)
}

export const hospitalpost = (data) => {
    return myaxios.post("/hospital/add",data)
    .then((response)=> response.data)
}

export const hospitalregestrationpost = (data) => {
    return axios.post("http://localhost:3000/hospitalregistration",data)
    .then((response)=> response.data)
}

export const hospitalregestrationloginpost = (data) => {
    return axios.post("http://localhost:3000/hospitalregistrationsignin",data)
}
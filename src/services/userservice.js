import {myaxios} from './helper'

export const signupuser = (data)=>{
    return myaxios.post("/signup",data)
    .then((response)=>response.data)
}

export const signinuser = async (data)=>{
    return myaxios.post("/",data)
    .then((response)=>response.data)
}

export const hospitalpost = (data) => {
    return myaxios.post("/hospital/add",data)
    .then((response)=> response.data)
}
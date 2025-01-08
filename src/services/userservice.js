import {myaxios} from './helper'

export const signin = (data)=>{
    return myaxios.post("/",data)
    .then((response)=>response.data)
}

export const hospitalpost = (data) => {
    return myaxios.post("/hospital/add",data)
    .then((response)=> response.data)
}
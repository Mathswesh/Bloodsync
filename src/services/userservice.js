import {myaxios} from './helper'
export const signin(data)=>{
    return myaxios.post("/",data)
    .then((response)=>response.data)
}
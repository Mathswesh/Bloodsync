import axios from 'axios'

export const signupuser = async (data)=>{
    return axios.post("http://localhost:3000/signup",data)
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

export const hospitalpost = async (data) => {
    return axios.post("http://localhost:3000/hospital/add",data)
    .then((response)=> response.data)
}

export const hospitalregestrationpost = async (data) => {
    return axios.post("http://localhost:3000/hospitalregistration",data)
    .then((response)=> response.data)
}

export const hospitalregestrationloginpost = async (data) => {
    return axios.post("http://localhost:3000/hospitalregistrationsignin",data)
}

export const addhospitaleventpost = async (data) => {
    return axios.post("http://localhost:3000/event/add",data)
}

export const userhospitalareapost = async (data) => {
    return axios.post("http://localhost:3000/userhospitalarea",data)
}

export const userprofilepost = async (data) =>{
    return axios.post("http://localhost:3000/userformprofile",data)
}

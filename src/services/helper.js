import axios from 'axios'

export const url = "http://localhost:3001";

export const myaxios = axios.create({
    URL:url,
})
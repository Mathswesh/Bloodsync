import { configureStore } from "@reduxjs/toolkit";
// import signupReducer from './slices/signupslice';
import hospitalReducer from './slices/hospitalslice';
import userformReduce from  './slices/userformsslice'
export const store = configureStore({
    reducer:{
        userformdata: userformReduce,
        hospitaldata: hospitalReducer,
    },
})



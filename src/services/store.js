import { configureStore } from "@reduxjs/toolkit";
import signupReducer from './slices/signupslice';
import hospitalReducer from './slices/hospitalslice';

export const store = configureStore({
    reducer:{
        singupdata: signupReducer,
        hospitaldata: hospitalReducer,
    },
})



import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice";

const store=configureStore({
    reducer:{
        //your reducer here.......
        mycounter:counterReducer
    }
})


export default store;
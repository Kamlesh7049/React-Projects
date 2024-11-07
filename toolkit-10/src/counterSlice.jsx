import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:"myCount",
    initialState:{
        data:0
    },
    reducers:{
        incBy10:(state)=>{
            state.data=state.data+10;

        },
        decBy10:(state)=>{
            state.data=state.data-10;
        }
    }
     
})
export const {incBy10,decBy10}=counterSlice.actions;
export default counterSlice.reducer;
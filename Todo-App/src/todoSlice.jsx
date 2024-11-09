
import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addData:(state,actions)=>{
            // let wrk=actions.payload
            // let mydata={id:Date.now(),work:wrk}
            // state.task.push(mydata)   //1 method


            
         state.task.push(actions.payload)//2nd method
        }
    }
})
export const {addData}=todoSlice.actions;
export default todoSlice.reducer;
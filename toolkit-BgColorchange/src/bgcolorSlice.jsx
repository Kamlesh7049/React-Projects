import { createSlice } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgclr:"yellow"
    },
    reducers:{
        colorchange:(state)=>{
            state.bgclr="green";
        }
    }
})
export const{colorchange}=bgcolorSlice.actions;
export default bgcolorSlice.reducer;

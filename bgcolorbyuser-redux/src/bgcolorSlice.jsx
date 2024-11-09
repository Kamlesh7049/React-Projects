import { createSlice  } from "@reduxjs/toolkit";
const bgcolorSlice=createSlice({
    name:"mycolor",
    initialState:{
        bgcolor:"pink"
    },
    reducers:{
        colorChange:(state,actions)=>{
            //console.log(actions);
            //console.log(actions.payLoad);
            state.bgcolor=actions.payload;
        }
    }
})
export const {colorChange}=bgcolorSlice.actions;
export default bgcolorSlice.reducer;
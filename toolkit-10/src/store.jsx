import { configureStore } from "@reduxjs/toolkit";
import cntReducer from "./counterSlice";

const store = configureStore({
  reducer: { // Use 'reducer' (lowercase)
    myCount: cntReducer, // 'myCount' will be the key in the state
  },
});

export default store;

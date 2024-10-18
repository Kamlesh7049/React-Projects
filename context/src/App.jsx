import { createContext } from "react";
import { useState } from "react";
import Comp1 from "./Comp1"
const myContext=createContext();
const App=()=>{
    const[user,setUser]=useState("Kartik");
    return(
       <>
       <h1>Welcom :{user}</h1>
       <myContext.Provider value={{user}}>
        <Comp1/>   
       </myContext.Provider>
       </>
    )
}
export default App;
export{myContext};
import { useContext } from "react";
import { myContext } from "./App";
const Comp5=()=>{
    const{user}=useContext(myContext)
    return(
        <>
        <h1>Component-5 bye:{user}</h1> 
        </>
    )
}
export default Comp5; 
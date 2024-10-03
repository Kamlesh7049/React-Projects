
import { useState } from "react";
const App=()=>{
  const [color,setColor]=useState("Red");
  
  return(
    <>
    
    <h1 style={{color:color}}>My favourite color:{color}</h1>
    <button onClick={()=>{setColor("green")}}>Green</button>
    <button onClick={()=>{setColor("orange")}}>orange</button>
    <button onClick={()=>{setColor("aqua")}}>aqua</button>
    <button onClick={()=>{setColor("blue")}}>blue</button>
    </> 
  )
}
export default App;

import { useContext, useState } from "react"
import { colorContext } from "./MyContext";


const BgColor = () => {
    const [clr,setClr]=useContext(colorContext);
    const [txtval,setTxtval]=useState("")
  return (
    <>
    <h1>Change Background Color!</h1>
    Enter any Color:<input type="text" value={txtval} onChange={(e)=>{setTxtval(e.target.value)}}/>
    <button onClick={()=>{setClr(txtval)}}>Change color</button>
    <div style={{width:"300px",height:"200px",backgroundColor:clr}}>
    </div>
    </>
  )
}

export default BgColor;

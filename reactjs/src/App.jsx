import { useState } from "react";

const App =()=>{
  const [name,setName]=useState("");
  const [city,setCity]=useState("")
  return(
    <>
    <h1>Application Form</h1>
    Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    Enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
    <button>Submit</button>
    </>

  )

}
export default App;
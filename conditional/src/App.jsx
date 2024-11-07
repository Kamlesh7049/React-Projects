import { useState } from "react";
import Cybrom from "./Cybrom";
import Bhopal from "./Bhopal";





// const App = () => {
//   const [status,setStatus]=useState(false)

//   if(status==true)
//   {
//     return(
//       <>
//       <Cybrom/>
//       </>
//     )
//   }
//   else
//   {
//     return(
//       <>
//       <Bhopal/>
//       </>
//     )
//   }
 
// }

// export default App;

// ===================================================================



// const App = () => {
//   const [status,setStatus]=useState(true);

    //logical && operator
    //{condition && statement}

//   return (
//     <>
//     <h1>This is my App Program</h1>
//     {status==true && <Cybrom/>}
//     </>
    
    
//   )
// }

// export default App;


// ================================================================


const App = () => {
  const [status, setStatus]=useState(false)

  //condition ? trueStatement : falseStatement

  return (
    <>
    <h1>This is my App program</h1>
    {status ? <Cybrom/> : <Bhopal/>}
    <button onClick={()=>{setStatus(true)}}>click here</button>
    </>
  )
}

export default App
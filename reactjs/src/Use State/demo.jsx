
// import { useState } from "react";

// App.jsx 
// -------------


// import { useState } from "react";
// const App=()=>{
//   const [name,setName]=useState("Kamlesh");
  
//   const myname=()=>{
//     setName("Ankita")
  
    
//   }
//   return(
//     <>
    
//     <h1>Welcome To  React HOOKs !!</h1>
//     <h1>My name:{name}</h1>
//     <button onClick={myname}>Click here</button>
//     </> 
//   )
// }
// export default App;


// -------------------------------------------------------------------------


// import { useState } from "react";
// const App=()=>{
//   const [city,setCity]=useState("")
//   const display=()=>{
//     setCity("Indore!");
//   }
//   return (
//     <>
//     <h1>My City:{city}</h1>
//     <button onClick={()=>{setCity("Bhopal")}}>Click1</button>
//     <button onClick={display}>Click2</button>
//     </>
//   )
// }
// export default App;

// ---------------------------------------------------------------------------------------
// import { useState } from "react";
// const App=()=>{
//   const [color,setColor]=useState("Red");
  
//   return(
//     <>
    
//     <h1 style={{color:color}}>My favourite color:{color}</h1>
//     <button onClick={()=>{setColor("green")}}>Green</button>
//     <button onClick={()=>{setColor("orange")}}>orange</button>
//     <button onClick={()=>{setColor("aqua")}}>aqua</button>
//     <button onClick={()=>{setColor("blue")}}>blue</button>
//     </> 
//   )
// }
// export default App;

// -------------------------------------------------------------------------------------------



// import { useState } from "react";
// const App=()=>{
// const [cnt,setCnt]=useState(0);
// const myDecrement=()=>{
// if(cnt<=1){
//   alert("No decrese - value")
// }
// else{
//   setCnt(cnt-1)
// }
// }
//   return(
//     <>
//     <center>
//       <h1>Counter App</h1>
//       <h1>Count:{cnt}</h1>
//       <button onClick={()=>{setCnt(cnt+1)}}>+</button>	&nbsp;
//       <button onClick={myDecrement}>-</button>  	&nbsp;
//       <button onClick={()=>{setCnt(0)}}>Reset</button>
//     </center>
//     </>
//   )
// }
// export default App;
// --------------------------------------------------------------------------------------------------------------

// import { useState } from "react";

// const App =()=>{
//   const [name,setName]=useState("");
//   const [city,setCity]=useState("")
//   return(
//     <>
//     <h1>Application Form</h1>
//     Enter name:<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
//     Enter city:<input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
//     <button>Submit</button>
//     </>

//   )

// }
// export default App;


// -------------------------------------------------------------------------------
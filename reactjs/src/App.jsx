// import { useState,useEffect } from "react";
// import axios from "axios";
// const App=()=>{
//   const [mydata,setMydata]=useState([]);
//   const loadData=async()=>{
//     let api ="http://localhost:3000/students"; 

//     try {
//         const response=await axios.get(api);
//         setMydata(response.data);
//         console.log(response);
//     }
//     catch(error){
//       console.log("Server not Found !!!");
//     }
//   }
//   useEffect(()=>{
//     loadData();
//   },[]);
   
//   const ans=mydata.map((key)=>{
//     return(
//       <>
//       <tr>
//         <td>{key.rollno}</td>
//         <td>{key.name}</td>
//         <td>{key.city}</td>
//         <td>{key.fees}</td>
//       </tr>
//       </>
//     )
//   })
//   return(
//     <>
//     <h1>Welcom Students</h1>
//     <table border="2px">
//       <tr>
//         <th>Rollno</th>
//         <th>Name</th>
//         <th>City</th>
//         <th>Fees</th>
//       </tr>
//       {ans}
//     </table>
//     </>
//   )
// }
// export default App;



import { useState } from "react";
const App=()=>{
const [cnt,setCnt]=useState(0);
const myDecrement=()=>{  
if(cnt<=1){
  alert("No decrese - value")
}
else{
  setCnt(cnt-1)
}
}
  return(
    <>
    <center>
      <h1>Counter App</h1>
      <h1>Count:{cnt}</h1>
      <button onClick={()=>{setCnt(cnt+1)}}>+</button>	&nbsp;
      <button onClick={myDecrement}>-</button>  	&nbsp;
      <button onClick={()=>{setCnt(0)}}>Reset</button>
    </center>
    </>
  )
}
export default App;
import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const[user,setUser]=useState("Kamlesh");
  return (
      <>
      <h1>Welcome:{user}</h1>
      <Comp1 user={user}/>
      </>
  )
}
export default App;
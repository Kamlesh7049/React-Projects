// import { createContext } from "react";
// import { useState } from "react";
// import Comp1 from "./Comp1"
// const myContext=createContext();
// const App=()=>{
//     const[user,setUser]=useState("Kartik");
//     return(
//        <>
//        <h1>Welcom :{user}</h1>
//        <myContext.Provider value={{user}}>
//         <Comp1/>   
//        </myContext.Provider>
//        </>
//     )
// }
// export default App;
// export{myContext};


// --------------------------------------------------------------------

import { useState, createContext } from "react";
import Cybrom from './Cybrom';

const myContext = createContext();

const App = () => {
  const [user, setUser] = useState("Kamlesh");

  return (
    <>
      <button onClick={() => { setUser("Ankita") }}>click</button> 
      <h1>Welcome: {user}</h1>
      <myContext.Provider value={{ user, setUser }}> 
        <Cybrom />
      </myContext.Provider>
    </>
  );
};

export default App;
export { myContext };



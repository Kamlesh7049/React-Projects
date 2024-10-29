import { createContext,useState } from "react"

const colorContext=createContext()

const MyContext = ({children}) => {
    const [clr,setClr]=useState("green");

  return (
   <>
   <colorContext.Provider value={{clr,setClr}}>
   {children}
   </colorContext.Provider>
   </>
  )
}

export default MyContext;
export {colorContext};
import { useContext } from "react"
import { myContext } from "./CounterContext"

const Counter = () => {
    const{cnt,setCnt}=useContext(myContext)
  return (
    <>
    <h1> My Counter App</h1>
    <button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
    <h1>{cnt}</h1>
    <button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
    </>
    
  )
}

export default Counter;
import { useDispatch, useSelector } from "react-redux"
import { increment ,decrement } from "./counterSlice";

 const App = () => {
  const myCount=useSelector((state)=>state.mycounter.cnt);
  const dispatch=useDispatch();
   return (
    <>
    <h1>This is my Counter Programmm!!</h1>
    <button onClick={()=>{dispatch(increment())}}>Increment</button>
    <h1>{myCount}</h1>
    <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

    </>
   )
 }
 
 export default App
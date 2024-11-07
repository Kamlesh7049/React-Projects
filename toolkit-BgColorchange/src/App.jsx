

import { useDispatch, useSelector } from "react-redux";
import { colorchange } from "./bgcolorSlice";


const App = () => {
  const myclr=useSelector((state)=>state.mycolor.bgclr);
  const dispatch=useDispatch();
  console.log(myclr)
   
  return (
    <>
    <h1>This is ColorChange Programm!!</h1>
    <button onClick={()=>{dispatch(colorchange())}}>click here</button>
    <div style={{width:"300px",height:"200px",backgroundColor:myclr}}>

    </div>

    </>
  )
}  

export default App

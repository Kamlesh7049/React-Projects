import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addData } from "./todoSlice"

const App = () => {
  const [data, SetData]=useState("");
  const Data=useSelector((state)=>state.todo.task)
  console.log(Data);

  const dispatch=useDispatch();
  
  const txtDataAdd=()=>{
    dispatch(addData({id:Date.now(), work:data}));
    // dispatch(addData(data))    //1 method
  
  }
  let sno=0;
  const ans=Data.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
      </>

    )
  })

  return (
  <>
  <center>
  <h3>To Do App </h3>
  Enter Task : <input type="text" value={data} onChange={(e)=>{SetData(e.target.value)}}/>
  <button onClick={txtDataAdd}>Add</button>
  <hr  size="2" color="red"/>
  <table>
    <tr>
      <td>Sno</td>
      <td>Your Task</td>
    </tr>
    {ans}
  </table>
  </center>
  </>
  )
}

export default App;
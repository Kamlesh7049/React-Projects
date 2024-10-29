import { useState } from "react";
import axios from "axios";
const Search=()=>{
   const [eno,setEno]=useState("");
   const [mydata,setMydat]=useState([]);
   const [edata,setEdata]=useState("")
   const handleSubmit=()=>{
    let api=`http://localhost:3000/employees/?empno=${eno}`
    setEdata("")
    axios.get(api).then((res)=>{
        setMydat(res.data);
        // console.log(res.data);
        if(res.data.length==0)
        {
            setEdata("Data Not Found !!!")
        }

    })

}
const ans=mydata.map((key)=>{
    return(
        <>
        <h1>Employee Number:{key.empno}</h1>
        <h2>Name: {key.name}</h2>
        <h2>Email: {key.email}</h2>
        <h2>Contact no: {key.contact}</h2>
        </>
    )
})


    return(
        <>
        <h1>Search Employee Records!!</h1>
        Enter Emp No.: <input type="text" value={eno}onChange={(e)=>{setEno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search!!</button>
        <hr  size="4" color="green"/>
        {ans}
        {edata}

        </>
    )
}
export default Search;
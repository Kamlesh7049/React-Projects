import axios from "axios";
import { useState } from "react";
// import { toast } from "react-toastify";
// import { message } from "antd";//method 1
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }
    const handleSubmit=()=>{
        let api="http://localhost:3000/employees";
        axios.post(api,input).then((res)=>{
            console.log(res);
            // message.success ("Data Successfully save!!!");//method 1    warning ,error
            toast.success ("Data Successfully save!!!");
        })

    }
    return(
        <>
        <h1>Insert Record!</h1>
        Enter Employee No : <input type="text" name="empno" onChange={handleInput}/><br />
        Enter Name : <input type="text" name="name" onChange={handleInput}/><br />
        Enter Email : <input type="text" name="email" onChange={handleInput}/><br />
        Enter Contact No : <input type="text" name="contact" onChange={handleInput}/><br />
        <button onClick={handleSubmit}>Save!!</button>
        <ToastContainer/>
        </>
    )
}
export default Insert;
import { useState } from "react";
const App=()=>{
  const [input, setInput]=useState({});//input{ }
  //input={name:"kamlesh",city:"Bhopal",contact:456789,email:"admin@gmail.com"}
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    //console.log({[name]:value})
    //setInput({[name]:value})
    
    setInput((values)=>({...values,[name]:value}));
    console.log(input);
  }
  const handleSubmit=()=>{
    console.log(input);
  }
  return(
    <>
    <center>
      <h1>Application Form</h1>
      Enter name :<input type="text" name="stunm" value={input.stunm} onChange={handleInput}/><br />
      Enter city :<input type="text" name="city"  value={input.city} onChange={handleInput}/><br />
      Enter contact :<input type="text" name="conatct" value={input.contact} onChange={handleInput}/><br />
      Enter email : <input type="text" name="email" value={input.email} onChange={handleInput}/><br />
      <button onClick={handleSubmit}>Data Save !!!</button>
    </center>
    </>
  )


}
export default App;

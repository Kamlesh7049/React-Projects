import { useContext } from "react";
import { myContext } from "./App"; 

const Bhopal = () => { 
  const { user, setUser } = useContext(myContext); 

  return (
    <>
      <h1>Welcome to Bhopal: Name: {user}</h1>
      <button onClick={() => { setUser("Anshika") }}>Click</button>
    </>
  );
}

export default Bhopal;

import { useDispatch, useSelector } from "react-redux";
import { decBy10, incBy10 } from "./counterSlice";

const App = () => {
  // Accessing the 'data' part of the state in myCount
  const myCount = useSelector((state) => state.myCount.data);
  const dispatch = useDispatch();

  return (
    <>
      <h1>This is my Counter Programmm!!</h1>
      
      {/* Dispatching the action by calling it */}
      <button onClick={() =>{ dispatch(incBy10())}}>Increment</button>
      
      <h1>{myCount}</h1>
      
      {/* Dispatching the action by calling it */}
      <button onClick={() =>{ dispatch(decBy10())}}>Decrement</button>
    </>
  );
};

export default App;

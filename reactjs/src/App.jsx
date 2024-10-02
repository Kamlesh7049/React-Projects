const App=()=>{
  const display=()=>{
    alert("This is my event!!");
    
  }
  return(
    <>
    
    <h1>Welcome To  React Event !!</h1>
    <button onClick={display}>Click here</button>
    </>
  )
}
export default App;

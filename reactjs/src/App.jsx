import a from "./images/img1.jpg";
import b from "./images/img2.jpg";
import c from "./images/img3.jpg";


const App=()=>{  
    return(
        <>

        <h1>Welcom</h1>
        <img src={a} width="200px" height="100px"/> 
        <img src={b} width="200px" height="100px"/>
        <img src={c} width="200px" height="100px"/>
        
       </>
    )
    }
    export default App;
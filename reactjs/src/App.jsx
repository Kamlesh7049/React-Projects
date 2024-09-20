// import Bhopal from "./Bhopal";
// import Code from "./Code";
// import Cybrom from "./Cybrom";

import Students from "./Students";
import College from "./College";
import Developers from "./Developer";




const student={
    "rollno":111,
    "name":"Kamlesh",
    "city":"indore",
    "fees":1000
}
const App=()=>{
return(
    <>
    {/* <h1>Cybrom Pvt Ldt</h1> */}
    {/* <Cybrom/> */}
    {/* <Bhopal/> */}
    {/* <Code/> */}
    <h1>Welcom!!!</h1>


    {/* <College nm="TIT" Seats="230" ct="bhopal"/> */}
    <Developers 
    sturno={student.rollno}
    stunm={student.name}
    stuct={student.city}
    stufs={student.fees}
    />


    </>
)
}
export default App;

// classs com  fun comp

// const name="Ankita";
// const age=30;

// const App=()=>{
//     return(
        
//         <p>Welcom to {name} cybrom age:{age}my age{age*3}</p>
        
    
//     )
//     }
//     export default App;

// const Sub=(<ol>
//     <li>Php</li>
//     <li>java</li>
//     <li>python</li>
//     <li>css</li>
//     <li>html</li>
// </ol>)

// const App=()=>{   
//     return(
//         <div>
//         <h1>Sub:{Sub}</h1>
//         </div>
//     )
//     }
//     export default App;

// const App=()=>{   
//     return(
//         <>// extra node nhi banega
//         <h1>Sub</h1>
//         </>
//     )
//     }
//     export default App;



// const App=()=>{   
//     return(
//         <>
//         <h1 className="data">form</h1>
//         Enter name:<input type="text"/><br />
//        Enter City :<input type="text"/>
//        <hr />
//         </>
//     )
//     }
//     export default App;





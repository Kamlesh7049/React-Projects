import EmpData from "./Map/EmpData";
import EmpDesign from "./Map/EmpDesign";





const App=()=>{
  const ans=EmpData.map((key)=><EmpDesign empno={key.empno} empnm={key.name} dpt={key.dept} sal={key.salary}/>)

  return(

  <>
  <h1>Welcom Developers!!!</h1>
  <table border="1px">
   <tr>
    <th>Emp Number</th>
    <th>Emp Name</th>
    <th>Emp dept</th>
    <th>Emp Salary</th>
   </tr>
{ans}

  </table>
  </>
  )

}
export default App;
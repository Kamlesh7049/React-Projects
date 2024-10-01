
import Design from "./Map/Design"
const Student=[

{
  "rollno":121,
  "name":"Ankita",
  "city":"Bhopal"
},

{
  "rollno":122,
  "name":"Nikit",
  "city":"Bhopal"
},
{
  "rollno":123,
  "name":"Kamlesh",
  "city":"Bhopal"
}

]
const ans=Student.map((key)=><Design  rno={key.rollno}nm={key.name} ct={key.city}/>)
const App=()=>{
  return(
    <>
    <h1>Welcome Engineer !!!</h1>
    <table border="1px" cellPadding="20" cellSpacing="30px">
      <tr>
        <th >Rollno</th>
        <th >Name</th>
        <th >City</th>
      </tr>
   {ans}
    </table>
    
    
    </>
  )
}
export default App;
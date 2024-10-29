import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <center>
        <Link to="home">Home</Link>|
        <Link to="insert">Insert</Link>|
        <Link to="display">Display Data</Link>|
        <Link to="search">Search</Link>|
        <Link to="searchbyname">SearchByName</Link>|
        <Link to="update">Update</Link>|
        {/* <Link to="editrec/1">EditData</Link> */}
        <hr size="4" color="red"/>
        <Outlet/>
    <hr size="4" color="red"/>
    <p>www.mycompany.com</p>
    </center>
        </>
    )
}
export default Layout;
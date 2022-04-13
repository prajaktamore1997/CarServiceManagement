import "./admin.css"
import { Link, useHistory } from 'react-router-dom';
import logo from "./admin.jpg"
import Login from "../login/login";
import ScopeEmp from "../EmployeeScope/ScopeEmp";
function Admin( ){
 let user= sessionStorage.getItem("user")
const id=sessionStorage.getItem("ids")
const his=useHistory();
 if(sessionStorage.getItem("id")==="true"){
  
  return(
    <div className='admin '>
 <div className="dropdown name" >
      <Link  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={logo} alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>{user}</strong>
      </Link>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
        {/* <li>{sessionStorage.getItem("role"==="emp")?<Link className="dropdown-item" to={{pathname:"/edit-me",state:id}}>Profile</Link>:<Link className="dropdown-item">Profile</Link>}</li>
        <li><a className="dropdown-item" href="#">Profile</a></li> */}
        <li><hr className="dropdown-divider" /></li>
        <li><Link onClick={(e)=> window.location.reload()} className="dropdown-item" to ="/Signout">Sign Out</Link></li>
      </ul>
    </div>
    </div>
);
 }else{
 return(
   <div className="admin bg-dark">
     {sessionStorage.getItem("role")==="admin"?<Login/>:<ScopeEmp/>}
     
   </div>
 )
 }
}

export default Admin;
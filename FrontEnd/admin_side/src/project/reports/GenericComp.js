
import { Link } from 'react-router-dom';
import './Reports.css';


function GenericCompo({ Generic }) {
   console.log(Generic)
   return (
      <div className="d-inline-flex p-2 ">
         {Generic.map((user) =>
            <div className="indiviual mx-1 border ">
               <p >-------------------------</p>

               <p><strong>{user.name}</strong></p>
               <p><strong>{user.firstName}</strong></p>
               <p><strong>{user.lastName}</strong></p>
               <p>{user.address}</p>
               <p>{user.mail}</p>
               <p>{user.role}</p>
               
               <p >-------------------------</p>

               <Link type="button" to={{pathname:"/viewpersondetails",state:user}} className="btn btn-info  viewbtn">View</Link>

            </div>
         )}
      </div>

   )
}
export default GenericCompo;



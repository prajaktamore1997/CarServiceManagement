import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './addperson.css';


export default function AddPersonform(){

const loco= useLocation()
const [user, setuser] = useState("")

    function check(){
if((loco.state))
setuser(loco.state)

    }


    useEffect(check,[])



    return (
        
        <div className="container outform d-flex ">
             <div className="">
    
    <input type="text" hidden value="emp" className="form-control" disabled id="exampleInputAddress" aria-describedby="emailHelp"/>
   </div>


     <form className="form">
     <div className="">
    <label  className="text-muted">Name</label>
    <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name" aria-describedby="emailHelp"/>
  </div>
  <div className="">
    <label  className="text-muted">Mobile</label>
    <input type="email" className="form-control" placeholder="Enter Mobile" id="exampleInputMobile" aria-describedby="emailHelp"/>
   </div>
  <div className="">
    <label  className="text-muted">Hire Date</label>
    <input type="date" className="form-control" placeholder="Enter Hire Date" id="exampleInputDate" aria-describedby="emailHelp"/>
   </div>
   <div className="">
    <label className="text-muted">Salary</label>
    <input type="number" className="form-control" placeholder="Enter Salary" id="exampleInputsalary" aria-describedby="emailHelp"/>
   </div>
   <div className="">
    <label className="text-muted">commissionPct</label>
    <input type="number" className="form-control" placeholder="Enter commpct" id="exampleInputcommissionPct" aria-describedby="emailHelp"/>
   </div>

   <div className="">
    <label  className="text-muted">Address</label>
    <input type="text" className="form-control" placeholder="Enter Address" aria-describedby="emailHelp"/>
   </div>
   <div className="">
    <label className="text-muted">DOB</label>
    <input type="date" className="form-control"placeholder="Enter DOB"  aria-describedby="emailHelp"/>
   </div>
  
  <div className="">
  <label class="text-muted">Email address</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="">
    <label  className="text-muted">Password</label>
    <input type="password" placeholder="Enter Password" className="form-control" />
  </div>
 
  
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}
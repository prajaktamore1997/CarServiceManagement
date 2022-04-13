
import axios from "axios";
import { useEffect, useState } from "react";
import './employeeForm.css'
import ServerUrl from './../ServerUrl';
import { useHistory, useLocation } from "react-router";


function EmployeeForm(){
    const [empId,setempId] = useState(0)
    const [firstName , setfirstName]= useState("")
    const [lastName , setlastName]= useState("")
    const [email , setemail]= useState("")
    const [mobile , setmobile]= useState("")
    const [hireDate , sethireDate]= useState("")
    const [salary , setsalary]= useState(0)
    const [commissionPct , setcommissionPct]= useState(0)
    const [address , setaddress]= useState("")
    const [dob,setdob]= useState("")
    const [password , setpassword]= useState("")

    const loco=useLocation()
    const his=useHistory()

    const check=()=>{
const emp=loco.state;
if (!(loco.state == null)) {
setempId(emp.empId);
setfirstName(emp.firstName)
setlastName(emp.lastName)
setemail(emp.email)
setmobile(emp.mobile)
sethireDate(emp.hireDate)
setsalary(emp.salary)
setcommissionPct(emp.commissionPct)
setaddress(emp.address)
setdob(emp.dob)
setpassword(emp.password)
}
    }
    useEffect(check, [])


    function saveEmployee(){
        if(firstName==="")
        alert("Enter First Name")
        else if(lastName==="")
        alert("Enter Last Name")
        else if(email==="")
        alert("Enter email")
        else if(mobile==="")
        alert("Enter mobile Number")
        else if(hireDate==="")
        alert("Enter Hiring date")
        else if(salary==="")
        alert("Enter salary")
        else if(commissionPct==="")
        alert("Enter Commission percent")
        else if(address==="")
        alert("Enter Address")
        else if(dob==="")
        alert("Enter Date of Birth")
        else if(password==="")
        alert("Enter password")
        else{
            let employeedata={
                "empId":empId,
                "firstName":firstName,
                "lastName":lastName,
                "email":email,
                "mobile":mobile,
                "hireDate":hireDate,
                "salary":salary,
                "commissionPct":commissionPct,
                "address":address,
                "dob":dob,
                "password":password,
                "role":loco.state.role
            }
            console.log(employeedata)
            if(loco.state===null)
            saveEmp(employeedata)
            else
            updateEmp(employeedata)
            
        }
    }
    const updateEmp=(employeedata)=>{
        axios.post(ServerUrl+"/admin/save-employee",employeedata).then((res)=>{
                his.push("/employee")
                alert(res.data)
            })
}
const saveEmp=(employeedata)=>{
        axios.post(ServerUrl+"/admin/save-employee",employeedata).then((res)=>{
                his.push("/employee")
                alert(res.data)
            })
}
    const deleteEmp=()=>{
        axios.delete(`${ServerUrl}/admin/delete-employee/${empId}`).then((res)=>{
                his.push("/employee")
                alert(res.data)
            })
}
    return(
        <div className="outerdiv-emp-form">
            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Employee First Name</label>
                    <input type="email" value={firstName} required="required" onChange={(e)=>setfirstName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="First Name"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                    <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Last Name"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control form-control-sm " id="exampleFormControlInput1" placeholder="Enter Email"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                    <input type="number" value={mobile} onChange={(e)=>setmobile(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Mobile Number"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Hire Date</label>
                    <input type="date" value={hireDate} onChange={(e)=>sethireDate(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Hire Date"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Salary</label>
                    <input type="number" value={salary} onChange={(e)=>setsalary(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Salary"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">commissionPct</label>
                    <input type="number" value={commissionPct}  onChange={(e)=>setcommissionPct(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Commission"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Address</label>
                    <input type="text" value={address}  onChange={(e)=>setaddress(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Address"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Date of Birth</label>
                    <input type="date"  value={dob}  onChange={(e)=>setdob(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Date of Birth"/>
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password"  value={password}  onChange={(e)=>setpassword(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Password"/>
            </div>
            {loco.state===null?<button type="button" onClick={saveEmployee} class="btn btn-sm btn-success">Add</button>
            :  <><button type="button" onClick={saveEmployee} class="btn btn-sm btn-warning">Update</button>
               <button type="button" onClick={deleteEmp} class="btn btn-sm btn-danger">Delete</button></>}
         
        </div>
    
    )

}
export default EmployeeForm;
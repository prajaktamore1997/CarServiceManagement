import { useEffect, useState } from "react";
import axios from "axios";
import "./CustomerForm.css";
import ServerUrl from "../ServerUrl";
import { useHistory, useLocation } from "react-router";

function CustomerForm(){
        const his =useHistory()
    const [custId,setcustId] = useState(0)
    const [name,setname] = useState("")
    const [city,setcity] = useState("")
    const [address,setaddress] = useState("")
    const [email,setemail] = useState("")
    const [mobileNo,setmobileNo] = useState("")
    const [password,setpassword] = useState("")
    const [area,setarea] = useState("")
    const [pincode,setpincode] = useState(0)
const loco=useLocation()


    const check=()=>{
        const cust=loco.state;
        if (!(loco.state == null)) {
                setcustId(cust.custId);
                setname(cust.name)
                setemail(cust.email)
                setmobileNo(cust.mobileNo)
        setaddress(cust.address)
        setarea(cust.area)
        setpincode(cust.setpincode)
        setpassword(cust.password)
        setcity(cust.city)
        }
 }
            useEffect(check, [])

            

    function saveCustomer(){
        if(name==="")
        alert("Enter Customer Name")
        else if(city==="")
        alert("Enter city")
        else if(address==="")
        alert("Enter address")
        else if(email==="")
        alert("Enter email")
        else if(mobileNo==="")
        alert("Enter mobile Number")
        else if(password==="")
        alert("Enter password")
        else if(area==="")
        alert("Enter area")
        else if(pincode==="")
        alert("Enter Pincode")
        else{
            let customerdata={
                "custId":custId,
                "name":name,
                "city":city,
                "address":address,
                "email":email,
                "mobileNo":mobileNo,
                "password":password,
                "area":area,
                "pincode":pincode
            }
            axios.post(ServerUrl+"/admin/save-customer",customerdata).then((res)=>{
                alert(res.data)
                his.push("/customers");
            })
        }
    }

  
const deleteCust=()=>{
        axios.delete(`${ServerUrl}/admin/delete-customer/${custId}`).then((res)=>{
                alert(res.data)
                his.push("/customers");
            })
}


    return(
        <div className="outerdiv-cust-form form">
            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Customer Name</label>
                    <input type="email" value={name} required="required" onChange={(e)=>setname(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Customer Name"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">City</label>
                    <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter City"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Address</label>
                    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Complete address"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Email"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
                    <input type="number"value={mobileNo} onChange={(e)=>setmobileNo(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Mobile Number"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                  {loco.state===null?
                    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Password"/>
            :<input type="password" readOnly  value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Password"/>
        }
                    </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">Area</label>
                    <input type="text" value={area} onChange={(e)=>setarea(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Area"/>
            </div>

            <div className="mb-1">
                    <label for="exampleFormControlInput1" className="form-label">PinCode</label>
                    <input type="text" value={pincode} onChange={(e)=>setpincode(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Pincode"/>
            </div>

               {loco.state===null?  <button type="button" onClick={saveCustomer} className="btn btn-sm btn-success">Add</button>
                :<> <button type="button" onClick={saveCustomer} className="btn btn-sm btn-warning">Update</button>
                 <button type="button"  onClick={deleteCust} className="btn btn-sm btn-danger">Delete</button></>}
         
        </div>
    
    )

}
export default CustomerForm;
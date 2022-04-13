import { useLocation } from 'react-router'
import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ServerUrl from '../ServerUrl';
const EditProfile = () => {
    const location = useLocation()
    const history=useHistory()
   
     const emp=location.state;
        
     
    const [firstName, setFirstName] = useState(emp.firstName)
    const [lastName, setLastName] = useState(emp.lastName)
    const [email, setEmail] = useState(emp.email)
    const [mobile, setMobileNumber] = useState(emp.mobile)
    const [password, setPassword] = useState(emp.password)
    const [address, setAddress] = useState(emp.address)
  
function UpdateOnserver() {
  if (firstName.length === 0) {
    alert('enter Name')
  }else if(lastName.length === 0) {
        alert('enter Name')
      } else if (email.length === 0) {
        alert('enter Email')
      } else if (mobile === 0) {
        alert('enter mobile number')
       } else if (password === 0) {
        alert('enter password')
      } else if (address === 0) {
        alert('enter fullAddress')
      }
       else {
       
        const data={
          "empId":emp.empId,
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "mobile": mobile,
        "password": password,
        "address": address,
        "role":sessionStorage.getItem("role")
        }
       
        axios.post(`${ServerUrl}/emp/update-info`,data).then((response) => {
         alert(response.data)
         history.goBack();
        })
       

      }
  
}



    return (
        <div style={{ position: "absolute",
        left: "200px",
        top: "39px",
        width: "582%",
        height: "100%",
        color:"white",
        background:" rgb(28 56 70 / 92%)"}}  className="container">
                    <h1>Update Profile Details</h1>
           <div className="form-group">
                      <label>First name</label>
                      <input   onChange={(e)=>{ 
                        setFirstName(e.target.value) }}
                       value={firstName}      required="required"  type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Last name</label>
                      <input   onChange={(e)=>{ 
                        setLastName(e.target.value) }}
                       value={lastName}      required="required"  type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Email </label>
                      <input  onChange={(e) => {
                            setEmail(e.target.value) }} type="email" value={email}  required="required" className="form-control" />
                  </div>
  
                  <div className="form-group">
                      <label>Mobile Number</label>
                      <input  onChange={(e) => {
                            setMobileNumber(e.target.value) }} type="number"  required="required" value={mobile}  className="form-control" />
                  </div>
                  
                  <div className="form-group">
                      <label>Password</label>
                      <input  onChange={(e) => {
                            setPassword(e.target.value) }} type="text" value={password}  required="required"  className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Present Address</label>
                      <input  onChange={(e) => {
                            setAddress(e.target.value) }} type="text" value={address}  required="required"  className="form-control" />
                  </div>
  <button Style="margin:10px " className="btn  btn-success btn-lg btn-block" onClick={UpdateOnserver}>Update Profile</button>
        </div>
    )
                     
}

export default EditProfile;

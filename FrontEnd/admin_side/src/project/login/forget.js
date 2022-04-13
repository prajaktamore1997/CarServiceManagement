import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ServerUrl from '../ServerUrl';
import './login.css'
export default function Forget() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setmobile] = useState("");
    const [newpassword, setnewpassword] = useState("");
const his= useHistory();

function Change(){
    if (email.length <= 0)
            alert("Please Enter Mail id")
        else if (password.length <= 0)
            alert("Please Enter Password")
            else if (newpassword.length <= 0)
            alert("Please Enter Password")
            else if(password!==newpassword)
            alert("Password Not Match")
            else if(mobile.length<10)
alert("Enter Vaild mobile no")
        else{
           
            const passwordData ={
                email,
                password,
                mobile
            }

            axios.post(`${ServerUrl}/admin/forget-password`,passwordData).then((res)=>{
               if(res.status===200 && res.data==="done"){
                alert("Updated")
                his.push('/')
               }
               else
               alert("Not Updated")
            })


        }
    }
        
    return (
       
            
            <div style={{height:'400px',width: "22em"}}  className="most offset-md-2" >
                
                <div className="mb-3 ">
                    <h1 className="h1-1">Forget_password</h1>
                    <div  className="col-xs-10 col-sm-10 col-md-10 col-lg-10 mx-auto d-grid gap-3 formdiv">
                        <input required="required" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Enter Email" type="email" name="email" />
                        <input required="required" onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Enter new Password" type="text" name="password"  />
                        <input required="required" onChange={(e) => { setmobile(e.target.value) }} className="form-control" placeholder="Enter Mobile No" type="text" name="mobile"  />
                        <input required="required" onChange={(e) => { setnewpassword(e.target.value) }} className="form-control" placeholder="Enter New password" type="password" name="newpassword"  />
                        <button onClick={Change}  className="btn btn-md btn-primary" type="button">Submit</button>
                        <button onClick={his.goBack} className="btn btn-md btn-info" type="button">Back</button>
                    </div>
                </div>
            </div>
        
    )
    }


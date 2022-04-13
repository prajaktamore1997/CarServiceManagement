

import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './login.css'
import ServerUrl from './../ServerUrl';
import { Link } from 'react-router-dom';

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signin() {
        let data = new FormData();
        data.append("email", email)
        data.append("password", password)
       
        if (email.length <= 0)
            alert("Please Enter Mail id")
        else if (password.length <= 0)
            alert("Please Enter Password")
        else {
            axios.post(`${ServerUrl}/admin/100`, data).then((res) => {
                let result = res.data;
               console.log(result)
if(result.length===0)
alert("Invalid Login")
                if (result.email === email && result.password === password) {
              
                    sessionStorage.setItem("user", result.firstName);
                    sessionStorage.setItem("id", true);
                    sessionStorage.setItem("role", result.role);
                    sessionStorage.setItem("ids", result.empId);
                    if(result.role ==="admin")
                 {
                     history.push("/customers")
                    window.location.reload();
                 }
                    else
                    history.push('/get-emp-live',result.empId);
                }

            })
        }


    }


    
        return (
           
            <div  className="most offset-md-2" >
                
                <div className="mb-3 ">
                    <h1 className="h1-1">Login</h1>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 mx-auto d-grid gap-3 formdiv">
                        <input onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Enter Email" type="text" name="email" />
                        <input onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="Enter Password" type="password" name="password"  />
                        <button onClick={signin} className="btn btn-md btn-primary" type="submit">Login</button>
                        <Link to="/forgot-password" className="btn btn-md btn-info" type="button">forget password</Link>
                    </div>
                </div>
            </div>
           
            

        );

    }



export default Login;
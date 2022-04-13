import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Admin from './../admin/admin';
import Login from './../login/login';
import "./employee.css";
function Employee() {

    const [employee, setEmployees] = useState([])
    function onloaddata() {
        axios.get("http://localhost:8080/admin/employees/").then((res) => {
            const result = res.data;
            setEmployees(result)
        })
    }
    useEffect(onloaddata, [])


    if (sessionStorage.getItem("id") === "true") {

        return (
            <div>
                <Admin />
                <div className="outerdiv-emp">
                    <h1>
                    
                        <Link to="/EmployeeForm" type="button" class="btn btn-primary mx-1">Add Employee</Link>

                    </h1>



                    <div className="common-emp d-flex p-2 bd-highlight flex-lg-column   
">

                        <Link type="button" to={{pathname:"/viewallemp", state:employee}} class="btn btn-primary mx-1">View Employees</Link>
                        <div className="divone-emp d-inline-flex bd-highlight">
                            {employee.map((emp) =>
                                <div className="indiviual-emp mx-1 border">
                                    <p >-------------------------</p>

                                    <p><strong>{emp.name}</strong></p>
                                    <p><strong>{emp.firstName}</strong></p>
                                    <p><strong>{emp.lastName}</strong></p>
                                    <p>{emp.address}</p>
                                    <p>{emp.mail}</p>
                                    <p>{emp.role}</p>

                                    <p >-------------------------</p>
                                    <Link type="button" to={{ pathname: "/viewpersondetails", state: emp }} className="btn btn-info  viewbtn">View</Link>

                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>




        )
    } else {
        return (
            <Login />
        )
    }
}

export default Employee;







// <div className = "employee">
// <h1> Welcome Employees </h1>
// </div>
// <div className = "d-flex p-2 bd-highlight out flex-lg-row   align-content-around flex-wrap sub-container">
// {employee.map((emp)=>
// <div className = "d-inline-flex bd-highlight InSubEmp">
//     <h5 className="h5">{emp.empId}</h5>
//     <h5 className="h5">{emp.firstName}</h5>
//     <h5 className="h5">{emp.lastName}</h5>
//     <h5 className="h5">{emp.email}</h5>
//     <h5 className="h5">{emp.mobile}</h5>
//     <h5 className="h5">{emp.hireDate}</h5>
//     <h5 className="h5">{emp.salary}</h5>
//     <h5 className="h5">{emp.address}</h5>
//     <h5 className="h5">{emp.role}</h5>
// </div>
// )}
// <Link type = "button" to='/EmployeeForm' className= "btn btn-primary">Add Employees</Link>    
// </div> 
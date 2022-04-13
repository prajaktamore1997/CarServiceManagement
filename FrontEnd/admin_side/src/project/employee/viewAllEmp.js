import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import Admin from './../admin/admin';

export default function ViewAllEmp() {
const loco=useLocation()
    console.log(loco.state)
    const employee=loco.state


  function  showpass(e){
      alert("password =" + e.target.value)
  }
    return (
        <>
        <Admin/>
        <div style={{ position: "absolute",

background: "rgb(28 56 70 / 92%)",

    left: "200px",
    top: "39px",
    width: "582%",
    height: "100%",
    border: "2px solid rgb(5, 0, 0)"}}>
        <div className="row p-5">
                        <div style={{
                                overflow: "scroll",
                                height: "530px"
                        }} className="col-md-12">
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th className="border-1 text-uppercase small font-weight-bold">ID</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Name</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Email</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Mobile</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">DOB</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Password</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Hire-Date</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Address</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Commission</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Salary</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {employee.map((emp)=>
                                    <tr>
                                    <td>{emp.empId}</td>
                                    <td>{emp.firstName} {emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.mobile}</td>
                                    <td>{(emp.dob)}</td>
                                    <td><button type="button"  value={emp.password} onClick={(e)=>showpass(e)} class="btn btn-primary btn-sm">Show</button></td>
                                    <td>{(emp.hireDate)}</td>
                                    <td>{(emp.address)}</td>
                                    <td>{(emp.commissionPct)}</td>
                                    <td>{(emp.salary)}</td>
                                    <td>
                                    <Link type="button"to={{pathname:"./employeeForm",state:emp}} class="btn btn-primary btn-sm">Edit</Link>
                                    </td>
                                </tr>
                                   )}
                                </tbody>
                            </table>
                        </div>
                    </div>
        </div>
        </>
    )
}

// address: "Pune"
// commissionPct: 0
// dob: "1997-09-22"
// email: "John@gmail.com"
// empId: 1100
// firstName: "John"
// hireDate: "2021-07-31"
// lastName: "Dukee"
// mobile: "9896989596"
// password: "john"
// role: "admin"

import React from 'react'
import { useHistory } from "react-router-dom";
import { useState,useEffect  } from "react";
import axios from 'axios';
import ServerUrl from '../ServerUrl';
const ViewProfile = () => {
              
   const history=useHistory()
   const [employee, setEmployee] =useState({})


    useEffect(() => {
        getEmpFromServer()
      }, [])

      
 function  getEmpFromServer(){
     const empId=sessionStorage.getItem("ids");
     console.log(empId);
     axios.get(`${ServerUrl}/emp/get-info/${empId}`).then((response) => {
        const result = response.data
        console.log(result)
        setEmployee(result)
     
 })}

 function callToEditUpdate(){
    history.push('/edit-profile', employee)
 }
    return (
        <div style={{ position: "absolute",
        left: "200px",
        top: "39px",
        width: "582%",
        height: "100%",
        color:"white",
        background:" rgb(28 56 70 / 92%)"
        }}>

        <div  className="container ">
            <h1>Profile Details</h1>
           <div className="form-group">
                      <label> Full name</label>
                      <h6>{employee.firstName}-{employee.lastName}</h6>   
                        </div>
  
                  <div className="form-group">
                      <label>Email </label>
                      <input type="email" value={employee.email}  required="required" className="form-control" readOnly/>
                  </div>
                  <div className="form-group">
                      <label>Date Of Birth</label>
                      <input   type="date" value={employee.dob}  className="form-control"  readOnly/>
                  </div>
                  <div className="form-group">
                      <label>Mobile Number</label>
                      <input   type="number" value={employee.mobile}  className="form-control" readOnly/>
                  </div>
                  
                  <div className="form-group">
                      <label>Hire Date</label>
                      <input  type="date" value={employee.hireDate}  className="form-control"  readOnly/>
                  </div>
                  <div className="form-group">
                      <label>commissionPct</label>
                      <input  type="text" value={employee.commissionPct} className="form-control" readOnly />
                  </div>
                  <div className="form-group">
                      <label>Salary</label>
                      <input  type="text" value={employee.salary} className="form-control" readOnly />
                  </div>
                  <div className="form-group">
                      <label> Address</label>
                      <input  type="text" value={employee.address}  className="form-control" readOnly/>
                  </div>
                  
                 
  <button className="btn btn-dark btn-sm my-1" onClick={callToEditUpdate}>Edit Profile</button>
        </div>
        
        
        </div>
    )
}

export default ViewProfile

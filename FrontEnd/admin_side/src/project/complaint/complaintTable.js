import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useHistory, useLocation } from 'react-router';
import ServerUrl from '../ServerUrl';

export default function ComplaintTable() {
    const [complaint, setcomplaint] = useState([])
    const [respons, setrespons] = useState("empty")
    const loco = useLocation();
    
    const User = loco.state;
  
    function check() {
        if (User.role === "emp")
            getEmployeeComplaint()
        else
            getCustomerComplaint()
    }

    useEffect(check, [])

    function getCustomerComplaint() {
        axios.get(`${ServerUrl}/admin/get-cust-complaint/${User.id}`).then((res) => {
            setcomplaint(res.data)
            
        })
    }
    function getEmployeeComplaint() {
        axios.get(`${ServerUrl}/admin/get-emp-complaint/${User.id}`).then((res) => {
            setcomplaint(res.data)
        })
    }
    
    return (
        <div className="viewout  table-responsive">
            <p className="para"></p>
            <table className="table  table-hover">
                <thead >
                    <th scope="col">complaint-Id</th>
                    <th scope="col">complaint-Subject</th>
                    <th scope="col">complaint-Detail</th>
                    <th scope="col">complaint-Response</th>
                    <th scope="col">Date</th>
                    <th scope="col">cust-Id</th>
                    <th scope="col">orders-Id</th>
                    <th scope="col">Reply</th>
                    <th scope="col">Delete</th>
                </thead>
                <tbody>
                    {complaint.map((sub) =>
                        <tr >
                            <td >{sub.complaintId}</td>
                            <td>{sub.complaintSubject}</td>
                            <td>{sub.complaintDetail}</td>
                            {sub.complaintResponse != null ?<td>{sub.complaintResponse}</td>:
                            <td><textarea onChange={(e)=>setrespons(e.target.value)}  className="form-control" rows="3" required="required"></textarea></td>
                            }
                            <td>{sub.complaintDate}</td>
                            <td>{sub.custId}</td>
                            <td>{sub.orderId}</td>
                           {sub.complaintResponse != null ? <td> <><p>Filled</p> </></td>
                                : <td><button type="button" onClick={()=>  {
                                    if(respons==="empty" || respons==="")
                                    alert("enter repsose")
                                    else
                                    axios.post(`${ServerUrl}/admin/res-to-complaint/${sub.complaintId}`,{respons}).then((res) => {
                                        setrespons("empty"); alert(res.data);window.location.reload();
                                                                })
                                }} className="btn btn-primary btn-sm  ">Reply</button></td>
                            }
                            <td>{User.role==="emp"?<p>unavailable</p>:<button type="button" onClick={()=>  {
                                    axios.delete(`${ServerUrl}/admin/res-to-complaint/${sub.complaintId}`).then((res) => {
                                        setrespons("empty"); alert(res.data);window.location.reload();
                                                                })
                                }} className="btn btn-primary btn-sm  ">Delete</button>}</td>
                            {/* <td>
                        <Link type="button" to={{pathname:"/complaint-response",state:sub.complaintId}}  className="btn btn-primary btn-sm  ">Reply</Link>
                        </td> */}
                            {/* <td>
                        {Object.getOwnPropertyNames(User)[0]==="empId"? <button type="button" onClick={()=>his.push("/complaint-table",{"id":sub.custId,"role":"emp"})}  className="btn btn-sm btn-primary ">View</button> :<button type="button" onClick={()=>his.push("/complaint-table",{"id":sub.ordersId,"role":"cust"})}  className="btn btn-sm btn-primary ">View</button>}
                        </td> */}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

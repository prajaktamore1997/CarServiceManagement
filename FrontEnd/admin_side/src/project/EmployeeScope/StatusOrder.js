import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import Admin from '../admin/admin';
import Login from '../login/login';
import ServerUrl from '../ServerUrl';
import "./StatusOrder.css";

export default function StatusOrder() {
    const his = useHistory()
  
    const [WorkStatus, setWorkStatus] = useState("")
    const loco = useLocation()
    console.log(loco.state)
    const ord = loco.state;

    function assignEmp() {
        axios.get(`${ServerUrl}/emp/emp-work-status/${ord.empId}/${ord.ordersId}/${WorkStatus}`).then((res) => {
    
            his.goBack()
        })

    }


    const getdatarow = () => {

        let sdate = new Date(ord.serviceDate) // convert 2021-09-08T18:30:00.000+00:00"  to Standard date
        let odate = new Date(ord.ordersDate)
        return (
            <tr>
                <th scope="row">{ord.ordersId}</th>
                <td>{ord.name}</td>
                <td>{odate.toUTCString().split('GMT', 1)}</td>
                <td>{(sdate.toUTCString().split('GMT', 1))}</td>
                <td>{ord.ordersStatus}</td>
                <td><select className="form-select form-select-sm" onChange={(e) => setWorkStatus(e.target.value)} aria-label="Default select example">
                    <option value={ord.ordersStatus} selected>{ord.ordersStatus}</option>
                   
                        <option value="Pending">Pending</option>
                        <option value="Ready">Ready</option>
                        <option value="Started">Started</option>
                        <option value="Working">Working</option>
                        <option value="Completed">Completed</option>

            
                </select></td>
                <td>
                    <button onClick={assignEmp} type="submit" className="btn btn-primary btn-sm">Save</button>
                 <button>Save</button>
                </td>
            </tr>
        );
    }
    if(sessionStorage.length===0)
    return(<Login/>);
    else
    return (
        <>
        <Admin/>
        <div className="orderoutterdiv">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">order_Id</th>
                        <th scope="col">Customer_name</th>
                        <th scope="col">order_Date</th>
                        <th scope="col">service_Date</th>
                        <th scope="col">order_Status</th>
                        <th scope="col">Assign Employee</th>
                        <th scope="col">Save</th>
                    </tr>
                </thead>
                <tbody>

                    {getdatarow()}

                </tbody>
            </table>
        </div>
        </>
    )
}

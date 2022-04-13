import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import ServerUrl from '../ServerUrl';
import "./AcceptOrder.css";

export default function AcceptOrder() {
    const [emp, setemp] = useState([])
    const [empid, setempId] = useState(0)
    const loco = useLocation()
    const [WorkStatus, setWorkStatus] = useState("")
    console.log(loco.state)
    const ord = loco.state;
    const his = useHistory()



    function getFreeEmployee() {

        axios.get(ServerUrl + "/admin/employees/").then((res) => {
            console.log(res.data)
            setemp(res.data)
        })

    }

    function assignEmp() {

        const ids = {
            "empId": Number.parseInt(empid),
            "ordersId": ord.ordersId,
            "ordersStatus":WorkStatus
        }
        console.log(ids)
        if(ids.empId===0)
        ids.empId=sessionStorage.getItem("ids")
       
        axios.put(ServerUrl + "/admin/emp-assign-order", ids).then((res) => {
            alert(res.data)
        })
his.push("/customers",1)

    }


    const getdatarow = () => {
        return (
            <tr>
                <th scope="row">{ord.ordersId}</th>
                <td>{ord.name}</td>
                <td>{ord.ordersDate}</td>
                <td>{ord.serviceDate}-{ord.serviceTime}</td>
                <td>{ord.ordersStatus}</td>
                <td><select className="form-select form-select-sm" onChange={(e) => setWorkStatus(e.target.value)} aria-label="Default select example">
                    <option value={ord.ordersStatus} selected>{ord.ordersStatus}</option>
                   
                        <option value="Pending">Pending</option>
                        <option value="Ready">Ready</option>
                        <option value="Started">Started</option>
                        <option value="Working">Working</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancel">Cancel</option>

                </select></td>
                <td><select className="form-select form-select-sm" onChange={(e) => setempId(e.target.value)} onClick={getFreeEmployee} aria-label="Default select example">
                    <option value={sessionStorage.getItem("ids")} selected>Select Employee</option>
                    {emp.map((e) =>
                        <option value={e.empId}>{e.role==="admin"?"Admin":"Emp"}-{e.empId}- {e.firstName} {e.lastName}</option>
                    )}
                </select></td>
                <td>
                    <button onClick={assignEmp} type="submit" className="btn btn-primary btn-sm">Save</button>
                    <button>Save</button>
                </td>
            </tr>
        );
    }

    return (
        <div className="orderoutterdiv">
            <table className="table table-dark ">
                <thead>
                    <tr>
                        <th scope="col">order_Id</th>
                        <th scope="col">Customer_name</th>
                        <th scope="col">order_Date</th>
                        <th scope="col">service_Date-Time</th>
                        <th scope="col">order_Status</th>
                        <th scope="col">Assign_Status</th>
                        <th scope="col">Assign Employee</th>
                        <th scope="col">Save</th>
                    </tr>
                </thead>
                <tbody>

                    {getdatarow()}

                </tbody>
            </table>
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import Admin from '../admin/admin';
import ServerUrl from '../ServerUrl';

export default function ViewAllCust() {
    const [customers, setcustomers] = useState([])
const loco=useLocation()
    console.log(loco.state)
    const custloyee=loco.state


  function  getAllcusts(){
    axios.get(ServerUrl+"/admin/customers").then((res)=>{
        setcustomers(res.data)
    })
  }
  console.log(customers)

  useEffect(getAllcusts,[])
      return (
        <>
        <Admin/>
        <div style={{ position: "absolute",
    left: "200px",
    top: "39px",
    width: "582%",
    height: "100%",
    background: "rgb(28 56 70 / 92%)",
    border: "2px solid rgb(5, 0, 0)"}}>
        <div className="row p-5">
                        <div style={{
                                overflow: "scroll",
                                height: "530px"
                        }} className="col-md-12">
                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th className="border-1 text-uppercase small font-weight-bold">ID</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Name</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Email</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Mobile</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Area</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">City</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Address</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Pincode</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {customers.map((cust)=>
                                    <tr>
                                    <td>{cust.custId}</td>
                                    <td>{cust.name}</td>
                                    <td>{cust.email}</td>
                                    <td>{cust.mobileNo}</td>
                                    <td>{cust.area}</td>
                                    <td>{(cust.city)}</td>
                                    <td>{(cust.address)}</td>
                                    <td>{(cust.pincode)}</td>
                                    <td>
                                    <Link to={{pathname:"/CustomerForm",state:cust}} type="button" class="btn btn-primary btn-sm">Edit</Link>
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

import React, { useState } from 'react'
import { useLocation } from 'react-router'

export default function ViewInvoiceDetails() {
    const[empid,setempid]=useState(0)
const loco=useLocation()
console.log(loco.state)
const user=loco.state;
let sdate = new Date(user.serviceDate) 
let pdate = new Date(user.paymentDate) 
let odate = new Date(user.ordersDate)
    return (
        <div className="outerdiv-cust-form" style={{ overflow:'scroll', height: `100%`,width:`582%`}}>
            
            <div className="row">
        <div className="col-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="row p-5">
                        <div className="col-md-6">
                            <h1>Order  : {user.ordersStatus}</h1>
                            <p className="mb-1"><span className="text-muted">Service Date-Time: </span> {user.serviceDate}-{user.serviceTime}</p>
                            
                        </div>

                        <div className="col-md-6 text-right">
                            <p className="font-weight-bold mb-1">Invoice #{user.ordersId}</p>
                            <p className="text-muted">{user.ordersDate}</p>
                        </div>
                    </div>

                    <hr className="my-5"/>

                    <div className="row pb-5 p-5">
                        <div className="col-md-6">
                            <p className="font-weight-bold mb-4">Customer Information</p>
                            <p className="mb-1"><span className="text-muted">ID: </span> {user.custId}</p>
                            <p className="mb-1">{user.name}</p>
                            <p>{user.area}</p>
                            <p className="mb-1">{user.address}   {user.city}</p>
                            <p className="mb-1"><span className="text-muted">Vehicle No: </span> {user.vehicleRegNo}</p>
                        </div>

                        <div className="col-md-6 text-right">
                            <p className="font-weight-bold mb-4">Payment Details</p>
                            <p className="mb-1"><span className="text-muted">Date: </span> {user.paymentDate}</p>
                            <p className="mb-1"><span className="text-muted">ID: </span> {user.paymentId}</p>
                            <p className="mb-1"><span className="text-muted">Payment Mode: </span> {user.paymentMode}</p>
                            <p className="mb-1"><span className="text-muted">Txn: </span>{user.txnNo}</p>
                        </div>
                    </div>

                    <div className="row p-5">
                        <div className="col-md-12">
                            <table className="table">
                                <thead>
                                    <tr style={{color:"black"}}>
                                        <th className="border-0 text-uppercase small font-weight-bold">ID</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Item</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">vehicle-Problem</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Validity</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Unit Cost</th>
                                        <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{color:"black"}}>
                                        <td>{user.subPckId}</td>
                                        <td>{user.subPckName}</td>
                                        <td>{user.vehicleProblem}</td>
                                        <td>{user.validity}</td>
                                        <td>{user.price}</td>
                                        <td>{(user.price)+(user.price * 0.09)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                        <div className="py-3 px-5 text-right">
                            <div className="mb-2">Grand Total</div>
                            <div className="h2 font-weight-light">{(user.price)+(user.price * 0.09)}</div>
                        </div>

                        {/* <div className="py-3 px-5 text-right">
                            <div className="mb-2">Discount</div>
                            <div className="h2 font-weight-light">10%</div>
                        </div>

                        <div className="py-3 px-5 text-right">
                            <div className="mb-2">Sub - Total amount</div>
                            <div className="h2 font-weight-light">$32,432</div>
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
        </div>
    )
}

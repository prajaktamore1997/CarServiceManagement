import React from 'react'
import { useHistory } from "react-router";
import { useState } from 'react';

const TrackStatusRow = (props) => {
        const history = useHistory()
        const [status, set] = useState(props.order.ordersStatus)
        const [Completed, setused] = useState("Completed")
        const [booked, setbooked] = useState("Booked")
        const [pending, setpending] = useState("Pending")

        function sendToTrackStatus() {
                history.push("/")
        }

        if (status === Completed) {
                return (
                        <div className="container  sbR1">
                                <h1>{props.order.subPck.subPckName}</h1>
                                <p><b>OrderId     =       </b> {props.order.ordersId}  </p>
                                <p>Vehicle with Regestation Number: {props.order.customerVehicle.vehicleRegNo}</p>
                                <p>service  Date : {props.order.ordersDate}</p>
                                <p>service  Time : {props.order.ordersDate}</p>
                                <h4><b>Request status :{props.order.ordersStatus}[already used service]</b></h4>
                                <div onClick={() => sendToTrackStatus()} className="container btndiv"><a Style=" " className="btn btn2 btn1 " >Back to Home</a>

                                </div>
                        </div>
                )
        } else if (status === booked) {
                return (
                        <div className="container  sbR1">
                                <h1>{props.order.subPck.subPckName}</h1>
                                <p><b>OrderId     =       </b> {props.order.ordersId}  </p>
                                <p>Vehicle with Regestation Number: {props.order.customerVehicle.vehicleRegNo}</p>
                                <h4><b>Request status :{props.order.ordersStatus}[Just package is purchased ..appointment have not made yet]</b></h4>
                                <div onClick={() => sendToTrackStatus()} className="container btndiv"><a Style=" " className="btn btn2 btn1 " >Back to Home</a>
                                </div>
                        </div>
                )
        } else if (status === pending) {
                return (
                        <div className="container  sbR1">
                                <h1>{props.order.subPck.subPckName}</h1>
                                <p><b>Order Id     =       </b> {props.order.ordersId}  </p>
                                <p>Vehicle with  Registration Number: {props.order.customerVehicle.vehicleRegNo}</p>
                                <p>service  Date : {props.order.serviceDate}</p>
                                <p>service  Time : {props.order.serviceTime}</p>
                                <h4><b>Request status :{props.order.ordersStatus} [Appointment Have not accepted yet..please wait]</b></h4>
                                <div onClick={() => sendToTrackStatus()} className="container btndiv"><a Style=" " className="btn btn2 btn1 " >Back to Home</a>
                                </div>
                        </div>
                )
        } else {
                return (
                        <div className="container  sbR1">
                                <h1>{props.order.subPck.subPckName}</h1>
                                <p><b>Order Id     =       </b> {props.order.ordersId}  </p>
                                <p>Vehicle with Regestation Number: {props.order.customerVehicle.vehicleRegNo}</p>
                                <p>service  Date : {props.order.ordersDate}</p>
                                <p>service  Time : {props.order.serviceTime}</p>
                                <h4><b>Request status :{props.order.ordersStatus}</b></h4>
                                <p>Name of Mechanic Working on  Vehicle  : {props.order.employeeOutDto.firstName}  {props.order.employeeOutDto.lastName}</p>
                                <p>Mobile Number of Mechanic Working  on  Vehicle  : {props.order.employeeOutDto.mobile}</p>
                                <div onClick={() => sendToTrackStatus()} className="container btndiv"><a Style=" " className="btn btn2 btn1 " >Back to Home</a>
                                </div>
                        </div>
                )
        }
}

export default TrackStatusRow

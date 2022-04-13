import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AddComplaint from '../Complaint/AddComplaint';
import { TrackStatus } from '../TrackStatus/TrackStatus';
const OrderRow = (props) => {
    const history = useHistory()
    const [status, set] = useState(props.order.ordersStatus)
    const [booked, setused] = useState("Booked")

    if (status === booked) {
        function sendToUsePackage() {
            console.log(props.order.ordersId)
            sessionStorage.setItem("v_regNo", props.order.customerVehicle.vehicleRegNo)
            sessionStorage.setItem("o_subpackageName", props.order.subPck.subPckName)
            sessionStorage.setItem("orderId", props.order.ordersId)
            history.push('/UsePackage')
        }
        return (
            <div className="container  sbR1">
                <h1>{props.order.subPck.subPckName}</h1>
                <p><b>Order Id     =       </b> {props.order.ordersId}  </p>
                <p>Booked for Vehicle with RegNo: {props.order.customerVehicle.vehicleRegNo}</p>
                <p>Order Date : {props.order.ordersDate}</p>
                <div> {props.order.subPck.subPckName === sessionStorage.getItem("r_spckName") ? <></> : <label className="price">Price : {props.order.subPck.price}  Rs</label>}
                </div>
                <div className="container btndiv"><a Style=" " className="btn btn2 btn1 " onClick={() => sendToUsePackage()}>Appointment Now</a>
                </div>
            </div>
        )
    } else if (status === "Completed") {

        function AddComplaint() {
            sessionStorage.setItem("c_oid", props.order.ordersId)
            history.push('/Complaint')
        }
        return (

            <div className="container  sbR1">
                <h1>{props.order.subPck.subPckName}</h1>
                <p><b>OrderId     =       </b> {props.order.ordersId}  </p>
                <p>Booked for Vehicle with Regestration No: {props.order.customerVehicle.vehicleRegNo}</p>
                <p>Order Date : {props.order.ordersDate}</p>
                <p className="price">Service has done .... used service  </p>
                <div> {props.order.subPck.subPckName === sessionStorage.getItem("r_spckName") ? <></> : <label className="price">Price : {props.order.subPck.price}  Rs</label>}
                    <div className="container btndiv"><button Style=" " className="btn btn2 btn1 " onClick={() => { AddComplaint() }}>Complaint ?</button>
                    </div>
                </div>
            </div>)
    } else {
        function sendToTrackStatus() {
            history.push('/Trackstatus', { orderId: props.order.ordersId })
        }
        return (
            <div className="container  sbR1">
                <h1>{props.order.subPck.subPckName}</h1>
                <p><b>OrderId     =       </b> {props.order.ordersId}  </p>
                <p>Booked for Vehicle with Regestration No: {props.order.customerVehicle.vehicleRegNo}</p>
                <p>Order Date : {props.order.ordersDate}</p>
                <p className="price">Appointment currently in process   </p>
                <div>  {props.order.subPck.subPckName === sessionStorage.getItem("r_spckName") ? <></> : <label className="price">Price : {props.order.subPck.price}  Rs</label>}
                    <div onClick={() => sendToTrackStatus()} className="container btndiv"><a Style=" " className="btn btn2 btn1 " >TrackStatus </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderRow

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UsePackage = () => {
    const history = useHistory();
    const c_id = sessionStorage.getItem("id")
    const o_id = sessionStorage.getItem("orderId")
    const v_RegNo = sessionStorage.getItem("v_regNo")
    const s_name = sessionStorage.getItem("o_subpackageName")
    const [custId, setCustId] = useState(c_id)
    const [orderId, setOrderId] = useState(o_id)
    const [packName, setPackageName] = useState(s_name)
    const [Date, setDate] = useState('')
    const [Time, setTime] = useState('')
    const [vehicleProblem, setVehicleIssue] = useState('')
    const [RegNo, setRegNo] = useState(v_RegNo)

    const sendToserver = () => {
        if (Date == 0 || Date === undefined || Date === null || Date === '') {
            alert('Select Appointment  date')
        } else if (Time.length === 0 || Time === "" || Time === null) {
            alert('Select Appointment Time')
        } else if (vehicleProblem.length === 0) {
            alert('specify vehicle problem')
        }
        else {
            const data = new FormData();
            data.append('custId', c_id)
            data.append('ordersId', o_id)
            data.append('serviceDate', Date)
            data.append("serviceTime", Time)
            data.append('vehicleProblem', vehicleProblem)

            history.push("/")
            axios.post("http://localhost:8080" + '/order/useservice', data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    alert('Booked Appointment Successfully!')
                    history.push("/")
                } else {
                    alert(result.error)
                    history.push("/Order")
                }
            }
            )
        }

    }
    return (
        <div className="container w-50">
            <h3>Use Package</h3>
            <hr />
            <p>Order ID : {orderId}</p>
            <div className="form-group">
                <label>Package Name</label>
                <input
                    type="text" className="form-control" value={packName} readOnly />
            </div>
            <div className="form-group">
                <label>Vehicle Regestration Number </label>
                <input type="text" required="required" className="form-control" value={RegNo} readOnly />
            </div>
            <div className="form-group">
                <label>Service Date </label>
                <input onChange={(e) => {
                    setDate(e.target.value)
                }}
                    type="date" className="form-control" />
            </div>
            <div className="form-group">
                <label>Enter Service Time </label>
                <select className="form-control" name="dropdown" onChange={(i) => setTime(i.target.value)} placeholder="select service date">
                    <option className="form-control" value={""}>select service time</option>
                    <option className="form-control" value="10am to 11pm">10am to 11pm</option>
                    <option className="form-control" value="11am to 12pm">11am to 12pm</option>
                    <option className="form-control" value="12pm to 1pm">12pm to 1pm</option>
                    <option className="form-control" value="1pm to 2pm">1pm to 2pm</option>
                    <option className="form-control" value="2pm to 3pm">2pm to 3pm</option>
                    <option className="form-control" value="3pm to 4pm">3pm to 4pm</option>
                    <option className="form-control" value="4pm to 5pm">4pm to 5pm</option>
                    <option className="form-control" value="5pm to 6pm">5pm to 6pm</option>
                    <option className="form-control" value="6pm to 7pm">6pm to 7pm</option>
                </select>
            </div>
            <br />
            <div className="form-group">
                <label>Specify Repair Problem</label>
                <textarea className="form-control" onChange={(j) => {
                    setVehicleIssue(j.target.value)
                }} rows='5' cols="90" minLength="0" maxLength="255" className="form-control" placeholder="Enter here" > </textarea>
            </div>
            <button onClick={sendToserver} type="submit" className="btn btn-dark btn-lg btn-block" Style="margin:10px">Book Appointment</button>
        </div>
    )
}
export default UsePackage;

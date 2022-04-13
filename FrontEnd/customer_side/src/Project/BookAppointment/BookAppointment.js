import React from 'react'
import { useState, useEffect } from 'react';
import Home from '../HomePage/Home';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const BookAppointment = () => {

  const history = useHistory();
  const s_id = sessionStorage.getItem("r_spckId")
  const c_id = sessionStorage.getItem("id")
  const s_name = sessionStorage.getItem("r_spckName")
  const [custId, setCustId] = useState(c_id)
  const [subPckId, setSubPckId] = useState(s_id)
  const [packName, setPackageName] = useState(s_name)
  const [Date, setDate] = useState('')
  const [Time, setTime] = useState('')
  const [vehicleProblem, setVehicleIssue] = useState('')
  const [vehicleRegNo, setRegNo] = useState('')
  const [manufacturer, setAllManufacturer] = useState([])
  const [models, setModels] = useState([])
  const [modelId, setModelId] = useState()

  useEffect(() => {
    getVehicleDetailFromServer()
  }, [])
  function getVehicleDetailFromServer() {
    axios.get("http://localhost:8080" + '/vehicle/make').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setAllManufacturer(result.data);
      } else {
        alert(result.error)
      }
    })
  }

  function getAllModel(e) {
    axios.get("http://localhost:8080" + '/vehicle/model/' + e).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setModels(result.data);
      } else {
        alert(result.error)
      }
    })

  }

  function pushData() {
    sessionStorage.setItem("vehicleRegNo", vehicleRegNo)
    if (vehicleRegNo.length <= 8 || vehicleRegNo === 0 || vehicleRegNo === undefined || vehicleRegNo === null || vehicleRegNo === '') {
      alert("enter Appropriate vehicle  Regestration No")
    } else if (modelId == 0 || modelId === undefined || modelId === null || modelId === '' || modelId == ' ') {
      alert("Select Vehicle Model")
    } else if (Date == 0 || Date === undefined || Date === null || Date === '') {
      alert('enter date')
    }
    else if (Time.length === 0 || Time === "" || Time === null) {
      alert('select Appointment Time')
    } else if (vehicleProblem.length === 0) {
      alert('specify vehicle problem')
    }
    else {

      const data = new FormData();
      data.append('custId', custId)
      data.append('subPckId', subPckId)
      data.append('modelId', modelId)
      data.append('serviceDate', Date)
      data.append("serviceTime", Time)
      data.append("vehicleRegNo", vehicleRegNo)
      data.append('vehicleProblem', vehicleProblem)

      history.push("/")
      axios.post("http://localhost:8080" + '/order/repair', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert(result.data)

        } else {
          history.push("/Services")

        }
      })

    }
  }

  if (s_name === "undefined" || s_name === null || s_name === undefined || c_id === null) {
    return (<div><h6>sorry for inconvinience ...page cant loaded possible causes  are 1.Not Logged In Or 2.currently this  service not available please  check another service  available</h6></div>)
  } else {
    return (
      <div className="container w-50">
        <p align='center'><font size='7'>Book Appointment </font></p>
        <div className="form-group">
          <h1>Service Name : <b >{s_name}</b><hr /></h1>
        </div>


        <div className="form-group">
          <label>Vehicle Reg No</label>
          <input onChange={(e) => {
            setRegNo(e.target.value)
          }}
            type="text" className="form-control" placeholder="Enter Registration No" required="required" />
        </div>
        <br></br>

        <div className="form-group">
          <select className="form-control" onChange={(e) => { getAllModel(e.target.value) }} name="dropdown" >
            <option className="form-control" value="1" selected>Select vehicle make</option>
            {manufacturer.map((make) => {
              return (<option className="form-control" value={make.makeId} >{make.makeName}</option>)
            })}
          </select>

        </div>
        <br />
        <div className="form-group">
          <select className="form-control" onChange={(e) => { setModelId(e.target.value) }} name="dropdown" >
            <option className="form-control" value={0}>Select vehicle model</option>
            {models.map((Model) => {
              return (<option className="form-control" value={Model.modelId} >{Model.modelName}</option>)
            })}
          </select>
        </div>

        <div className="form-group">
          <label>Service Date </label>
          <input onChange={(e) => {
            setDate(e.target.value)
          }}
            type="date" className="form-control" />
        </div>

        <div className="form-group">
          <label>select Appointment Time</label>
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
        <center>
          <button Style="margin:10px;height:60px ;width:300px" onClick={pushData} className="  btn-dark btn-lg btn-block">Book Appointment</button>
        </center>
      </div>
    )
  }

}
export default BookAppointment;
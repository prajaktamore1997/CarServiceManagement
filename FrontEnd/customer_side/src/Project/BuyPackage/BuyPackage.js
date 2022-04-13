import React from 'react'
import { useState, useEffect } from 'react';
import Home from '../HomePage/Home';
import axios from "axios";
import SubPackageRow from './../SubPackage/SubPackageRow';
import { useLocation, useHistory } from 'react-router-dom'
import Signin from './../Signin/Signin';

const BuyPackage = () => {

  const [subPackageName, setSubPackageName] = useState(sessionStorage.getItem("subpackageName"))
  const [subPckId, setSubPckId] = useState(sessionStorage.getItem("subpackageId"))
  const [subPackgePrice, setSubPackgePrice] = useState(sessionStorage.getItem("subpackagePrice"))
  const [vehicleRegNo, setRegNo] = useState(" ")
  const history = useHistory();
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
    sessionStorage.setItem("modelId", modelId)
    sessionStorage.setItem("vehicleRegNo", vehicleRegNo)
    if (vehicleRegNo.length <= 8 || vehicleRegNo === 0 || vehicleRegNo === undefined || vehicleRegNo === null || vehicleRegNo === '') {
      alert("enter Appropriate vehicle  Regestration No")
    } else if (modelId == 0 || modelId === undefined || modelId === null || modelId === '' || modelId == ' ') {
      alert("Select Vehicle Model")
      history.push("/BuyPackage")
    } else {
      history.push('/Payment')
    }
  }

  if (sessionStorage.getItem("id") !== null) {
    return (
      <div className="container w-50">
        <p align='center'><font size='7'>Buy Package </font></p>
        <div className="form-group">
          <h1>Package Name : <b >{subPackageName}</b><hr /></h1>
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
            <option className="form-control" value={0} selected>Select vehicle make</option>
            {manufacturer.map((make) => {
              return (<option className="form-control" value={make.makeId} >{make.makeName}</option>)
            })}
          </select>
        </div>
        <br />
        <div className="form-group">
          <select className="form-control" onChange={(e) => { setModelId(e.target.value) }} name="dropdown" >
            <option className="form-control" value={0} >Select vehicle model</option>
            {models.map((Model) => {
              return (<option className="form-control" value={Model.modelId} >{Model.modelName}</option>)
            })}
          </select>
        </div>
        <center>
          <button Style="margin:10px;height:60px ;width:300px" onClick={() => pushData()} className="  btn-dark btn-lg btn-block">Pay</button>
        </center>
      </div>
    )
  } else {
    return (<Signin />)
  }
}

export default BuyPackage;

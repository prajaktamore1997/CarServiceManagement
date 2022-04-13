import './ServiceForm.css';
import { useEffect, useState } from 'react';
import ServerUrl from './../ServerUrl';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router';


function ServiceForm() {

  const [makeId, setmakeId] = useState(0)
  const [subPckId, setsubPckId] = useState(0)
  const [mainPckName, setmainPckName] = useState("")
  const [subPckName, setsubPckName] = useState("")
  const [validity, setvalidity] = useState(0)
  const [status, setstatus] = useState(0)
  const [price, setprice] = useState(0)

  const his=useHistory();
const loco=useLocation();



const check = () => {
  if (!(loco.state == null)) {
    setmainPckName(loco.state.mname)
    setmakeId(loco.state.mainPckId)
    setsubPckId(loco.state.sub.subPckId)
    setsubPckName(loco.state.sub.subPckName)
    setvalidity(loco.state.sub.validity)
    setstatus(loco.state.sub.status)
    setprice(loco.state.sub.price)
  }
}
useEffect(check, [])

  function saveService() {
    if (mainPckName === "")
      alert("Enter mainPckName")
    else if (subPckName === "")
      alert("Enter subPckName")
    else if (validity === 0)
      alert("Enter validity")
    else if (price === 0)
      alert("Enter price")
    else {
      const servicedata = {
        "mainPckName": mainPckName,
        "subPckName": subPckName,
        "validity": validity,
        "status": status,
        "price": price
      }
      axios.post(`${ServerUrl}/admin/savemainsubpck/${makeId}`, servicedata).then((res) => {
        his.push("/services")
          alert(res.data)
         
        })
    }
  }

const UpdateService=( )=>{
  const servicedata = {
    "makeId": makeId,
    "subPckId": subPckId,
    "mainPckName": mainPckName,
    "subPckName": subPckName,
    "validity": validity,
    "status": status,
    "price": price
  }
  console.log(servicedata)
  axios.put(`${ServerUrl}/admin/servicepck/${makeId}`,servicedata).then((res)=>{
      his.push("/services")
      alert(res.data)
  })
}

  return (
    <div className="mainform">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Main-Service</label>
        <input type="text" value={mainPckName} required="required" onChange={(e) => {setmainPckName(e.target.value)}} className="form-control" placeholder="Main service" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Sub-Pck</label>
        <input type="text" value={subPckName} onChange={(e) => setsubPckName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Sub package" />
      </div>


      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Validity</label>
        <input type="number"  value={validity} onChange={(e) => setvalidity(e.target.value)} className="form-control"  placeholder="Validity in days" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Avaiable</label>
        <input type="number"  value={status} onChange={(e) => setstatus(e.target.value)} placeholder="1 for Avaiable" className="form-control" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Price</label>
        <input type="number"  value={price} onChange={(e) => setprice(e.target.value)} className="form-control"  placeholder="00000" />
      </div>
      {makeId==0?<button type="button" onClick={saveService} class="btn btn-sm btn-success">Add</button>
       :<button type="button"  onClick={UpdateService} class="btn btn-sm btn-warning">Update</button>
      }
       

    </div>

  )
}
export default ServiceForm;
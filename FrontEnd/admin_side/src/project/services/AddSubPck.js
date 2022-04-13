import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import ServerUrl from '../ServerUrl'

export default function AddSubPck() {

    const [subPckName, setsubPckName] = useState("")
    const [validity, setvalidity] = useState(0)
    const [status, setstatus] = useState(0)
    const [price, setprice] = useState(0)
  
    const his=useHistory();
  const loco=useLocation();
const main=loco.state;
  

const AddMore=()=>{
    const subpck={
        "subPckName":subPckName,
        "validity":validity,
        "status":status,
        "price":price
    }

    axios.put(`${ServerUrl}/admin/add-more-sub/${main.id}`,subpck).then((res)=>{
        his.push("/services");
        alert(res.data)
    })
}
    return (
        
    <div className="mainform">
        <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Main-Service</label>
      <input type="text" value={main.id} readOnly className="form-control" placeholder="Main service" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Main-Service</label>
      <input type="text" value={main.pck} readOnly className="form-control" placeholder="Main service" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Sub-Pck</label>
      <input type="text" value={subPckName} onChange={(e) => setsubPckName(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Sub package" />
    </div>


    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Validity</label>
      <input type="number"   onChange={(e) => setvalidity(e.target.value)} className="form-control"  placeholder="Validity in days" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Avaiable</label>
      <input type="number"   onChange={(e) => setstatus(e.target.value)} placeholder="1 for Avaiable" className="form-control" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Price</label>
      <input type="number"   onChange={(e) => setprice(e.target.value)} className="form-control"  placeholder="00000" />
    </div>
    
     <button type="button"  onClick={AddMore} class="btn btn-sm btn-warning">Add</button>
    
     

  </div>

    )
}

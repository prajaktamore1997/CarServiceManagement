import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom';

const TrackStatusForm = () => {
  const history = useHistory();
  const [orderId, setOrderId] = useState()

  function pushToNextPage() {
    history.push("/Trackstatus", { orderId: orderId })

  }
  return (
    <div className="cointainer">
      <h2>Track Your vehicle repair Stage</h2>
      <form style={{ margin: "40px" }} className="row g-3">
        <div className="col-auto">
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">Enter Order Id</label>
          <input onChange={(e) => { setOrderId(e.target.value) }} type="password" className="form-control" id="inputPassword2" placeholder="Enter Order Id" />
        </div>
        <div className="col-auto">
          <button onClick={() => pushToNextPage()} type="submit" className="btn btn-primary mb-3">Track Repair Status</button>
        </div>
      </form>
    </div>
  )
}

export default TrackStatusForm;

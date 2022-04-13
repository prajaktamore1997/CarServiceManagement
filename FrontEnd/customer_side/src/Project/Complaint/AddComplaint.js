import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom';
const AddComplaint = () => {

  const history = useHistory();
  const cid = sessionStorage.getItem("id")
  const [ordersId, setordersId] = useState(0)
  const [custId, setCustId] = useState(cid)
  const [subject, setSubject] = useState();
  const [detail, setDetail] = useState();
  function sendComplaint() {
    if (ordersId === 0) {
      alert('enter OrderId..oder Id must  be Valid')
    } else if (subject.length === 0) {
      alert('enter Complaint subject')
    } else if (detail === 0) {
      alert('enter complaint  detail')
    } else {
      const data = new FormData();
      data.append('complaintSubject', subject)
      data.append('complaintDetail', detail)
      data.append('oid', ordersId)
      data.append('cid', custId)

      history.push('/')
      axios.post("http://localhost:8080/order/complaint", data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert(result.data)

        } else {
          alert(result.error)
          history.push('/Addcomplaint')
        }
      })
    }

  }
  return (
    <div className="container w-50">
      <div >
        <h3>Add Complaint</h3>
        <div className="form-group">
          <label> <b>OrderID</b>   </label>
          <input onChange={(e) => {
            setordersId(e.target.value)
          }}
            type="number" className="form-control" required placeholder="Enter Your order Id" />
        </div>
        <br />
        <div className="form-group">
          <label><b>Complaint Subject</b> </label>
          <textarea className="form-control" onChange={(e) => {
            setSubject(e.target.value)
          }} rows='3' cols="90" minLength="50" maxLength="255" placeholder=" specify Complaint subject? (max 20 words)" className="form-control"  > </textarea>
        </div>
        <br />
        <div className="form-group">
          <label><b>Specify Complaint Detail</b></label>
          <textarea className="form-control" onChange={(e) => {
            setDetail(e.target.value)
          }} rows='5' cols="90" minLength="50" maxLength="255" placeholder="Why do you want logged Complaint specify? (max 50 words)" className="form-control"  > </textarea>
        </div>
        <button onClick={sendComplaint} type="submit" className="btn btn-dark btn-lg btn-block" Style="margin:10px">Send Complaint</button>
      </div></div>
  )
}

export default AddComplaint

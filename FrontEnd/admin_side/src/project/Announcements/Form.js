import "./form.css";
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useHistory, useLocation } from "react-router";
import ServerUrl from './../ServerUrl';


function Form() {
  let loco = useLocation();
  let his = useHistory()
  const [subject, setSubject] = useState("")
  const [data, setData] = useState("")
  const [isNew, setisNew] = useState("")
  const [date, setDate] = useState("")
  const [id, setid] = useState("")


  const check = () => {
    if (!(loco.state == null)) {
      setSubject(loco.state.subject)
      setData(loco.state.data)
      setisNew(loco.state.isNew)
      setDate(loco.state.date)
      setid(loco.state.id)
    }
  }
  let flag = parseInt(isNew)

  let AnnData = {
    "subject": subject,
    "data": data,
    "date": date,
    "flag": flag,
    "id": id
  }
  useEffect(check, [])


  const deleteNews = () => {
    axios.delete(`${ServerUrl}/admin/announcement/${loco.state.id}`).then((res) => {
      let result = res.data;
      console.log(result)
      alert(result)
      his.push("/announcement")
    })

  }

  function saveNews() {
    console.log(typeof flag.valueOf())

    if (subject === "")
      alert("Enter Subject")
    else if (data === "")
      alert("Enter News")
    else if (isNew === "")
      alert("Select Radios")
    else if (date === "")
      alert("Select Date")
    else {

      console.log(AnnData)
      axios.post('http://localhost:8080/admin/announcement/', AnnData).then((res) => {
        let result = res.data;
        console.log(result)
        alert(result)
      })
      his.push("/announcement")
    }
  }







  return (
    <form className="do" >
      <div className="mb-3 row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Subject</label>
        <div className="col-sm-10">
          <input type="text" value={subject} contentEditable="false" onChange={(e) => { setSubject(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
        </div>
      </div>

      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">News</label>
        <div className="col-sm-10">
          <textarea name="data" value={data} onChange={(e) => { setData(e.target.value) }}  className="form-control form-control-sm" rows="3" required="required"></textarea>
        </div>
      </div>
      <fieldset className="mb-3 row">
        <legend className="col-form-label col-sm-2 pt-0">Show</legend>
        <div className="col-sm-10">
          <div className="form-check" >
            <input className="form-check-input" value={isNew} type="radio" required id="gridRadios1" value="1" onChange={(e) => { setisNew(e.target.value) }} />
            <label className="form-check-label" for="gridRadios1">
              Show
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value={isNew} id="gridRadios2" value="0" onChange={(e) => { setisNew(e.target.value) }} />
            <label className="form-check-label" for="gridRadios2">
              Hide
            </label>
          </div>
        </div>
      </fieldset>
      <div className="mb-3 row">
        <div className="col-sm-10 offset-sm-2">
          <div className="form-check">
            <label className="form-check-label" for="gridCheck1">
              Date
            </label>
            <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} name="date"  className="form-control form-control-sm" required="required" title="" />
          </div>
        </div>
      </div>

      <>{id === "" ? <><button onClick={saveNews} type="button" className="btn btn-success mx-1">Save</button></> : <><button onClick={saveNews} type="button" className="btn btn-success mx-1">Update</button>
        <button onClick={deleteNews} type="button" className="btn btn-danger mx-1">Delete</button></>}</>
    </form>
  )
}

export default Form;
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ForgotPassword = () => {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState(0)
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const updatePassword = () => {
    if (email.length === 0) {
      alert('enter Email')
    } else if (mobileNumber === 0) {
      alert('enter mobile number')
    } else if (password === 0) {
      alert('enter password')
    } else if (confirmpassword === 0) {
      alert('enter confirm password')
    } else if (!(confirmpassword === password)) {
      alert('Re-enter password')
    }
    else {
      const data = new FormData();
      data.append('email', email)
      data.append('mobileNo', mobileNumber)
      data.append('password', confirmpassword)

      history.push('/Signin')
      axios.post("http://localhost:8080/user/updatepassword", data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully password updated')

        } else {
          alert(result.error)
          history.push('/ForgotPassword')
        }
      })
    }
  }
  return (
    <div>
      <div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => { history.push('/Signin') }}>Signin</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={() => { history.push('/signup') }}>New User ? Create An Account </Link>
                </li>
              </ul>
            </div>
          </nav> <br />
        </div>

      </div>
      <form>
        <h3>Update Password</h3>
        <div className="form-group">
          <label>Registered Email</label>
          <input onChange={(e) => {
            setEmail(e.target.value)
          }} type="email" className="form-control" placeholder="Enter Registered email" required="required" />
        </div>
        <div className="form-group">
          <label>Registered Mobile Number</label>
          <input onChange={(e) => {
            setMobileNumber(e.target.value)
          }} type="number" className="form-control" placeholder="Enter Registered Mobile Number" required="required" />
        </div>
        <div className="form-group">
          <label>Enter new Password</label>
          <input onChange={(e) => {
            setPassword(e.target.value)
          }} type="password" className="form-control" placeholder="Enter password" required="required" />
        </div>
        <div className="form-group">
          <label>Confirm new Password</label>
          <input onChange={(e) => {
            setConfirmPassword(e.target.value)
          }} type="password" className="form-control" placeholder="Enter password" required="required" />
        </div>
        <button type="submit" onClick={updatePassword} className="btn btn-dark btn-lg btn-block" Style="margin:8px">Update</button>
      </form>
    </div>
  )
}
export default ForgotPassword;
import axios from 'axios'
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Signup = () => {
  const history = useHistory();
  const [customerName, setCustomerName] = useState('')
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState(0)
  const [city, setCity] = useState('')
  const [area, setArea] = useState('')
  const [postalCode, setPostalCode] = useState(0)
  const [fullAddress, setFullAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')

  const addUser = () => {
    if (customerName.length === 0) {
      alert('enter Name')
    } else if (email.length === 0) {
      alert('enter Email')
    } else if (mobileNumber === 0) {
      alert('enter mobile number')
    } else if (city === 0) {
      alert('enter city')
    } else if (postalCode === 0) {
      alert('enterpostalCode')
    } else if (fullAddress === 0) {
      alert('enter fullAddress')
    } else if (password === 0) {
      alert('enter password')
    } else if (confirmpassword === 0) {
      alert('enterconfirmpassword')
    } else if (!(confirmpassword === password)) {
      alert('Re-enter password')
    }
    else {
      console.log(customerName);
      console.log(fullAddress);
      console.log(confirmpassword);
      console.log(email);
      const data = new FormData();
      data.append('name', customerName)
      data.append('email', email)
      data.append('mobileNo', mobileNumber)
      data.append('city', city)
      data.append('area', area)
      data.append('pincode', postalCode)
      data.append('address', fullAddress)
      data.append('password', confirmpassword)

      history.push('/Signin')
      axios.post("http://localhost:8080/user/singup", data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully account created')
          history.push('/Signin')
        } else {
          alert('singup failed, please try again..')
        }
      })
    }
  }
  return (<div className="container w-50">
    <div>
      <div className="container ">
        <nav className="navbar navbar-expand-lg navheader">
          <Link className="nav-link" to='/Signin'>Signin</Link>
          <Link className="nav-link " to='/signup'>New User ? Create An Account </Link>
        </nav> <br />
      </div>
    </div>
    <div >
      <h3>Create Account</h3>
      <div className="form-group">
        <label> Full name</label>
        <input onChange={(e) => {
          setCustomerName(e.target.value)
        }}
          type="text" className="form-control" placeholder="Enter Your Full name" />
      </div>
      <div className="form-group">
        <label>Email </label>
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} type="email" required="required" className="form-control" placeholder="Enter your Valid Email Address" />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input onChange={(e) => {
          setMobileNumber(e.target.value)
        }} type="number" className="form-control" placeholder="Enter Mobile Number" />
      </div>
      <div className="form-group">
        <label>Enter city</label>
        <input onChange={(e) => {
          setCity(e.target.value)
        }} type="text" className="form-control" placeholder="Enter  Current city" />
      </div>
      <div className="form-group">
        <label>Enter Area of Address</label>
        <input onChange={(e) => {
          setArea(e.target.value)
        }} type="text" className="form-control" placeholder="Enter  Area  address" />
      </div>
      <div className="form-group">
        <label>Postal Code</label>
        <input onChange={(e) => {
          setPostalCode(e.target.value)
        }} type="number" className="form-control" placeholder="Enter Postal Code" />
      </div>
      <div className="form-group">
        <label>Present Address</label>
        <input onChange={(e) => {
          setFullAddress(e.target.value)
        }} type="text" className="form-control" placeholder="Enter Present Full Address" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }} type="password" className="form-control" placeholder="Enter password " />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input onChange={(e) => {
          setConfirmPassword(e.target.value)
        }}
          type="password" className="form-control" placeholder="Enter password Again " />
      </div>
      <button onClick={addUser} type="submit" className="btn btn-dark btn-lg btn-block" Style="margin:10px">Register</button>
      <p className="forgot-password text-right">
        Already registered <Link to='/Signin'>log in?</Link>
      </p>
    </div>
  </div>
  )
}
export default Signup;
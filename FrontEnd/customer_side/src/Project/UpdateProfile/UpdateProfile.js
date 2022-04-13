import { useLocation } from 'react-router'
import { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const UpdateProfile = () => {
  const location = useLocation()
  const history = useHistory()
  var uucustomerName = location.state.ucustomerName
  var uuemail = location.state.uemail
  var uumobileNumber = location.state.umobileNumber
  var uucity = location.state.ucity
  var uuarea = location.state.uarea
  var uupostalCode = location.state.upostalCode
  var uufullAddress = location.state.ufullAddress
  const [customer, setCustomer] = useState(false)
  const [customerName, setCustomerName] = useState(location.state.ucustomerName)
  const [email, setEmail] = useState(uuemail)
  const [mobileNumber, setMobileNumber] = useState(uumobileNumber)
  const [city, setCity] = useState(uucity)
  const [area, setArea] = useState(uuarea)
  const [postalCode, setPostalCode] = useState(uupostalCode)
  const [fullAddress, setFullAddress] = useState(uufullAddress)

  function UpdateOnserver() {
    setCustomer(true)
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
    }
    else {
      const data = new FormData();
      data.append('name', customerName)
      data.append('email', email)
      data.append('mobileNo', mobileNumber)
      data.append('city', city)
      data.append('area', area)
      data.append('pincode', postalCode)
      data.append('address', fullAddress)
      const CustId = JSON.parse(sessionStorage.getItem("id"))

      history.push('/Profile')
      axios.post("http://localhost:8080/user/updateprofile/" + CustId, data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully Profile updated')
          history.push('/Profile')
        } else {
          alert('singup failed, please try again..')
        }
      }
      )
    }
  }
  return (
    <div className="container w-50">
      <h1>Update Profile Details</h1>
      <div className="form-group">
        <label> Full name</label>
        <input onChange={(e) => {
          setCustomerName(e.target.value)
        }}
          value={customerName} required="required" type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Email </label>
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} type="email" value={email} required="required" className="form-control" />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input onChange={(e) => {
          setMobileNumber(e.target.value)
        }} type="number" required="required" value={mobileNumber} className="form-control" />
      </div>
      <div className="form-group">
        <label>city</label>
        <input onChange={(e) => {
          setCity(e.target.value)
        }} type="text" required="required" value={city} className="form-control" />
      </div>
      <div className="form-group">
        <label>Area</label>
        <input onChange={(e) => {
          setArea(e.target.value)
        }} type="text" value={area} className="form-control" />
      </div>
      <div className="form-group">
        <label>Postal Code</label>
        <input onChange={(e) => {
          setPostalCode(e.target.value)
        }} type="number" required="required" value={postalCode} className="form-control" />
      </div>
      <div className="form-group">
        <label>Present Address</label>
        <input onChange={(e) => {
          setFullAddress(e.target.value)
        }} type="text" value={fullAddress} required="required" className="form-control" />
      </div>
      <button Style="margin:10px " className="btn  btn-success btn-lg btn-block" onClick={UpdateOnserver}>Update Profile</button>
    </div>
  )
}
export default UpdateProfile

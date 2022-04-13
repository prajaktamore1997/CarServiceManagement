import React from 'react'
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const UserProfile = () => {
    const history = useHistory()
    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState(0)
    const [city, setCity] = useState('')
    const [area, setArea] = useState('')
    const [postalCode, setPostalCode] = useState(0)
    const [fullAddress, setFullAddress] = useState('')

    useEffect(() => {
        getUserFromServer()
    }, [city])

    function getUserFromServer() {
        const CustId = JSON.parse(sessionStorage.getItem("id"))
        const id = parseInt(CustId)

        axios.get("http://localhost:8080/user/get/" + CustId).then((response) => {
            const result = response.data
            setCustomerName(result.data.name)
            setEmail(result.data.email)
            setMobileNumber(result.data.mobileNo)
            setCity(result.data.city)
            setArea(result.data.area)
            setPostalCode(result.data.pincode)
            setFullAddress(result.data.address)
        })
    }


    function callToEditUpdate() {
        history.push('/UpdateProfile', {
            ucustomerName: customerName,
            uemail: email,
            umobileNumber: mobileNumber,
            ucity: city,
            uarea: area,
            upostalCode: postalCode,
            ufullAddress: fullAddress,
        }
        )
    }
    return (
        <div className="container w-50">
            <h1>Profile Details</h1>
            <div className="form-group">
                <label> Full name</label>
                <input onChange={(e) => {
                    setCustomerName(e.target.value)
                }}
                    type="text" className="form-control" value={customerName} readOnly />
            </div>
            <div className="form-group">
                <label>Email </label>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" value={email} required="required" className="form-control" readOnly />
            </div>
            <div className="form-group">
                <label>Mobile Number</label>
                <input onChange={(e) => {
                    setMobileNumber(e.target.value)
                }} type="number" value={mobileNumber} className="form-control" readOnly />
            </div>
            <div className="form-group">
                <label>city</label>
                <input onChange={(e) => {
                    setCity(e.target.value)
                }} type="text" value={city} className="form-control" readOnly />
            </div>
            <div className="form-group">
                <label>Area</label>
                <input onChange={(e) => {
                    setArea(e.target.value)
                }} type="text" value={area} className="form-control" readOnly />
            </div>
            <div className="form-group">
                <label>Postal Code</label>
                <input onChange={(e) => {
                    setPostalCode(e.target.value)
                }} type="number" value={postalCode} className="form-control" readOnly />
            </div>
            <div className="form-group">
                <label>Present Address</label>
                <input onChange={(e) => {
                    setFullAddress(e.target.value)
                }} type="text" value={fullAddress} className="form-control" readOnly />
            </div>
            <button className="btn btn-dark btn-lg btn-block" Style="margin:10px" onClick={callToEditUpdate}>Edit Profile</button>
        </div>
    )
}

export default UserProfile

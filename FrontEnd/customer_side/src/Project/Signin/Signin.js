import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios'


import Home from '../HomePage/Home';

const Signin = () => {
  const [loginin, setUser] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signinUser = () => {
    if (email.length === 0) {
      alert('enter email')
    } else if (password.length === 0) {
      alert('enter password')
    }
    else {
      console.log(email);
      console.log(password);
      const data = new FormData();
      data.append('email', email)
      data.append('password', password)
      axios.post("http://localhost:8080/user/singin", data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert('successfully signed in ')
          sessionStorage.setItem("id", result.data.custId);
          sessionStorage.setItem("name", result.data.name);
          window.setTimeout(function () {
            window.location.href = '/';
          }, 1000);
          history.push('/')
        } else {
          alert(result.error)
        }
      }
      )
    }
  }

  if (sessionStorage.getItem('name') === null) {
    return (
      <div className="w-50">
        <div>
          <div className="container ">
            <nav className="navbar navbar-expand-lg navheader">
              <Link className="nav-link" to='/Signin'>Login</Link>
              <Link className="nav-link " to='/signup'>New User ? Create An Account </Link>
            </nav> <br />
          </div>
        </div>
        <form >
          <h3>Log in</h3>
          <div className="form-group">
            <label>Email</label>
            <input onChange={(e) => {
              setEmail(e.target.value)
            }} type="email" className="form-control" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={(e) => {
              setPassword(e.target.value)
            }} type="password" className="form-control" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>
          <button type="submit" onClick={signinUser} className="btn btn-dark btn-lg btn-block">Sign in</button>
          
          <p className="forgot-password text-right">
            Forgot <Link onClick={() => { history.push('/ForgotPassword') }}>password?</Link>
          </p>
        </form>
        <br />
        <br />
      </div>
    )
  } else {
    // eslint-disable-next-line no-lone-blocks
    {
      window.setTimeout(function () {
        window.location.href = '/';
      }, 1)
    }
    return (
      <Home />
    )
  }
}
export default Signin;
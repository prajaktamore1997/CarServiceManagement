import './App.css';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './css/NavBarCSS.css'
import HomeLogo from './images/HomeLogo.jpg'
import userLogo from './images/userLogo.png'
import TrackStatus from './Project/TrackStatus/TrackStatus'
import Order from './Project/Order/Order'
import Home from './Project/HomePage/Home'
import BookAppointment from './Project/BookAppointment/BookAppointment'
import ForgotPassword from './Project/ForgotPassword/ForgotPassword'
import Signout from './Project/Signout/Signout'
import Subpackages from './Project/SubPackage/SubPackage'
import Signup from './Project/Signup/Signup'
import Signin from './Project/Signin/Signin'
import Services from './Project/Mainpackage/MainPackage'
import UserProfile from './Project/UserProfile/UserProfile'
import UpdateProfile from './Project/UpdateProfile/UpdateProfile'
import BuyPackage from './Project/BuyPackage/BuyPackage'
import Payment from './Project/Payment/Payment';
import UsePackage from './Project/UsePackage/UsePackage';
import TrackStatusForm from './Project/TrackStatus/TrackStatusForm';
import AddComplaint from './Project/Complaint/AddComplaint';
import Complaint from './Project/Complaint/Complaint';
import ViewComplaintResponse from './Project/Complaint/ViewComplaintResponse';
import ViewComplaint from './Project/Complaint/ViewComplaint';
import TempCart from './Project/TemporaryCart/TempCart';

function App() {
  const history = useHistory()
  const [subPckId, setsubPckId] = useState()
  const [subPckName, setsubPckName] = useState()
  sessionStorage.setItem("r_spckId", subPckId)
  sessionStorage.setItem("r_spckName", subPckName)

  useEffect(() => {
    getRepairPackageFromServer()
  }, [])

  function getRepairPackageFromServer() {

    axios.get("http://localhost:8080/services/repair").then((response) => {
      const result = response.data
      if (result.status === 'success') {
        console.log(result.data)
        setsubPckId(result.data.subPckId)
        setsubPckName(result.data.subPckName)
      }
    }
    )
  }
  return (
    <div className="display">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark  secondary-color">
          <div className="container-fluid ">
            <Link className="hover-overlay hover-zoom hover-shadow ripple  homelogodiv" to="/home">
              <img className="homelogo" src={HomeLogo} />
              <p className="homelogotext">Car  Service Management</p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li>
                  <Link className="nav-link" to="/Services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/bookappointment">
                    Book Appointment
                  </Link>
                </li>

                {sessionStorage.getItem("name") ?
                  <>
                    <li>
                      <Link className="nav-link" to="/Trackstatusform">
                        TrackStatus
                      </Link>
                      <Link className="nav-link" to="/Tempcart">
                        My Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/Order">
                        My Orders
                      </Link>
                      <Link className="nav-link" to="/Complaint">
                        Complaint
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/Profile">
                        <img className="userlogo" src={userLogo} />
                        <p>Profile</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/SignOut">
                        <p>Signout</p>
                      </Link>
                    </li>
                  </>
                  :
                  <li>
                    <Link className="nav-link" to="/Signin">
                      Signin or Signup
                    </Link>
                  </li>
                }
              </ul>
            </div>
          </div>
        </nav>

        <div className="container maincontainer">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/Services" component={Services} />
            <Route path="/TrackStatus" component={TrackStatus} />
            <Route path="/Order" component={Order} />
            <Route path="/Signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/Profile" component={UserProfile} />
            <Route path="/UpdateProfile" component={UpdateProfile} />
            <Route path="/Buypackage" component={BuyPackage} />
            <Route path="/Signout" component={Signout} />
            <Route path="/bookappointment" component={BookAppointment} />
            <Route path="/Subpackages" component={Subpackages} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/Payment" component={Payment} />
            <Route path="/Usepackage" component={UsePackage} />
            <Route path="/Trackstatusform" component={TrackStatusForm} />
            <Route path="/Trackstatus" component={TrackStatus} />
            <Route path="/Addcomplaint" component={AddComplaint} />
            <Route path="/Complaint" component={Complaint} />  Viewcomplaintresponse
            <Route path="/Viewcomplaint" component={ViewComplaint} />
            <Route path="/Viewcomplaintresponse" component={ViewComplaintResponse} />
            <Route path="/Tempcart" component={TempCart} />
            <Route path="//" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App;

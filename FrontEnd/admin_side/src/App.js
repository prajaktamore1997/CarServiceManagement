
import './App.css';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './project/login/login';
import Admin from './project/admin/admin';
import SignOut from './project/login/SignOut';
import Service from './project/services/Service';
import Report from './project/reports/Report';
import Form from './project/Announcements/Form';
import ServiceForm from './project/services/ServiceForm';
import Announcement from './project/Announcements/Announcement';

import Viewtable from './project/services/Viewtable';
import AddPersonform from './project/reports/addpersonform';
import CustomerForm from './project/customers/CustomerForm';
import EmployeeForm from './project/employee/employeeForm';
import Customers from './project/customers/customers';
import Employee from './project/employee/employee';
import ViewInvoiceDetails from './project/customers/ViewinvoiceDetails';
import AcceptOrder from './project/customers/AcceptOrder';
import ViewAllEmp from './project/employee/viewAllEmp';
import ViewAlldetail from './project/reports/viewAlldetail';
import ComplaintTable from './project/complaint/complaintTable';
import ReplyToCompl from './project/complaint/ReplyToCompl';

import ViewAllCust from './project/customers/viewAllCust';

import ScopeEmp from './project/EmployeeScope/ScopeEmp';
import StatusOrder from './project/EmployeeScope/StatusOrder';

import ViewAllCompletedOrder from './project/EmployeeScope/viewAllCompletedOrder';
import EmployeAnnouncement from './project/EmployeeScope/EmployeAnnouncement';
import ViewProfile from './project/EmployeeScope/ViewProfile';
import EditProfile from './project/EmployeeScope/EditProfile';
import Vehicle from './project/company/vehicle';
import VehicleForm from './project/company/vehicleForm';
import ViewAllVehicle from './project/company/viewAllVehicle';
import VehicleDetails from './project/company/vehicleDetails';
import AddSubPck from './project/services/AddSubPck';
import ModelEdit from './project/company/modelEdit';
import Forget from './project/login/forget';


function App() {
  
  let title="login";


  if(sessionStorage.getItem("role")==="admin" ||sessionStorage.getItem("role")==="emp" )
    title=`Welcome ${sessionStorage.getItem("user")}`
 
  
  return (
<>
    <div className=" text-white bg-dark div-1">
      <div className=' bg-dark'></div>
      <BrowserRouter className="navbar">
        <Link className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" to="/"><span className="fs-4">{title}</span></Link>

        <hr />
        { sessionStorage.getItem("role")==="admin"?
         <ul className="nav nav-pills flex-column mb-auto">
         <li className="nav-item li-1">
         
           <Link className="nav-link text-white" to="/employee">Employee</Link>

         </li>
         <li className="nav-item li-1">


           <Link className="nav-link text-white" to="/customers">Customers </Link>

         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to="/cars">Cars</Link>


         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to="/services">Services</Link>
         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to="/reports">Reports</Link>

         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/announcement">Announcement</Link>
         </li>
       </ul>
       : //conditional ? operator
       <ul className="nav nav-pills flex-column mb-auto">
        
           {/* <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/get-emp-live">Order</Link>
         </li> */}
          <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/get-emp-live">Home</Link>
         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/employeAnnouncement">Announcement</Link>
         </li>
        
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/viewAllCompletedOrder">Completed-Order</Link>
         </li>
         <li className="nav-item li-1">
           <Link className="nav-link text-white" to ="/view-profile">View Profile</Link>
         </li>
       </ul>
       }
       
        <hr />
        <Switch>
          
        <Route path="/forgot-password" component={Forget} ></Route>
        <Route path="/viewtable" component={Viewtable} ></Route>
        <Route path="/Signout" component={SignOut} ></Route>
          <Route path="/services" component={Service} ></Route>
          <Route path="/addperson"  component={AddPersonform} ></Route>
          <Route path="/viewinvoice"  component={ViewInvoiceDetails} ></Route>
          <Route path="/viewpersondetails"  component={ViewAlldetail} ></Route>
          <Route path="/reply-to-complaint"  component={ReplyToCompl} ></Route>
          
          <Route path="/viewallemp"  component={ViewAllEmp} ></Route>
          <Route path="/view-all-cust"  component={ViewAllCust} ></Route>
          
          <Route path="/ServiceForm" component={ServiceForm} ></Route>
          <Route path="/addsubpackage" component={AddSubPck} ></Route>

          <Route path="/Form" component={Form} ></Route>
          <Route path="/admin"  >{Admin}</Route>
          <Route path="/complaint-table" component={ComplaintTable} ></Route>
         
          <Route path="/reports" component={Report}></Route>
          <Route path="/announcement" component={Announcement}></Route>
          <Route path="/customers" component={Customers} ></Route>
          <Route path="/acceptorder" component={AcceptOrder} ></Route>
          <Route path="/employee" component={Employee} ></Route>
          <Route path="/CustomerForm" component={CustomerForm}></Route>
          <Route path="/employeeForm" component={EmployeeForm}></Route>
          
          {/* scopeEmp */}
          <Route path="/get-emp-live" component={ScopeEmp}></Route>
          <Route path="/change-status" component={StatusOrder}></Route>
          <Route path="/viewAllCompletedOrder" component={ViewAllCompletedOrder}></Route>
          <Route path="/employeAnnouncement" component={EmployeAnnouncement}></Route>
          <Route path="/view-profile" component={ViewProfile}></Route>
          <Route path="/edit-profile" component={EditProfile}></Route>

{/* Company */}



<Route path="/cars" component={Vehicle}></Route>
         <Route path="/vehicleForm" component={VehicleForm}></Route>
          <Route path="/viewallvehicle" component={ViewAllVehicle}></Route>
  <Route path="/viewvehicledetails" component={VehicleDetails}></Route>
          {/* <Route path="/vehicleeditform" component={VehicleEditForm}></Route> */}
  {/* <Route path="/vehiclerow" component={VehicleRow}></Route> */}
  <Route path="/editmodel" component={ModelEdit}></Route>


          <Route path="//"   component={Login}></Route>
        </Switch>
      </BrowserRouter>

    </div>
</>
  );
}

export default App;

import Login from "../login/login";
import Admin from "../admin/admin";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./customer.css";
import ServerUrl from "../ServerUrl";

function Customers() {
    const [Customer, setCustomers] = useState([])
   
    function onloaddata() {
        axios.get(ServerUrl+"/admin/neworders").then((res) => {
            const result = res.data;
            setCustomers(result)
        })
    }
   
    useEffect(onloaddata, [])

const SortCustomers=Customer.filter((c)=>c.ordersStatus==="Pending");
Customer.forEach(element => {
    if(element.ordersStatus!=="Pending")
    SortCustomers.push(element);
});

    if (sessionStorage.getItem("id") === "true") {

        return (
            <div>
                <Admin />
                <div className="outerdiv-cust_1">
                    <h1>
                  
                        <Link to="/CustomerForm" type="button" class="btn btn-primary mx-1">Add Customers</Link>

                    </h1>



                    <div className="common-cust_1 d-flex p-2 bd-highlight flex-lg-column   
">

                        <Link type="button" to={{pathname:"/view-all-cust", state:Customer}}  class="btn btn-primary mx-1">View Customers</Link>
                        {/* {Customer===[].length==0?<h1>No Pending Orders</h1>: */}
                        <div className="divone-cust_1 d-inline-flex bd-highlight ">
                            
                            {SortCustomers.map((cust) =>
                                <div className="indiviual-cust mx-1 border ">
                                    <p >-------------------------</p>

                                    <p><strong>{cust.name}</strong></p>
                                    <p><strong>{cust.firstName}</strong></p>
                                    <p><strong>{cust.lastName}</strong></p>
                                    <p>{cust.address}</p>
                                    <Link type="button" to={{ pathname: "/acceptorder", state: cust }} className="btn btn-info  viewbtn">{cust.ordersStatus}</Link>


                                    <p >-------------------------</p>

                                    <Link type="button" to={{ pathname: "/viewinvoice", state: cust }} className="btn btn-info my-1 viewbtn">View</Link>
                                    <Link type="button" to={{ pathname: "/acceptorder", state: cust }} className="btn btn-info  viewbtn">Accept</Link>

                                </div>
                            )}
                        </div>
    {/* } */}
                    </div>
    
                </div>

            </div>

        )
    } else {
        return (
            <Login />
        )
    }
}

export default Customers;


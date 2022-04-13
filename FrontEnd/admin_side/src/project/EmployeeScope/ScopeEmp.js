import Login from "../login/login";
import Admin from "../admin/admin";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./ScopeEmp.css";
import ServerUrl from "../ServerUrl";

function ScopeEmp() {
    const [Orders, setOrders] = useState([])
    
    const loco = useLocation()
    let empId=0;
    if(loco.state===undefined)
    empId=sessionStorage.getItem("ids");
    else
     empId=loco.state;

    function onloaddata() {
       
        if(sessionStorage.length!==0)
        axios.get(`${ServerUrl}/emp/get-emp-orders/${empId}`).then((res) => {
            const result = res.data;
            setOrders(result)
        })
       
    }
    
    useEffect(()=>{ 
        if(sessionStorage.length!==0)
        onloaddata()
    },[])



    const filterOrders=Orders.filter((o)=>o.ordersStatus!=="Completed")
console.log(filterOrders)

    if (sessionStorage.getItem("id") === "true") {

        return (
            <div>
                <Admin />
                <div className="outerdiv-cust">
                    <h1>
                        Order
                    </h1>



                    <div className="common-cust d-flex p-2 bd-highlight flex-lg-column   
">
                        {/* <Link type="button" to={{pathname:"/view-all-emp-orders", state:Orders}}  class="btn btn-primary mx-1">View Orders</Link> */}
                        {/* {Orders===[].length==0?<h1>No Pending Orders</h1>: */}
                        <div className="divone-cust d-inline-flex bd-highlight ">
                            
                            {filterOrders.map((cust) =>
                                <div className="indiviual-cust mx-1 border ">
                                    <p >-------------------------</p>

                                    <p><strong>{cust.name}</strong></p>
                    
                                    <p>{cust.address}</p>
                                    <Link type="button"  to={{ pathname: "/change-status", state: cust }} className="btn btn-info  viewbtn">{cust.ordersStatus}</Link>


                                    <p >-------------------------</p>

                                    <Link type="button" to={{ pathname: "/viewinvoice", state: cust }} className="btn btn-info my-1 viewbtn">Details</Link>
                                    <Link type="button" to={{ pathname: "/change-status", state: cust }} className="btn btn-info  viewbtn">Status</Link>

                                </div>
                            )}
                        </div>
    {/* } */}
                    </div>
                    {/* <div className="divtwo d-inline-flex bd-highlight
">
        <p>Employee</p>

        <GenericCompo Generic={employees} />


    </div> */}
                </div>

            </div>

        )
    } else {
        return (
            <Login />
        )
    }
}

export default ScopeEmp;
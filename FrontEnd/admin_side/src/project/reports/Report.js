import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../admin/admin";
import Login from "../login/login";
import GenericCompo from "./GenericComp";
import './Reports.css';

function Report() {
    const [employees, setEmployees] = useState([])
    const [customers, setCustomers] = useState([])
    let result;
    function getAllCustomers() {
        axios.get("http://localhost:8080/admin/customers/").then((res) => {
            result = res.data;
            setCustomers(result)
        })

        axios.get("http://localhost:8080/admin/employees/").then((res) => {
            result = res.data;
            setEmployees(result)
        })

    }

    useEffect(getAllCustomers, [])
    console.log(employees)

    console.log(customers);
        


    if (sessionStorage.getItem("id") === "true") {
        return (
            <div>
                <Admin />

                <div className="outerdiv">
                    <h1>
                      
                        {/* <Link to={{pathname:"/addperson",state:"emp"}} type="button" class="btn btn-primary mx-1">Add Customers</Link>
                        <Link to={{pathname:"/addperson",state:"cust"}} type="button" class="btn btn-primary mx-1">Add Employee</Link> */}

                    </h1>



                    <div className="common d-flex bd-highlight flex-lg-column   
">
                        <div className="divone d-inline-flex bd-highlight 
">
                            <p>Customer</p>

                            <GenericCompo Generic={customers} />



                        </div>
                        <div className="divtwo d-inline-flex bd-highlight
">
                            <p>Employee</p>

                            <GenericCompo Generic={employees} />


                        </div>
                    </div>

                </div>
            </div>
        )

    } else {
        return (<Login />)
    }

}

export default Report;
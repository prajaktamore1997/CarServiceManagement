import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Admin from '../admin/admin';
import Login from '../login/login';
import "./vehicle.css";


function Vehicle(){
    const [vehicle, setVehicles] = useState([])
    function onloaddata(){
        axios.get("http://localhost:8080/admin/get-all-vehicles").then((res)=>{
            const result = res.data
            setVehicles(result)
        })
    }
    useEffect(onloaddata, [])

    if(sessionStorage.getItem("id")  === "true"){
       
console.log(vehicle)
        return(
            <div>
                <Admin />
            
                <div className="outerdiv-vehicle">
                 <h1>
                 
                    <Link to="/VehicleForm" type="button" class="btn btn-primary mx-1">Add Vehicle</Link>
                </h1>


                <div className="common-vehicle d-flex p-2 bd-highlight flex-lg-column">

                    <Link type="button" to={{pathname: "/viewallvehicle", state:vehicle}} class="btn btn-primary mx-1">View Manufacturers</Link>
                    <div className="divone-vehicle d-inline-flex bd-highlight">
                        {vehicle.map((veh)=>
                        <div className="indiviual-vehicle mx-1 border">
                             <p >-------------------------</p>
                             <p><strong>{veh.makeName}</strong></p>
                            

                             <p >-------------------------</p>
                             <Link type="button" to={{pathname:"/viewvehicledetails",state:veh}} className="btn btn-info  viewbtn">View</Link>

                        </div>
                       
                        )}

                    </div>

                </div>

                </div>
            </div>
        )
    }
    else{
        return(
            <Login />
        )
    }
}

export default Vehicle;
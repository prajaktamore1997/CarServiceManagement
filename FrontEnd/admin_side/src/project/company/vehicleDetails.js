import "./vehicleDetails.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import ServerUrl from "../ServerUrl";
import { useLocation } from 'react-router';
import { Link } from "react-router-dom";



function VehicleDetails(){
    const [ model, setmodels] = useState([])
    const loco = useLocation()
    console.log(loco.state)
    const company = loco.state
    function onloaddata(){
       // alert("CHeck")
        axios.get(`${ServerUrl}/admin/get-models/${company.makeId}`).then((res)=>{
            const result= res.data;
            console.log(res.data)
            setmodels(result)
        })
    }
    useEffect(onloaddata,[])
    
    return(
        <div className= "viewout table-responsive">
            <p className="para"> Company :      {  company.makeId     }   {  company.makeName}
            <Link type="button" to={{pathname:"/editmodel",state:{"id":company.makeId,"model":{"modelId":0,"modelName":"","fueltype":""}}}} class="btn btn-primary btn-sm">Add-Model</Link>
                   
             </p>

        <table className="table table-striped table-hover">
           <thead >
            <th scope="col">Id</th>
            
            <th scope="col">Model</th>
            <th scope="col">Fuel Type</th>
            <th scope="col">Edit</th>
        </thead>
        <tbody>
            {model.map((m)=>
                <tr style={{color:"white"}}>
                    
                    <td>{m.modelId}</td>
    
                    <td>{m.modelName}</td>
                    <td>{m.fueltype}</td>
                    <td>
                    <Link type="button" to={{pathname:"/editmodel",state:{"id":company.makeId,"model":m}}} class="btn btn-primary btn-sm">Edit</Link>
                    </td>
                </tr>
            )}
        </tbody>
        </table>
        </div>
    )
}

export default VehicleDetails;
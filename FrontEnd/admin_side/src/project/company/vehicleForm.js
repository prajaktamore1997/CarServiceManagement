import axios from "axios";
import { useState } from "react";
import './vehicleForm.css'
import ServerUrl from './../ServerUrl';

function VehicleForm(){
    const [modelId, setmodelId] = useState(0)
    const [makeName, setmakeName] = useState("")
    const [modelName, setmodelName] = useState("")
    const [fuelType, setfuelType] = useState("")
    const [ makeId, setmakeId] = useState(0)

    function saveVehicle(){
        if(modelName === "")
        alert("Enter Model Name")
        else{
            let vehicledata = {
               // "modelId":modelId,
                "makeName":makeName,
                "modelName":modelName,
                "fuelType":fuelType,
                //"makeId":makeId
            }
            axios.post(`${ServerUrl}/admin/save-company`,vehicledata).then((res)=>{
                alert(res.data)
            })
        }
    }

    return(
        <div className="outerdiv-vehicle-form">
            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Fuel-Type</label>
                    <input type="text" required="required" onChange={(e)=>setfuelType(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" />
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Company Name</label>
                    <input type="text" required="required" onChange={(e)=>setmakeName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" />
            </div>

            <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label"> Model Name</label>
                    <input type="text" required="required" onChange={(e)=>setmodelName(e.target.value)} className="form-control form-control-sm" id="exampleFormControlInput1" />
            </div>

            <button type="button" onClick={saveVehicle} class="btn btn-sm btn-success">Add</button>
            <button type="button" class="btn btn-sm btn-warning">Update</button>
            <button type="button" class="btn btn-sm btn-danger">Delete</button>

        </div>

    )
}

export default VehicleForm;
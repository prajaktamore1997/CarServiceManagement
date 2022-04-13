// import './modelEdit.css'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ServerUrl from '../ServerUrl';
import  axios  from 'axios';




function ModelEdit(){
    let loco= useLocation();
    let his = useHistory();
    const [modelId, setmodelId] = useState(0)
    const [makeId, setmakeId] = useState(0)
    const [modelName, setmodelName] = useState("")
    const [fueltype, setfuelType] = useState("")


    const check = ()=>{
        if(!(loco.state == null)){
            setmodelId(loco.state.model.modelId)
            setmakeId(loco.state.id)
            setmodelName(loco.state.model.modelName)
            setfuelType(loco.state.model.fueltype)
            
        }
    }

    let vehicledata = {
        "makeId": makeId,
        "modelId": modelId,
        "modelName" : modelName,
        "fueltype" : fueltype
    }

    useEffect(check,[])
    console.log(loco.state)

    function saveVehicle(){
        axios.post(`${ServerUrl}/admin/save-company/${loco.state.id}`,vehicledata).then((res)=>{
            let result = res.data;
            alert(result)
            

        })
        his.push("/cars");
          }

          const deleteModel=()=>{
              axios.delete(`${ServerUrl}/admin/delete-model/${modelId}`).then((res)=>{
                  let result = res.data;
                  console.log(result)
                  alert(result)
                  his.push("/cars")
              })
          }

          return(
            <form className="do">
            <div className="mb-3 row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Make Id</label>
            <div className="col-sm-10">
              <input type="number" value={makeId} contentEditable="false" readOnly onChange={(e) => { setmakeId(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
            </div>
          </div>
    
          <div className="mb-3 row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Model Id</label>
            <div className="col-sm-10">
              <input type="number" value={modelId}  onChange={(e) => { setmodelId(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Model Name</label>
            <div className="col-sm-10">
              <input type="text" value={modelName}  onChange={(e) => { setmodelName(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">Fuel Type</label>
            <div className="col-sm-10">
              <input type="text" value={fueltype}  onChange={(e) => { setfuelType(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
            </div>
          </div>

          {modelId===0?
          <button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Add</button>
          : <button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button>}
          <button onClick={deleteModel} type="button" className="btn btn-danger mx-1">Delete</button>
          {/* <>{makeId === "" ? <button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button> : <><button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button></> */}
          </form>
        )
}

export default ModelEdit;
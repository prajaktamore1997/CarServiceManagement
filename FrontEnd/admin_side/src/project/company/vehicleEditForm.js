
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import './vehicleEditForm.css'
import VehicleForm from './vehicleForm';
import ServerUrl from './../ServerUrl';


function VehicleEditForm(){
    let loco = useLocation();
    let his = useHistory;
    const[makeName, setmakeName] = useState("")
    const[makeId, setmakeId]= useState(0)

    const check = ()=>{
        if(!(loco.state == null)){
            setmakeName(loco.state.makeName)
        }
    }

    let vehicledata = {
        "makeId": makeId,
        "makeName": makeName
    }
    useEffect(check,[])


    function saveVehicle(){
        axios.post(`${ServerUrl}/admin/save-vehicle/`,vehicledata).then((res)=>{
            let result = res.data;
            alert(result)
        })
        his.push("/vehicle")
    }



    return(
        <form className="do">
        <div className="mb-3 row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Subject</label>
        <div className="col-sm-10">
          <input type="number" value={makeId} contentEditable="false" onChange={(e) => { setmakeId(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
        </div>
      </div>

      <div className="mb-3 row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">Subject</label>
        <div className="col-sm-10">
          <input type="text" value={makeId}  onChange={(e) => { setmakeName(e.target.value) }} className="form-control form-control-sm" id="inputEmail3" />
        </div>
      </div>
      <button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button>
      {/* <>{makeId === "" ? <button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button> : <><button onClick={saveVehicle} type="button" className="btn btn-success mx-1">Update</button></> */}
      </form>
    )

}

export default VehicleEditForm;
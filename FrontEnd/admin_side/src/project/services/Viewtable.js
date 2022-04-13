import "./Viewtable.css"

import { useHistory, useLocation } from 'react-router';
import axios from "axios";
import ServerUrl from './../ServerUrl';
import { useEffect, useState } from "react";


export default function Viewtable() {
const[subarr,setsubarr]=useState([])
const his=useHistory();
    const loco = useLocation();

    console.log(loco.state)
    const alldata = loco.state;
    
const onloaddata=()=>{
    setsubarr(alldata.subPackageslist)
}

useEffect(onloaddata,[])

    const deleterow=(sub)=>{
        axios.delete(`${ServerUrl}/admin/servicepck/${sub.subPckId}`).then((res)=>{
            his.push("/services")
            alert(res.data)
        })
    }
    
    function deleteMain(){
axios.delete(`${ServerUrl}/admin/delete-main/${alldata.mainPckId}`).then((res)=>{
    his.goBack();
    alert(res.data);
})
    }

    const AddMoreSub=()=>{
        his.push("/addsubpackage",{"id":alldata.mainPckId,"pck":alldata.mainPckName})
    }
    
    return (
<div style={{
    overflow: "scroll",
    height: "91%"
}} className="viewout  table-responsive">
<p className="para mx-1"> MainPck :      {  alldata.mainPckId     } {  alldata.mainPckName} 
<button type="button" onClick={AddMoreSub}  className="btn btn-sm btn-primary mx-1">Add-SubPackage</button>
<button type="button" onClick={deleteMain}  className="btn btn-sm btn-primary mx-1">Delete</button>
</p>
               
        <table className="table table-striped table-hover">
       <thead >
        <th scope="col">Id</th>
        <th scope="col">subName</th>
        <th scope="col">price</th>
        <th scope="col">status</th>
        <th scope="col">validity</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
    </thead>
        <tbody>
        {subarr.map((sub) =>
            <tr style={{color:"white"}}>
                <td >{sub.subPckId}</td>
                <td>{sub.subPckName}</td>
                <td>{sub.price}</td>
                <td>{sub.status}</td>
                <td>{sub.validity}</td>
                <td>
                <button type="button" onClick={()=>his.push("/ServiceForm",{"sub":sub,"mainPckId":alldata.mainPckId,"mname":alldata.mainPckName})} className="btn btn-sm btn-primary ">Update</button>
                </td>
                <td>
                <button type="button"  onClick={()=>deleterow(sub)} className="btn btn-sm btn-primary ">Delete</button>
                </td>
            </tr>
        )}
        </tbody>
      </table>
      </div>
    );
}






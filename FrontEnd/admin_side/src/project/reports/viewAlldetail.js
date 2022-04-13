import "./viewAlldetail.css"

import { useHistory, useLocation } from 'react-router';
import axios from "axios";
import ServerUrl from './../ServerUrl';
import { useEffect, useState } from "react";

export default function ViewAlldetail() {
    const[person,setperson]=useState([])
    const[Emp,setEmp]=useState(" ")
    const his=useHistory();
        const loco = useLocation();
        
        const User=loco.state;
        console.log(User)
        let Id ;
 
    useEffect(Check,[])
function Check(){
    if(Object.getOwnPropertyNames(User)[0]==="empId"){
        Id=User.empId
        onLoadEmp();
    }
    else{
        Id=User.custId
        onLoadCust();
    
    }

}

        function getEmployee(id){
            if(Emp===" ")
            axios.get(`${ServerUrl}/admin/get-order-emp-info/${id}`).then((res)=>{
                setEmp(res.data)
            })
        }


        
    const onLoadEmp=()=>{
        axios.get(`${ServerUrl}/admin/get-info/${Id}`).then((res)=>{
            console.log(res.data)
            setperson(res.data)
        })
    }
    const onLoadCust=()=>{
        axios.get(`${ServerUrl}/admin/get-info/${Id}`).then((res)=>{
            console.log(res.data)
            setperson(res.data)
        })
    }
    
    

    
        
        return (
    <div className="viewout  table-responsive">
    <p className="para">{Object.getOwnPropertyNames(User)[0]==="empId"? `Id :  ${User.empId } Name= ${User.firstName }  ${User.lastName}`:`Id :  ${User.custId } Name= ${User.name}`} </p>
    
            <table className="table  table-hover">
           <thead >
            <th scope="col">Id</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">status</th>
            <th scope="col">Employee</th>
            <th scope="col">View</th>
            <th scope="col">Complaint</th>
        </thead>
            <tbody>
            {person.map((sub) =>
                <tr onMouseMove={(e)=>getEmployee(sub.ordersId)} >
                    <td >{sub.ordersId}</td>
                    <td>{sub.name}</td>
                    <td>{sub.ordersDate}</td>
                    <td>{sub.ordersStatus}</td>
                    <td>{sub.ordersStatus!="pending"?<> {Emp.firstName} </>
                   :<p>No-Emp</p>}</td>
                    <td>
                    <button type="button" onClick={()=>his.push("/viewinvoice",sub)}  className="btn btn-primary btn-sm  ">View</button>
                    </td>
                    <td>
                    {Object.getOwnPropertyNames(User)[0]==="empId"? <button type="button" onClick={()=>his.push("/complaint-table",{"id":sub.ordersId,"role":"emp"})}  className="btn btn-sm btn-primary ">View</button> :<button type="button" onClick={()=>his.push("/complaint-table",{"id":sub.custId,"role":"cust"})}  className="btn btn-sm btn-primary ">View</button>}
                    </td>
                </tr>
            )}
            </tbody>
          </table>
          </div>
        );
}

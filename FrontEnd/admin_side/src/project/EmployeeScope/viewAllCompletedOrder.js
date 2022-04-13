import "./viewAllCompletedOrder.css"

import { useHistory } from 'react-router';
import axios from "axios";
import ServerUrl from '../ServerUrl';
import { useEffect, useState } from "react";
import Login from "../login/login";

export default function ViewAllCompletedOrder() {
    const[orders,setorders]=useState([])
   
    let his=useHistory();
      
   
function Check(){
    if(orders.length===0)
    getOrders(sessionStorage.getItem("ids"));
    }

    useEffect(Check,[])

        function getOrders(id){
           
            axios.get(`${ServerUrl}/emp/get-emp-orders/${id}`).then((res)=>{
                setorders(res.data)
            })
             
        }



if (sessionStorage.getItem("id") ==="true") {

    console.log("many")
    const filterOrder=orders.filter((o)=>o.ordersStatus==="Completed")
        
        return (
    <div className="viewout  table-responsive">
    
            <table className="table table-striped table-hover">
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
            {filterOrder.map((sub) =>
                <tr >
                    <td >{sub.ordersId}</td>
                    <td>{sub.name}</td>
                    <td>{new Date(sub.ordersDate).toUTCString().split('GMT', 1)}</td>
                    <td>{sub.ordersStatus}</td>
                    <td>{sub.ordersStatus!="pending"?<> {sub.firstName} {sub.lastName}</>
                   :<p>No-Emp</p>}</td>
                    <td>
                    <button type="button" onClick={()=>his.push("/viewinvoice",sub)}  className="btn btn-primary btn-sm  ">View</button>
                    </td>
                    <td>
                     <button type="button" onClick={()=>his.push("/complaint-table",{"id":sub.ordersId,"role":"emp"})}  className="btn btn-sm btn-primary ">View</button> 
                      </td>
                </tr>
            )}
            </tbody>
          </table>
          </div>
        );
            } else {
                return (<Login />)
            }

}


import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from 'react-router';
import ServerUrl from '../ServerUrl';



function EmpAnnRows(){
  const[AllData,setAllData]=useState([])
 let his=useHistory()
let result;


 function onloaddata() {
     axios.get(`${ServerUrl}/admin/announcements/`).then((res) => {
         result = res.data;
         setAllData(result.filter((e)=>e.isNew===1))
     })
 }
 useEffect(onloaddata, [])

 


    return(
        <tbody >
    {AllData.map((all)=>
        <tr>
      <td>{all.id} </td>
      <td>{all.subject}</td>
      <td>{all.data}</td>
      <td>{all.date}</td>
      </tr>
    )}
   </tbody>
    );
}
export default EmpAnnRows;
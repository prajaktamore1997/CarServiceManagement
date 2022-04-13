
import "./announcement.css"
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { useHistory } from 'react-router';
import ServerUrl from './../ServerUrl';



function AnnouncementRows(){
  const[AllData,setAllData]=useState([])
 let his=useHistory()
let result;


 function onloaddata() {
     axios.get(`${ServerUrl}/admin/announcements/`).then((res) => {
         result = res.data;
         setAllData(result)
     })
 }
 useEffect(onloaddata, [result])

 //useRef(result)
  function ToUpdate(all){
    console.log(all)
     his.push('/form',all)
   }


    return(
        <tbody >
    {AllData.map((all)=>
        <tr>
      <td>{all.id} </td>
      <td>{all.subject}</td>
      <td>{all.data}</td>
      <td>{all.date}</td>
      <td>{all.isNew===1?"Active":"Inactive"}</td>
      <td>
      
      <button type="button" onClick={(e)=>{ToUpdate(all)}}    className="btn btn-primary btn-sm"> Edit</button>
                    

        

      </td>
      </tr>
    )}
   </tbody>
    );
}
export default AnnouncementRows;
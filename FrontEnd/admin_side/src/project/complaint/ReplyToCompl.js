import axios from 'axios';
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import ServerUrl from '../ServerUrl';

export default function ReplyToCompl() {
    const loco=useLocation();
    const his= useHistory()
    const ComplData=loco.state;
   

    
     
        axios.post(`${ServerUrl}/admin/res-to-complaint/${ComplData.id}`,ComplData.reply).then((res) => {
            his.push("/complaint-table",loco.state.User);
       })
  


    


    
  
    return (
        <div>
        </div>
    )
}

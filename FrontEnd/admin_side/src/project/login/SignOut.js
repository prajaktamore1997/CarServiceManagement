
import axios from "axios";
import ServerUrl from "../ServerUrl";
import Login from "./login";

function SignOut(){

    sessionStorage.removeItem("id")
    sessionStorage.clear()
    axios.get(`${ServerUrl}/admin/session-end`).then((res)=>{
        if(res.data==="ok")
       <Login/>
    
       
    })
        return(

            <div>
                <Login/>
            </div>
        )
    }
   

export default SignOut;
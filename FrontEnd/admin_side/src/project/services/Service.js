import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../admin/admin";
import Login from "../login/login";
import "./service.css";
import ServerUrl from './../ServerUrl';

function Service() {
    const [mainPackage, setmainPackage] = useState([])
   

    function onloaddata() {
        axios.get(`${ServerUrl}/admin/servicepck/`).then((res) => {
           const result = res.data;
            setmainPackage(result)
        
        })
    }
    useEffect(onloaddata, [])

    if (sessionStorage.getItem("id") === "true") {

        return (
            <div>
                <Admin />
                <div>
    
                </div>
                {/* <div className=" sub_container d-flex p-2 bd-highlight out flex-lg-row   align-content-around flex-wrap ">
                    {mainPackage.map((pck)=>
                        <div className="d-inline-flex bd-highlight In-sub-service">
                            <h5 className="h5">{pck.serviceName}</h5>
                    
                            <Link type="button" to={{pathname:"/viewtable",state:pck}}  class="btn btn-default custom-btn">{pck.mainPckName}</Link>
                        </div>
                    )}
                    
                    <Link type="button" to='/ServiceForm'  className="btn btn-primary">Add More</Link>

                </div> */}
                <div className="out table-responsive">
                        <table className=" table  table-bordered table-striped ">
                            <thead>
                               <tr>
                               <Link type="button" to='/ServiceForm'  className="btn btn-primary">Add More</Link>

                               </tr>
                            </thead>

                       <tbody>
                           
                               {mainPackage.map((pck)=>
                        < >
                            <tr >{pck.serviceName}</tr>
                    
                           <td> <Link type="button" to={{pathname:"/viewtable",state:pck}}  class="btn btn-default custom-btn">{pck.mainPckName}</Link>
                           </td>
                        </>
                    )}
                    
                       </tbody>

                        </table>

                    </div>

            </div>
        )
    } else {
        return (
            <Login />
        )
    }

}

export default Service;
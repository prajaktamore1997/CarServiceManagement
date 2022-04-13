import React from 'react'
import { useLocation } from 'react-router';

import Admin from './../admin/admin';

export default function ViewAllVehicle(){
    const loco=useLocation()
    console.log(loco.state)
    const vehicle=loco.state
    
    return (
        <>
        <Admin/>
        <div style={{ position: "absolute",
            left: "200px",
            top: "39px",
            width: "582%",
            background: "rgb(28 56 70 / 92%)",
            height: "100%",
            border: "2px solid rgb(5, 0, 0)"}}>
            <div className="row p-5">
                        <div className="col-md-12">
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th className="border-1 text-uppercase small font-weight-bold">ID</th>
                                        <th className="border-1 text-uppercase small font-weight-bold">Manufacturer Name</th>
                                        {/* <th className="border-1 text-uppercase small font-weight-bold">Edit</th>
                                        */}

                                        </tr>
                                        </thead>

                                        <tbody>
                                            {vehicle.map((veh)=>
                                            <tr>
                                                <td>{veh.makeId}</td>
                                                <td>{veh.makeName}</td>
                                            
                                               
                                                {/* <td>
                                                    <button type="button" onClick={VehicleEditForm} class="btn btn-primary btn-sm">Edit</button>
                                                </td> */}
                                            </tr> 
                                            )}
                                        </tbody>
                                       {/* <VehicleRow/> */}
                                        </table>

                         </div>
        
                </div>

            </div>
            </>
    )                           
   

}
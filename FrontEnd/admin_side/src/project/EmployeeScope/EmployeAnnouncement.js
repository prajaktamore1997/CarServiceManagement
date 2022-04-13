
import Login from '../login/login';
import Admin from "../admin/admin";
import EmpAnnRows from './EmpAnnRows';




function EmployeAnnouncement() {
   

    if (sessionStorage.getItem("id") ==="true") {



        return (
            <div>
                <Admin />

                <div className="out1">
                    <h1 className="h1">Announcement  </h1>
                    <div className="input-group mb-3">
            
                        {/* <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" /> */}
                    </div>
                    <div className="announcement table-responsive">
                        <table className=" table table-dark table-bordered table-striped ">
                            <thead>
                                <tr>
                                    <th >No</th>
                                    <th >Subject</th>
                                    <th >News</th>
                                    <th >Date</th>
                                </tr>
                            </thead>

<EmpAnnRows/>
                        </table>

                    </div>
                    {/* <Form /> */}
                </div>
            </div>
        )
    } else {
        return (<Login />)
    }

}

export default EmployeAnnouncement;
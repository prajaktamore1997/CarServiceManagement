
import "./announcement.css"

import Login from './../login/login';
import Admin from "../admin/admin";
import AnnouncementRows from './AnnouncementRows';

import { Link } from 'react-router-dom';
import Form from './Form';



function Announcement() {
   

    if (sessionStorage.getItem("id") ==="true") {



        return (
            <div>
                <Admin />

                <div className="out1">
                    <h1 className="h1">Announcement  </h1>
                    <div className="input-group mb-3">
                        <button type="button" className="btn btn-outline-secondary txt">Add_New</button>
                        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            
                        </button>
                        <ul className="dropdown-menu">
                            <Link component={Form} className="dropdown-item  hid"  ></Link>

                        </ul>
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
                                    <th >Status</th>
                                    <th >Edit</th>
                                </tr>
                            </thead>

                            <AnnouncementRows />

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

export default Announcement;
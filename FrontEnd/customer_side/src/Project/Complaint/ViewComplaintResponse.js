import React from 'react'
import ViewComplaint from './ViewComplaint';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
const ViewComplaintResponse = () => {

    const location = useLocation();
    const complaint = location.state
    return (
        <div className="container w-50">
            <div >
                <h3> Complaint Response In Detail</h3>
                <div className="form-group">
                    <pre>   <label className="form-control" > <b>Complaint of Order ID  </b>   {complaint.ordersId} </label></pre>
                    <div></div>
                </div>
                <div className="form-group">
                    <label> <b>Complaint for Service </b>   </label>
                    <div className="form-control"  >       {complaint.subPckName}</div>
                </div>
                <br />
                <div className="form-group">
                    <label><b>Compalaint Subject</b> </label>
                    <div className="form-control"  > {complaint.complaintSubject}</div>
                </div>
                <br />
                <div className="form-group">
                    <label><b> Complaint in Detail</b></label>
                    <div className="form-control"   >{complaint.complaintDetail}  </div>
                </div>
                <br />
                <div className="form-group">
                    <label><b> Complaint  Respone</b></label>
                    <div className="form-control"  > {complaint.complaintResponse}</div>
                </div>
                <Link to='/Complaint' type="submit" className="btn btn-dark btn-lg btn-block" Style="margin:10px">Back to View Complaint </Link>
                <Link to='/home' type="submit" className="btn btn-dark btn-lg btn-block" Style="margin:10px">Home </Link>
            </div>
        </div>
    )
}

export default ViewComplaintResponse

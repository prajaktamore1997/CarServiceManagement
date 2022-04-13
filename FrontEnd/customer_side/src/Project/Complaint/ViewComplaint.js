import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import AddComplaint from './AddComplaint'
import './ViewComplaintCSS.css'
const ViewComplaint = () => {

    const cid = sessionStorage.getItem("id")
    const history = useHistory()
    const [status, setstatus] = useState(null)
    const [complaints, setComplaints] = useState([])

    useEffect(() => {
        getComplaintFromServer()
    }, [])

    function getComplaintFromServer() {

        axios.get("http://localhost:8080" + '/order/viewcomplaint/' + cid).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                if (result.data.complaintResponse == null) {
                    setstatus(null)
                }
                setComplaints(result.data);
            } else {
                alert(result.error)
                history.push('/ViewComplaint');
            }
        })
    }

    return (
        <div className="container">
            <h1 className="col-auto  "> <Link className="nav-link" to='/Complaint'>Add Complaint</Link>
                <Link className="nav-link " to='/Viewcomplaint'>Check Complaint Response </Link></h1>
            <div className="  table-responsive">
                <p className="para"> Complaint List :    </p>
                <table className="table table-striped table-hover">
                    <thead >
                        <tr>
                            <th >#</th>
                            <th >Complaint For OrderId</th>
                            <th >Complained Service    </th>
                            <th >Complaint Date</th>
                            <th >Complaint Subject</th>
                            <th >Response Status</th>
                            <th >option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaints.map((complaint) => {
                            return (
                                <tr>
                                    {complaint.complaintResponse === status ? <> <td >{complaint.complaintId}</td>
                                        <td >{complaint.ordersId}</td>
                                        <td>{complaint.subPckName}</td>
                                        <td>{complaint.complaintDate}</td>
                                        <td>{complaint.complaintSubject}</td>
                                        <td>Not Responded</td></> : <> <td >{complaint.complaintId}</td>
                                        <td >{complaint.ordersId}</td>
                                        <td>{complaint.subPckName}</td>
                                        <td>{complaint.complaintDate}</td>
                                        <td>{complaint.complaintSubject}</td>
                                        <td>Responded</td><td> <Link type="button" to={{ pathname: "/Viewcomplaintresponse", state: complaint }} className="btn btn-info  viewbtn">View</Link></td> </>}
                                </tr>)
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewComplaint

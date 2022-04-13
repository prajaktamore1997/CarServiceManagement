import React from 'react'
import { Link } from 'react-router-dom'
import AddComplaint from './AddComplaint'
const Complaint = () => {
    return (
        <div className="container">
            <h1 className="col-auto  ">
                <Link className="nav-link" to='/Complaint'>Add Complaint</Link>
                <Link className="nav-link " to='/Viewcomplaint'>Check Complaint Response </Link>
            </h1>
            <AddComplaint />
        </div>
    )
}

export default Complaint

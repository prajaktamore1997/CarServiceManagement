import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "./SubPackageRowCSS.css"

const SubPackageRow = ({ subpackage }) => {
    const history = useHistory();

    if (subpackage.subPckId == sessionStorage.getItem("r_spckId")) {
        function sendToBookAppointment(subpck) {
            sessionStorage.setItem("r_spckId", subpck.subPckId)
            sessionStorage.setItem("r_spckName", subpck.subPckName)
            history.push('/bookappointment', {
            })
        }
        return (
            <div className="container  sbR1">
                <center> <h1>{subpackage.subPckName}</h1> </center>
                <p><b>Validity     =       </b> {subpackage.validity} Month</p>
                <p>Facility :  </p>
                <p>*TERMS AND CONDITION APPLIED</p>
                <div>
                    <label className="price">Price : {subpackage.price} Rs</label>
                </div>
                <div className="container btndiv"><center> <a Style=" " className="btn btn-lg btn2 btn1 " onClick={() => sendToBookAppointment(subpackage)}>Book Appointment</a></center>
                </div>
            </div>
        )
    } else {
        const custId = sessionStorage.getItem("id")
        function sendToAddCart(subpackage) {
            const data = new FormData();
            data.append('custId', custId)
            data.append('subPckId', subpackage.subPckId)

            axios.post("http://localhost:8080" + '/order/saveincart', data).then((response) => {
                const result = response.data
                if (result.status === 'success') {
                    alert(result.data)
                } else {
                }
            }
            )
        }

        function sendToBuyPackage(subpackage) {
            console.log(subpackage)
            sessionStorage.setItem("subpackageId", subpackage.subPckId)
            sessionStorage.setItem("subpackageName", subpackage.subPckName)
            sessionStorage.setItem("subpackagePrice", subpackage.price)
            history.push('/Buypackage')
        }
        return (
            <div className="container  sbR1">
                <center>  <h1>{subpackage.subPckName}</h1> </center>
                <p><b>Validity     =       </b> {subpackage.validity} Month</p>
                <p>Facility :  </p>
                <p>*TERMS AND CONDITION APPLIED</p>
                <div>
                    <label className="price">Price : {subpackage.price} Rs</label>
                </div>
                {custId === null ? <div className="container btndiv"><a Style=" " className="btn btn2 btn1 " onClick={() => sendToBuyPackage(subpackage)}>Buy Now</a></div> : <div className="container btndiv"><a Style=" " className="btn btn2 btn1 " onClick={() => sendToAddCart(subpackage)}>Add Cart</a><a Style=" " className="btn btn2 btn1 " onClick={() => sendToBuyPackage(subpackage)}>Buy Now</a>
                </div>}
                <br />
            </div>
        )
    }
}
export default SubPackageRow;

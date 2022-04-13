import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const TempCartRow = ({ subpackage }) => {
    const history = useHistory();
    const custId = sessionStorage.getItem("id")

    function RemoveFromCart(subpackage) {
        const data = new FormData();
        data.append('custId', custId)
        data.append('subPckId', subpackage.subPckId)

        history.push("/Tempcart",)
        axios.post("http://localhost:8080" + '/order/removefromcart', data).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert(result.data)
                window.location.reload()
            } else {
            }
        })
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
            <div><label className="price">Price : {subpackage.price} Rs</label>
            </div>
            <div className="container btndiv"><a Style=" " className="btn btn2 btn1 " onClick={() => RemoveFromCart(subpackage)}>Remove From Cart</a><a Style=" " className="btn btn2 btn1 " onClick={() => sendToBuyPackage(subpackage)}>Buy Now</a>
            </div>
        </div>
    )
}
export default TempCartRow;

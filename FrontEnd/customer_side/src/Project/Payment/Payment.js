import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'


const Payment = () => {
    const s_id = sessionStorage.getItem("subpackageId")
    const c_id = sessionStorage.getItem("id")
    const v_RegNo = sessionStorage.getItem("vehicleRegNo")
    const s_price = sessionStorage.getItem("subpackagePrice")
    const s_name = sessionStorage.getItem("subpackageName")
    const m_id = sessionStorage.getItem("modelId")
    const [subPackageName, setSubPackageName] = useState(s_name)
    const [subPckId, setSubPckId] = useState(s_id)
    const [subPackgePrice, setSubPackgePrice] = useState(s_price)
    const [modelId, setModelId] = useState(m_id)
    const [vehicleRegNo, setVehicleRegNo] = useState(v_RegNo)
    const history = useHistory()

    const Proceed = () => {
        const data = new FormData();
        data.append('custId', c_id)
        data.append('subPckId', s_id)
        data.append("vehicleRegNo", v_RegNo)
        data.append('modelId', m_id)

        history.push("/Order")
        axios.post("http://localhost:8080" + '/order/payment', data).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                alert(result.data)
                window.location.reload()
            } else {
                alert(result.error)
                history.push("/Services")
            }
        })
    }
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-3"></div>
                <div className="col-md-6"> <h3 className="label1">Payment Method</h3>
                    <div><b>Package Name: </b>{subPackageName}</div>
                    <br />
                    <div>
                        <b>Package Price: </b>{subPackgePrice}</div>
                    <br />
                    <div className="card">
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header p-0" id="headingTwo">
                                    <h2 className="mb-0"> <button className="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className="d-flex align-items-center justify-content-between"> <span>Paypal</span> <img src="https://i.imgur.com/7kQEsHU.png" width="30" /> </div>
                                    </button> </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body"> <input type="text" className="form-control" placeholder="Paypal email" /> </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header p-0">
                                    <h2 className="mb-0"> <button className="btn btn-light btn-block text-left p-3 rounded-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="d-flex align-items-center justify-content-between"> <span>Credit card</span>
                                            <div className="icons"> <img src="https://i.imgur.com/2ISgYja.png" width="30" /> <img src="https://i.imgur.com/W1vtnOV.png" width="30" /> <img src="https://i.imgur.com/35tC99g.png" width="30" /> <img src="https://i.imgur.com/2ISgYja.png" width="30" /> </div>
                                        </div>
                                    </button> </h2>
                                </div>
                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body payment-card-body"> <span className="font-weight-normal card-text">Card Number</span>
                                        <div className="input"> <i className="fa fa-credit-card"></i> <input type="text" className="form-control" placeholder="0000 0000 0000 0000" /> </div>
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-6"> <span className="font-weight-normal card-text">Expiry Date</span>
                                                <div className="input"> <i className="fa fa-calendar"></i> <input type="text" className="form-control" placeholder="MM/YY" /> </div>
                                            </div>
                                            <div className="col-md-6"> <span className="font-weight-normal card-text">CVC/CVV</span>
                                                <div className="input"> <i className="fa fa-lock"></i> <input type="text" className="form-control" placeholder="000" /> </div>
                                            </div>
                                        </div> <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
                                    </div>
                                </div>
                                <div className="p-3"><center>  <button className="btn btn-primary btn-block free-button" onClick={Proceed}> Pay</button></center>
                                    <div className="text-center"> <a href="#">Have a promo code?</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Payment
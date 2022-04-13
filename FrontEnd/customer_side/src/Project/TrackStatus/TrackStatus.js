import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import axios from "axios";
import TrackStatusRow from "./TrackStatusRow";

export const TrackStatus = () => {
  const location = useLocation()
  const history = useHistory()
  const o_id = location.state.orderId
  const c_id = sessionStorage.getItem("id");
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    getOrderStatusFromServer()
  }, [true])

  function getOrderStatusFromServer() {
    const data = new FormData()
    data.append("cid", c_id)
    data.append("oid", o_id)

    axios.post("http://localhost:8080/order/gestatus", data).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setOrder(result.data)
      } else {
        history.push('/home');
      }
    }
    )
  }
  if (orders.length != 0) {
    return (
      <div className="d-flex flex-container flex-wrap flex-container sb">
        <h1 className="heading">Your vehicle service  status</h1>
        {orders.map((o) => {
          return <TrackStatusRow order={o} />
        })
        }
      </div>
    )
  }
  else {
    return (<h1 className="heading">Order Not Present</h1>)
  }
}

export default TrackStatus;

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import OrderRow from './OrderRow';

const Order = () => {
  const cid = sessionStorage.getItem("id")
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getSordersFromServer()
  }, [])

  function getSordersFromServer() {
    axios.get("http://localhost:8080" + '/order/getall/' + cid).then((response) => {
      const result = response.data

      if (result.status === 'success') {
        setOrders(result.data)
      } else {
        alert(result.error)
      }
    })
  }
  return (
    <div className="d-flex flex-container flex-wrap flex-container sb">
      <h1 className="heading">Your Purchased Packges</h1>
      {orders.map((o) => {
        return <OrderRow order={o} />
      })
      }
    </div>
  )
}

export default Order

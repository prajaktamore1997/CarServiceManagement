import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import TempCartRow from './TempCartRow';

const TempCart = () => {
    const cid = sessionStorage.getItem("id")
    const [subpck, setsubpck] = useState([])

    useEffect(() => {
        getSordersFromServer()
    }, [])

    function getSordersFromServer() {
        axios.get("http://localhost:8080" + '/order/getallcart/' + cid).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setsubpck(result.data)
            } else {
                alert(result.error)
            }
        }
        )
    }
    if (subpck.length !== 0) {
        return (
            <div className="d-flex flex-container flex-wrap flex-container sb">
                <h1 className="heading">Your Cart{ } </h1>
                {subpck.map((singlesubpck) => {
                    return <TempCartRow subpackage={singlesubpck} />
                })
                }
            </div>
        )
    } else {
        return (
            <h1 className="heading">Your Cart is Empty</h1>
        )
    }
}

export default TempCart

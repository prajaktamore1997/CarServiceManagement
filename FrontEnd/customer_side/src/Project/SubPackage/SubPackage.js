import React from 'react'
import { useLocation, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import SubPackageRow from './SubPackageRow';
import "./SubPackageCSS.css"

const Subpackages = () => {
  const [SubpackagesIn, setSubpackage] = useState([])
  const location = useLocation();
  const MainPackageid = location.state.MainPackageid;
  const MainPckName = location.state.MainPckName;

  useEffect(() => {
    getSupackagesFromServer()
  }, [])

  function getSupackagesFromServer() {
    const MainPackageid = location.state.MainPackageid;

    axios.get("http://localhost:8080" + '/services/subpackages/' + MainPackageid).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setSubpackage(result.data)
      } else {
        alert(result.error)
      }
    }
    )
  }
  return (
    <>
      <div className="d-flex flex-container flex-wrap flex-container sb">
        <center>
          <h1 className="heading">{MainPckName}</h1>
        </center>
        {SubpackagesIn.map((subpackage) => {
          return <SubPackageRow subpackage={subpackage} />
        })
        }
      </div>
      <br /> <br />
    </>
  )
}
export default Subpackages;

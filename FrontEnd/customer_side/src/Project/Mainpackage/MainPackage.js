import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './MainPackageCSS.css';
import MainPackageRow from "./MainPackageRow"

const Services = () => {
  const [MainPackages, setMainPackages] = useState([])

  useEffect(() => {
    getMainPackage()
  }, [])

  function getMainPackage() {

    axios.get("http://localhost:8080" + '/services/mainpackages').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setMainPackages(result.data);
      } else {
        alert(result.error)
      }
    })
  }
  return (
    <div className="d-flex flex-wrap flex-container  main-1">
      {MainPackages.map((MainPackage) => {
        return <MainPackageRow MainPackage={MainPackage} />
      })}
      <br /> <br />
    </div>
  )
}
export default Services;
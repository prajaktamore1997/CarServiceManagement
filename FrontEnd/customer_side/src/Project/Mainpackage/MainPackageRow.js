import './MainPackageCSS.css';

import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

const MainPackageRow = ({ MainPackage }) => {
  
  const history = useHistory();
  return (
    <div className="btn btn-info btn-lg btn3d flex-child sub-main-1 d-flex justify-content-around m1">
      <a onClick={() => history.push('/subpackages', { MainPckName: MainPackage.mainPckName, MainPackageid: MainPackage.mainPckId })}>
        <h1>{MainPackage.mainPckName}</h1>
      </a>
      <br /> <br />
    </div>
  )
}
export default MainPackageRow;

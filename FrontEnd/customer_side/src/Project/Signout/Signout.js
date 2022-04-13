import Home from "../HomePage/Home";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

const Signout = () => {
  const history = useHistory()
  sessionStorage.clear()
  window.setInterval(function () {
    window.location.href = '/home';
  }, 500);
  return (
    <div>thank u...<br></br>
      You are looged out now....
    </div>
  )
}
export default Signout;
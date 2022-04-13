import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="container">
      <div className="div1" > {/*class="vertical-center" */}
        <Link to="/Services">
          <button type="button" class="btn btn-success heigth btn-primary btn-lg">Click Here See Our Services</button>
        </Link>
      </div>
      <div className="div2">
        <Link to='/bookappointment' >
          <button className="btn btn-success btn-primary btn-lg" type="button">
            <pre>    Book  Appointment    <i className="arrow right"></i></pre>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Home;
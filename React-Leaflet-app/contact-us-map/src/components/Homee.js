import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Carousels from "./Carousel";
import Allcourses from "./Allcourses";
import placement from "./images/placement.png";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Alumni from "./Alumni";
import { CardTitle, CardBody, Card } from "reactstrap";
import smvitaLogo from "./images/smvitaLogo.png";

const Homee = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <div>
      <div className="row mt-3 nameHeading">
        <div className="col-md-12 instituteNameDiv">
          {/* <img src={smvitaLogo} alt="SMVITA" height={60} className="instituteLogo" /> */}
          <h1>USM's Shriram Mantri Vidyanidhi Infotech  </h1>
        </div>
        <div className="col-md-9">
          {/* <h2>USM's Shriram Mantri Vidyanidhi Infotech </h2> */}
        </div>
      </div>

      <div className="row">
        <Carousels />
        <h1>Courses Offered</h1>

        <Allcourses />
      </div>

      <div className="mt-4 row">
        <h1 className="mb-3">Our Alumni Talks!!</h1>
        <Alumni />
        <h1 className=" mb-3">Major Recruiters</h1>
        <div className="col-md-3">
          <img src="https://vidyanidhi.com/images/atos.png" />
          <img src="https://vidyanidhi.com/images/capg.png" />
        </div>
        <div className="col-md-3">
          <img src="https://vidyanidhi.com/images/nse.png" />
          <img src="https://vidyanidhi.com/images/morningstar.png" />
        </div>
        <div className="col-md-3">
          <img src="https://vidyanidhi.com/images/tata.png" />
          <img src="https://vidyanidhi.com/images/63moons.png" />
        </div>
        <div className="col-md-3">
          <img src="https://vidyanidhi.com/images/cdac.png" />
          <img src="https://vidyanidhi.com/images/jio.png" />
        </div>
        <Link to="/cdet/rec">
          <button className="btn btn-primary text-center">See more</button>
        </Link>
      </div>
      <div className="row">
        <h1 className=" mb-3 mt-3">Highest Placement Records</h1>
      </div>
      <div className="row">
        <div className="col-md-12 mb-3 ">
          <div className="back" style={{ marginLeft: 55 }}>
            <div className="content mb-3">
              <button className="btn btn-light">
                <Link to="/cdet/place"><b>Placement Records</b></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Card className='content'>
            
                <CardBody>
       
                <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Card image cap"/>
       
                <button className='btn btn-warning'><Link to="/cdet/place">Hello</Link></button>
                </CardBody>
    
                </Card> */}
    </div>
  );
};

export default Homee;

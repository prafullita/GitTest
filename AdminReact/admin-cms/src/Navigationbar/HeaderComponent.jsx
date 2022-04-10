import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import smvitaLogo from "../images/smvitaLogo.png";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar stroke  sticky-top navbar-expand-lg mt-1 nav1">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <ul className="navbar-nav mr-auto w-100" id="nav">
              <li className="nav-item">
                <img src={smvitaLogo} alt="SMVITA" style={{ height: 50 }}></img>
              </li>
              <li className="nav-item">
                <Link className="nav-link  nav-link-fade-up navLinkCss" to="/admin/allfollowups/:adminId">
                  Follow Up
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link  nav-link-fade-up navLinkCss" to="/admin/enquiryForm">
                  Enquiry
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link  nav-link-fade-up navLinkCss" to="/admin/students">
                  Student Registration
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link  nav-link-fade-up navLinkCss" to="/admin/view">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link  nav-link-fade-up navLinkCss" to="/admin/gallery">
                  Gallery
                </Link>
              </li>
            
              <li className="nav-item">
              <Link className="nav-link  nav-link-fade-up navLinkCss" to="/">
              <button className="btn btn-info " style={{marginLeft:670}}><i className="fa fa-sign-out" aria-hidden="true"></i>
</button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

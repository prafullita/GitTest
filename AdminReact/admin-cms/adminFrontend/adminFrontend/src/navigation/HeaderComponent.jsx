import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import smvitaLogo from "./images/smvitaLogo.png";
import 'font-awesome/css/font-awesome.min.css';

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
                {/* <img src={smvitaLogo} alt="SMVITA" style={{ height: 50 }}></img> */}
              </li>
              <li className="nav-item">
                <a className="nav-link  nav-link-fade-up navLinkCss" href="#">
                  Follow Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-fade-up navLinkCss" href="#">
                  Enquiry
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-fade-up navLinkCss" href="#">
                  Student Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-fade-up navLinkCss" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-fade-up navLinkCss" href="#">
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
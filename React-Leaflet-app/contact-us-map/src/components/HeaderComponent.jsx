import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import smvitaLogo from "./images/smvitaLogo.png";
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
              <i className="fas fa-bars"></i>
            </button>
            <ul className="navbar-nav mr-auto w-100" id="nav">
              <li className="nav-item">
                <img src={smvitaLogo} alt="SMVITA" style={{ height: 50 }}></img>
              </li>
              <li className="nav-item">
                <Link className="nav-link  nav-link-fade-up navLinkCss" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link nav-link-fade-up navLinkCss" to={`/cdet/aboutus`}>
                  About us
                  </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-fade-up navLinkCss" to={`/cdet/course`}>
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-fade-up navLinkCss" to={`/cdet/contactus`}>
                 Contact us
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link nav-link-fade-up navLinkCss" to={`/cdet/gallery`}>
                Gallery
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import footerBg from "./images/footer-bg.jpg";

export default class HeaderComponent extends React.Component {
render(){
    return(
        <div>
            <div className="footer">
            <div className="container">
                    <div className="row text-light">
                    <div className="col-lg-1 col-xs-12 links"></div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-5 pt-3">Quick Links</h4>
                            <ul className="mt-3 p-0">
                                <li><a href="Home.html" className="linkColor">Home</a></li>
                                <li><a href="AboutUs.html" className="linkColor">About Us</a></li>
                                <li><a href="Courses.html" className="linkColor">Courses</a></li>
                                <li><a href="ContactUsFinal.html" className="linkColor">Contact Us</a></li>
                                <li><a href="Gallery.html" className="linkColor">Gallery</a></li>
                               
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 col-md-4 location">
                            <h4 className="mt-lg-0 mt-5 pt-3">Location</h4>
                            <i className="fa fa-map-marker iconColor mt-3 marginRt"></i><strong>Authorised Training Centre</strong><br />
                              <p>  5th Floor, Vidyanidhi Education Complex, 
                                Vidyanidhi Road, Juhu Scheme, 
                                Andheri (W), Mumbai 400 049 India</p>
                                <i className="fa fa-phone iconColor marginRt"></i><a href="#" className="linkColor">9029435311 / 9324095272 </a>
                                <p></p>
                                <i className="fa fa-phone iconColor marginRt"></i><a href="#" className="linkColor"> 9987062416</a>
                                <p></p>
                            <p><i className="fa fa-envelope iconColor marginRt"></i><a href="mailto:training@vidyanidhi.com" className="linkColor">training@vidyanidhi.com</a></p>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    )
    }


}



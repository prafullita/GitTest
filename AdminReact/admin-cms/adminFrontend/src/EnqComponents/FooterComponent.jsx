import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state={
           
        }

    }

    render() {
        return (
            <div>
            <div className="mt-5 pt-5 footer footerStyle">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-lg-3 col-xs-12 links">
                            <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
                            <ul className="m-0 p-0">
                                <li><a href="Home.html">Home</a></li>
                                <li><a href="AboutUs.html">About Us</a></li>
                                <li><a href="Courses.html">Courses</a></li>
                                <li><a href="ContactUsFinal.html">Contact Us</a></li>
                                <li><a href="Gallery.html">Gallery</a></li>
                               
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                            <i className="fa fa-map-marker"></i><strong>Authorised Training Centre</strong>
                              <p >  5th Floor, Vidyanidhi Education Complex, 
                                Vidyanidhi Road, Juhu Scheme, 
                                Andheri (W), Mumbai 400 049 India</p>
                                <i className="fa fa-phone"></i><a href="#">9029435311 / 9324095272</a>
                                <p></p>
                                <i className="fa fa-phone" ></i><a href="#" > 9987062416</a>
                                <p></p>
                            <p><i className="fa fa-envelope"></i><a href="mailto:training@vidyanidhi.com" >training@vidyanidhi.com</a></p>
                        </div>
                    </div>
                 
                </div>
                
            </div>
            <section>
                <footer className="text-center" >
                    <p >Copyrights &copy;2021 all rights reserved by Vidyanidhi Inc. </p>
                </footer>
            </section>

            </div>
        );
    }
}

export default FooterComponent;
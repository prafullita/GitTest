import React, { Component } from 'react';
import { Card,CardBody } from 'reactstrap';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        return (
            <div className='container-lg' >
                <nav className="navbar stroke  sticky-top navbar-expand-lg">
               
                    <div className="container">

<button className="navbar-toggler" type="button"
    data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <i className="fas fa-bars"></i>
</button>

<div className="collapse navbar-collapse bg-secondary"
    id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto w-100">
        <li className="nav-item">
            <a className="nav-link" href="#">Enquiry </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Follow Up</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Student Registration</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Course</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Gallery</a>
        </li>
    </ul>
</div>
</div>

            
                   
                </nav>

                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 reponsive-onehalf">
                        <marquee behavior="scroll" direction="left">100% Placements for PG-DAC (Feb 20), e-Dac (Sep 20) and e-DAC (May 21)</marquee>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
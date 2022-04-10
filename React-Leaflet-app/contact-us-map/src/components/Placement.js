import React from "react";
import { Col,Row } from "reactstrap";

const Placement=()=>{
    return(
        <div>
        <Row>
            <Col md={4}>
                <div className="card" >
                    <div className="card-body"> 
                    <img class="card-img-top" src="https://vidyanidhi.com/images/dbda_may21.png" alt="Card image cap"/>   
                        <div className="card-title fw-bold mt-3 text-center"><h3>2018</h3></div>
                        <div className="card-text  text-center"><p>100%</p></div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="card" >
                    <div className="card-body">   
                    <img class="card-img-top" src="https://vidyanidhi.com/images/DBDA_feb2020.png" alt="Card image cap"/> 
                        <div className="card-title fw-bold mt-3 text-center"><h3>2019</h3></div>
                        <div className="card-text  text-center"><p>100%</p></div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="card" >
                    <div className="card-body">
                    <img class="card-img-top" src="https://vidyanidhi.com/images/DAC_may21.png" alt="Card image cap"/>    
                        <div className="card-title fw-bold mt-3 text-center"><h3>2020</h3></div>
                        <div className="card-text  text-center"><p>100%</p></div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="card" >
                    <div className="card-body">
                    <img class="card-img-top" src="https://vidyanidhi.com/images/DAC_sep20.png" alt="Card image cap"/>    
                        <div className="card-title fw-bold mt-3 text-center"><h3>2021</h3></div>
                        <div className="card-text  text-center"><p>100%</p></div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
                <div className="card" >
                    <div className="card-body">
                    <img class="card-img-top" src="https://vidyanidhi.com/images/DAC_feb20.png" alt="Card image cap"/>    
                        <div className="card-title fw-bold mt-3 text-center"><h3>2022</h3></div>
                        <div className="card-text  text-center"><p>100%</p></div>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
    )
}
export default Placement;
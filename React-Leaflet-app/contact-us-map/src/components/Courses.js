import React from "react";
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";

import { Row,Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { Link,useNavigate } from "react-router-dom";
import CourseDet from "./CourseDet"; 

const Courses=(coursess)=>{

//console.log(coursess);

    return(
    <div className="col-md-4 cards">
        
            {/* <Col md={4} className="cards"> */}
                <Card>
        
                <CardBody>
       
                <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" alt="Card image cap"/>
       
                <div className="card-title fw-bold mt-3"><h3>{coursess.coursess.title}</h3></div>
            
                <div className="card-text  text-justify"><p>{coursess.coursess.description}</p></div>
                <Link to={`/cdet/modules/${coursess.coursess.id}`} >
                <Button color="primary">
                 More Info
                 </Button>
                </Link>
                </CardBody>
    
                </Card>
            {/* </Col> */}
        
    </div>
    );
}

export default Courses;
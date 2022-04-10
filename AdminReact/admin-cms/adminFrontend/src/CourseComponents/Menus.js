import React from "react";
import { ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import { Row,Col } from "reactstrap";

const Menus=()=>{
    return(
        <div>
                  
        <ListGroup className="text-justify">
               <Row>
               <Col md={6}>
                <Link className="bg-success list-group-item list-group-item-action" tag="a" to="/admin/addcourses" action>
                    Add Course
                </Link>
                <Link className="bg-info list-group-item list-group-item-action" tag="a" to="/admin/view" action>
                   View Course
                </Link>
               
                </Col>

                <Col md={6}>
                <Link className="bg-success list-group-item list-group-item-action" tag="a" to="/admin/batch" action>
                  Add Batch Details
                </Link>
                <Link className="bg-info list-group-item list-group-item-action" tag="a" to="/admin/bview" action>
                  View Batch Details
                </Link>
                </Col>
                </Row>
            </ListGroup>
           

        </div>
    );
};

export default Menus;
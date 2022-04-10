import axios from "axios";
import React from "react";
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import AddCourse from "./AddCourse";
import { Link } from "react-router-dom";
import { Action } from "history";
import { useEffect } from "react";
import Menus from "./Menus";
import {Row,Col} from 'reactstrap';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";


const Course=({course,update})=>{

    const updateCourses=(cd)=>{
        
        <AddCourse id={cd.id} title={cd.title} description={cd.description} />
    }
    useEffect(()=>{
        document.title="View Course";
     
    }, []);

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/admin/courses/${id}`).then(
            (response) =>{
                console.log(response);
                toast.success("Course Deleted Successfully",{
                    position:"bottom-right",
                    autoClose:600
                });
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{
                    autoClose:600});
            }
        )
    };

    const updateitem=(id)=>{
        axios.delete(`${base_url}/admin/courses/update`).then(
            (response) =>{
                console.log(response);
                toast.success("Course Deleted Successfully",{
                    position:"bottom-right",
                    autoClose:600
                });
                update(id);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{
                    autoClose:600});
            }
        )
    };

           
return (
    <>  
    <HeaderComponent />  
    <Row>
    <Col md={4}>
        <Menus />
    </Col>
    <Col md={8}>
    <Card>
        <CardBody>
        <div className="font-weight-bold">
            <CardSubtitle>{course.title}</CardSubtitle>
            </div>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <div className="row">
            <div className="col-md-4"></div>
                <div className="col-md-1">
                
                <Button color="danger" 
                onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                </div>
                <div className="col-md-1">
               
            <Link  to={`/admin/edit/${course.id}` }>               
            <Button color="warning">Update</Button>
            </Link>
 
                </div>
            </div>

            </Container>
        </CardBody>
    </Card>
</Col>
</Row>
<FooterComponent />
</>

)
}

export default Course;
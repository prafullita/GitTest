import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import Menus from "./Menus";
import {Col,Row} from 'reactstrap';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

const Allcourse =() =>{

    const getAllCoursesFromServer =()=>{
        axios.get(`${base_url}/admin/courses`).then(
            (response) =>{
               // console.log(response);
                toast.success("Courses has been loaded",{
                    position:"bottom-right",
                    autoClose:600
                });
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{
                    position:"bottom-right",
                    autoClose:600
                });
            }
        );
    }; 

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id != id));
        };

    const [courses,setCourses] = useState([]);
console.log(courses);


 
    useEffect(()=>{ 
       getAllCoursesFromServer();
    }, []);

    return(
     
        <>
        <HeaderComponent />
        <Row>
        <Col md={4}>
       <Menus />
       </Col>
       <Col md={8}>
            {
                courses.length > 0 ?courses.map((item)=>
                <Course key={item.id} course={item} update={updateCourses} />) :<> <HeaderComponent /><Col md={4}><Menus />
          
        </Col><Col md={8}>"No courses available" </Col><FooterComponent /></>
               
            }

</Col>
        </Row>
        <FooterComponent />
        </>
    );


};

export default Allcourse;
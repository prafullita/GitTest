import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { FormGroup, Label,Form,Input, Button,Container } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Menus from "./Menus";
import {Row,Col} from 'reactstrap';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

const EditCourse=()=>{

    useEffect(()=>{
        document.title="Edit Course";
        loadCourse();
    }, []);

    const {id}=useParams();
    //console.log(id)
   
    
    const loadCourse=()=>{
   axios.get(`${base_url}/admin/courses/${id}`).then((response)=>{
      
            setCourses(response.data)
            //console.log(response.data)
        })
        // setCourses(responses.data)
     
    }
    const [courses,setCourses]=useState([]);
    console.log(courses.title)
    //form handler function
    const handleForm=(e)=>{
        console.log(courses);
        postDataToServer(courses);
        e.preventDefault();
    };
    
    const handleChange=(event)=>{
        setCourses(event.target.value)
    }
    
    //post data 
const postDataToServer=(data)=>{
    axios.put(`${base_url}/admin/courses/update`,data).then((response) =>{
        console.log(response);
        toast.success("Course updated successfully",{
            position:"bottom-right",
            autoClose:600
        });
        setCourses({});
    },
    (error)=>{
        console.log(error);
        toast.error("Something went wrong",{
            autoClose:600});
    })
}
    return (
        <>
        <HeaderComponent />
        <Row>
        <Col md={4}>
            <Menus />
        </Col>
        <Col>
        <h1 className="text-center">Fill Course Details</h1>
          <Form onSubmit={handleForm}>
              <FormGroup>
                  <Label>Course Id</Label>
                  <Input 
                  type="hidden"
                  placeholder="Enter here"
                  name="userId"
                  id="userId" 
                   value={courses.id}
                   //onChange={handleChange}
                   onChange={(e)=>{
                        setCourses({...courses,id:e.target.value})
                    }}
                    
                  /> 
              </FormGroup>
              <FormGroup>
                  <Label for="title">Course Title</Label>
                  <Input 
                  type="text"
                  placeholder="Enter title here"
                  id="title" 
                  value={courses.title}
                  
                  //onChange={handleChange}
                  onChange={(e)=>{
                        setCourses({...courses,title:e.target.value})
                    }}
                  /> 
              </FormGroup>
              <FormGroup>
                  <Label for="description">Course description</Label>
                  <Input 
                  type="textarea"
                  placeholder="Enter description here"
                  id="description" 
                  value={courses.description}

                  //onChange={handleChange}
                  onChange={(e)=>{
                        setCourses({...courses,description:e.target.value})
                    }}
                  /> 
              </FormGroup>

              <Container>
                  <Button type="submit" color="success">
                      Edit Course
                      
                  </Button>
                  <Button type="reset" colour="warning">
                      Clear
                  </Button>
              </Container>
          </Form>  
          </Col>
        </Row>
        <FooterComponent />
        </>
    );
};

export default EditCourse;
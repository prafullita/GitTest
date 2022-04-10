import React , { useState } from "react";
import { Button,Row ,Col, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { useEffect } from 'react';
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Header from "./Header";
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

function Enquiry()
{
    useEffect(()=>{
        document.title="Enquiry Form";
        
    },[]);

    const[enquiry,setEnquiry]=useState({});
    
    const handleForm=(e)=>{
        console.log(enquiry);
        postDataToServer(enquiry);

        
        e.preventDefault();
    }

    //creating function to pass data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/admin/enquiries`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Enquiry has been successfully added",{
                    autoClose:600});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{
                    autoClose:600});
            }
        )
    }

    
    return(
        <>
        <HeaderComponent />
        <div>
            <Header/>
            <br/>
           <Container>
                <Row>
                    <Col sm={2}>
                    <Link to="/admin/getEnquiries" className="btn btn-primary mb2 ">Show Enquiries</Link>
                    </Col>
                    <Col sm={8} >
                        <Form onSubmit={handleForm}>
                            <FormGroup row>
                                <Label for="pname" sm={2}>Parents Name</Label>
                                <Col sm={8}>
                                    <Input id="pname" name="pname" placeholder="Enter Your Parents Name" required type="text" 
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,parentsName:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="fname" sm={2}>First Name</Label>
                                <Col sm={8}>
                                    <Input id="fname" name="fname" placeholder="Enter Your First Name" required type="text"
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,firstName:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="lname" sm={2}>Last Name</Label>
                                <Col sm={8}>
                                    <Input id="lname" name="lname" placeholder="Enter Your Last Name" required type="text"
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,lastName:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="add" sm={2}>Address</Label>
                                <Col sm={8}>
                                    <Input id="add" name="add" placeholder="Enter Your Address" required type="text" 
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,address:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email ID</Label>
                                <Col sm={8}>
                                    <Input id="exampleEmail" name="email" placeholder="Enter Your Email" required type="email" 
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,emailId:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="mob" sm={2}>Mobile</Label>
                                <Col sm={8}>
                                    <Input id="mob" name="mob" placeholder="Enter Your Mobile Number" required maxLength={10} type="tel"
                                    onChange={(e)=>{
                                        setEnquiry({...enquiry,mobile:e.target.value})
                                    }} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="qual" sm={2}>Qualification</Label>
                                <Col sm={8}>
                                    <Input id="qual" name="qual" placeholder="Enter Your Qualification" required type="text" 
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,qualification:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="query" sm={2}>Query</Label>
                                <Col sm={8}>
                                    <Input id="query" name="query" placeholder="Enter Your Query" required type="text" 
                                        onChange={(e)=>{
                                        setEnquiry({...enquiry,query:e.target.value})
                                    }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="enquiry" sm={2}>Enquiry Type</Label>
                                <Col sm={1}>
                                    <select id="enquiry" name="enquiry" required onChange={(e)=>{
                                        setEnquiry({...enquiry,enquiryType:e.target.value})
                                    }}>
                                        <option value="" selected>--Select--</option>
                                        <option value="Phone/Mobile">Phone/Mobile</option>
                                        <option value="Person">Person</option>
                                        <option value="Other">Other</option>
                                        
                                    </select>
                                </Col>
                            </FormGroup>
                            <Container className="text-center">
                                <Button color="success" type="submit">Submit</Button>
                                <Button color="warning" style={{margin:10}} type="reset">Clear</Button>
                            </Container>
  
                        </Form>
                    </Col>
                </Row>
            </Container> 
        </div>
    <FooterComponent />
        </>
    );
}
export default Enquiry;
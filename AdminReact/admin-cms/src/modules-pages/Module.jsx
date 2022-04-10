import React, { useState } from 'react'
// import axios from 'axios'
// import base_url from '../api/bootapi'
// import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Datamodule } from './Datamodule';
import { Button, Card, CardBody, CardSubtitle, CardText, ListGroupItem, ListGroup, CardHeader, Row, Col } from 'reactstrap'



export const Module = ({modules,index}) => {

//   const deleteModule = (id) => {
//     axios.delete(`${base_url}/deleteModule/${id}`).then(
//       (response) => {
//         toast.success("module deleted successfully")
//         update(id);
//       }, (error) => {
//         toast.error("Oops something went wrong!")
//       }
//     )
//   }


return (
  <Col className= "my-2">
    <Card style={{ width: '20rem' }} className='text-center bg-light text-dark shadow'  >
      <CardHeader style={{backgroundColor:"#215693"}} className='text-center text-white lead'>Module name:  {modules.moduleName}</CardHeader>
      <CardBody style={{backgroundColor:"#53dad375"}}>
        <CardSubtitle className="font-weight-bold"><h3>Duration:</h3> {modules.duration}</CardSubtitle>
        <CardText>{modules.description}</CardText>
      </CardBody>
    </Card>
  </Col>
)

  
}


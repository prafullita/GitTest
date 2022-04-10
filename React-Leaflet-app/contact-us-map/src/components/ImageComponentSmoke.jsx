import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Container, Button } from "reactstrap";



const AlbumImageComponet = ({ albums }) => {

 

  return (
    <div className='col-md-4 mt-3'>
   
   <Card className='customCard'>
        <CardBody className='customCard'>
            <CardSubtitle className='fw-bold text-center mb-3 '>{albums.imageName}</CardSubtitle>
            <Container className='text-center' >
                {
                    <img src={albums.imgUrl} alt={albums.albumName} className="custom"/>
                   
                }
                
            </Container>
        </CardBody>
        </Card>
    </div>
  );
};

export default AlbumImageComponet;

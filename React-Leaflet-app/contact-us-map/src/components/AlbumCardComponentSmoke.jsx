import React from 'react'
import {useEffect,useState}from 'react';
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";
import { Link} from "react-router-dom";
import GalleryService from "../services/GalleryService";

const AlbumCardComponentSmoke = ({albums}) => 
{
    console.log(albums);
    return(
        <div className='col-md-4 mt-3 ' >
         
        <Card id={albums[3]} className='customCard '>
        <CardBody className='customCard'>
            <CardSubtitle className='fw-bold text-center mb-3 '>{albums[1]}</CardSubtitle>
            <Container className='text-center' >
                {
                   albums[2]?<img src={albums[0]} alt="album" className='custom' />:"."
                   
                }
                <Link to={`more/${albums[3]}/${albums[1]}`}>
                <Button color='info' variant="outline-dark"className='mt-3' >View Album</Button>
                </Link>
            </Container>
        </CardBody>
        </Card>
    </div>
    );
}

export default AlbumCardComponentSmoke
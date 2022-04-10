import React ,{useEffect,useState}from 'react';
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import GalleryService from '../Services/GalleryService';
import CoverPage from './CoverPage';
import HeaderComponent from '../Navigationbar/HeaderComponent';
import FooterComponent from '../Navigationbar/FooterComponent';

const AlbumCardComponent=({albums})=>{

   
    console.log(albums);
  const deleteAlbum=(e)=>{
   
      console.log(e.target.id)
        const albumId =e.target.id;

        GalleryService.deleteAlbum(albumId).then((res)=>{
            console.log(res.data);
            swal(res.data);
        }).then((err)=>{
            console.log(err);
        })

  }
    return(
        <>
        {/* <HeaderComponent /> */}
            <div className='col-md-4 mt-3 mb-3'>
             
            <Card id={albums[3]} className='customCard'>
            <CardBody className='customCard'>
                <CardSubtitle className='fw-bold text-center mb-3 '>{albums[1]}</CardSubtitle>
                <Container className='text-center' >
                    {
                        albums[2]?<img src={albums[0]} alt="album" height={290} width={290}/>:"."
                   }
                                                
                    <Link to={`/admin/edit/${albums[3]}/${albums[1]}`}><Button color='info' className='mt-3'>Edit Album</Button></Link>
                    <Button color='danger'className='mt-3 ml-3' style={{marginLeft:8}} onClick={(e)=>deleteAlbum(e)} id={albums[3]}>Delete Album</Button>
                </Container>
            </CardBody>
            </Card>
        </div>
        {/* <FooterComponent /> */}
        </>
        );
    }

export default AlbumCardComponent;

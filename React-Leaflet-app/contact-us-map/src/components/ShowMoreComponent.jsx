import React from 'react'
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import GalleryService from "../services/GalleryService";
import {
    Card,CardBody,CardTitle,CardSubtitle,
    CardText,CardFooter,Button,Container
} from "reactstrap";
import ImageComponentSmoke from './ImageComponentSmoke';

const ShowMoreComponent = () => 
{
    var   {id, albumName} = useParams();
    const [image,setImgs]=useState([]);
    const [photo,setPhoto]=useState("");

    useEffect(() => {
        getAllImages();
        //getAlbs();
      }, []);

      const getAllImages = () => {
        GalleryService.getAlbumImagesByAlbumId(id)
          .then((res) => {
            setImgs(res.data);
            console.log(res.data);
            console.log(res.data[0].imageName);
            console.log(image)
          })
          .catch((err) => {
            console.log(err);
          });
         
      };

      const getAlbs=()=>{
        GalleryService.getAlbumByAlbumId(id).then((res)=>{
          console.log(res.data);
          setPhoto(res.data.albumName);
          //alNm=res.data.albumName;
        }).catch((error)=>{
          console.log(error);
        })
      }

  return (
    <div className='row'>
         
         {
       image.map((img)=>(<ImageComponentSmoke key={img.id} albums={img} />))
     }  
    </div>
  )
}

export default ShowMoreComponent
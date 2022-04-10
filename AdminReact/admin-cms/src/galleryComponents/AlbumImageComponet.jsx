import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Card, CardBody, CardSubtitle, Container, Button } from "reactstrap";
import swal from "sweetalert";
import GalleryService from "../Services/GalleryService";

const AlbumImageComponet = ({ albums }) => {

  //console.log(albums);
const deleteImge=(e)=>{
  //console.log(e.target.id);
  const imgId =e.target.id 
  GalleryService.deleteImageInAlbum(imgId).then((res)=>{
    //console.log(res.data);
    swal(res.data);
  }).catch((err)=>{
    console.log(err);
    swal("Error while Deleting Image");
  })

}

  return (
    <div className="col-md-3">
   
      <Card className="mt-3">
        <CardBody className="imgCard">
          <CardSubtitle className="fw-bold text-center mb-3 ">
            {albums.imageName}
          </CardSubtitle>
          <Container className="text-center">
            <img src={albums.imgUrl} alt={albums.albumName} height={200} width={200}/>
            <Button color="btn btn-md btn-danger mt-3" id={albums.imgId} onClick={(e)=>deleteImge(e)}>Delete</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default AlbumImageComponet;

import React, { useEffect, useState } from "react";
 import { useParams } from "react-router-dom";
 import GalleryService from "../Services/GalleryService";
import AlbumImageComponet from "./AlbumImageComponet";

const AlbumImage = () => {
  var { id, albumName } = useParams();
 // console.log(id, albumName);

  useEffect(() => {
    getAllImages();
  }, []);

  const [imgs,setImgs]=useState([]);

  const getAllImages = () => {
    GalleryService.getAlbumImagesByAlbumId(id)
      .then((res) => {
        setImgs(res.data);
        console.log(res.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
     
  };

  return (
    
    <div className="row">
     
     {
       imgs.map((img)=>(<AlbumImageComponet key={img.id} albums={img} />))
     }    
    
    </div>
    
  );
};

export default AlbumImage;

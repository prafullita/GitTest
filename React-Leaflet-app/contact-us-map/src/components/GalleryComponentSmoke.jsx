import React from 'react'
import GalleryService from "../services/GalleryService";
import { useEffect, useState } from "react";
import AlbumCardComponentSmoke from './AlbumCardComponentSmoke';



const GalleryComponentSmoke = () => 
{
    const[albums,setAlbums]=useState([]);
    const[cps,setCps]=useState([]);

    
    useEffect(() => 
    {
        createAlbumCard();

    },[]);

    const createAlbumCard = () => {
        console.log("Jay Agri-Koli");
        GalleryService.getAlbums()
          .then((res) => {
            console.log(res.data);
            setAlbums(res.data);
            getCoverPages();
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const getCoverPages=()=>{
        console.log("getCoverPages");
        GalleryService.getCps().then((res)=>{
          console.log(res.data)
          setCps(res.data);
        }).catch((err)=>{
          console.log(err);
        })
      }
    
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                     <h1 className="text-center">Gallery</h1>
                </div>
            </div>
        </div>
        
        <div className="row mb-3">
        {
           cps.length>0 ?cps.map((item)=><AlbumCardComponentSmoke albums={item}/>):"No Albums"
        }
        </div>
    </div>
  )
}

export default GalleryComponentSmoke
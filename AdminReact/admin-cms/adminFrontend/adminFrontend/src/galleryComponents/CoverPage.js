import { useState,useEffect } from "react";
import React from 'react';
import GalleryService from "../Services/GalleryService";

const CoverPage=()=> {

    useEffect(() => {
        
        getAllCps();
       },[]);

      const[cps,setCps]=useState({});

   const getAllCps = ()=>{
    GalleryService.getCps().then((res)=>{
        console.log(res.data);
        setCps(res.data);
        //console.log(cps);
    }).catch((error)=>{
        console.log(error);
    }) 
   } 
  
  return (
    <div>
      <h1>Cover Image</h1>
      {
          
          cps.length>0?cps.map((cp)=><div><img src={cp.imgUrl}  alt=""/><h1>{cp.imgName}</h1></div>):"No CoverPage"
      }
      
    </div>
  )
}

export default CoverPage

import React, { useEffect, useState } from "react";
import GalleryService from "../Services/GalleryService";
import { Link } from "react-router-dom";
import AlbumCardComponent from "./AlbumCardComponent";
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

function GalleryComponent() {

  useEffect(() => {
      createAlbumCard();
      getCoverPages();
     },[]);

   const[albums,setAlbums]=useState([]);

  const[cps,setCps]=useState([]);

  const createAlbumCard = () => {
    console.log("Clicked");
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
    <>
    <HeaderComponent />
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Gallery</h1>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-1">
            <button className="btn btn-dark">
              <Link to="/admin/CreateAlbum">
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  style={{ color: "white" }}
                ></i>
              </Link>
            </button>
          </div>
        </div>
        <div className="row mb-3">
        {
           cps.length>0 ?cps.map((item)=><AlbumCardComponent albums={item}/>):"No Albums"
          
        }
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  );
}

export default GalleryComponent;

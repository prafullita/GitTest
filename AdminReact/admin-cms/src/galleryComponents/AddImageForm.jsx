import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumImage from "./AlbumImage";
import swal from 'sweetalert';
import GalleryService from "../Services/GalleryService";
import {toast} from 'react-toastify';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

function AddImageForm() {

  useEffect(() => {
    getAllImages();
    getAlbs();
    
  }, []);

  var   {  id, albumName } = useParams();
 console.log(id,albumName);

const [alNm,setAlNm]=useState("");

const [imgName,setImgName]=useState("");
const [imgs,setImgs]=useState([]);


const [file,setFile]=useState("");
 const [checkedOne, setCheckedOne] = useState(false);
// const updateOne = () => setCheckedOne(!checkedOne);

const albName = albumName;


let formData = new FormData();

const getAllImages = () => {
  GalleryService.getAlbumImagesByAlbumId(id)
    .then((res) => {
      setImgs(res.data);
    //  console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
   
};

const getAlbs=()=>{
  GalleryService.getAlbumByAlbumId(id).then((res)=>{
    console.log(res.data.albumName);
    setAlNm(res.data.albumName);
    //alNm=res.data.albumName;
  }).catch((error)=>{
    console.log(error);
  })
}

  const addImg=(e)=>{
    toast.success("image added successfully",{
      autoClose:600});
   
    e.preventDefault();
      //swal("Add Image");
      const cap = {
        "imageName":imgName,
        "isCoverPage":checkedOne  ,
        "alimg_fk":id  
      };
      const json = JSON.stringify(cap);
      const blob = new Blob([json], {
        type: 'application/json'
      });
      
      formData.append('img', blob);
      formData.append("file", file);
      formData.append("albumaName", albName+"/");
      formData.append("alimg_fk",id);

      for (var value of formData.values()) {
        console.log(value); 
     }

     fetch("http://localhost:8082/admin/addImage", {
      mode: 'no-cors',
      method: "POST",

      body: formData
    }).then(function (res) {
      if (res.data) {
        console.log(res.data);
        toast.success("image added successfully",{
          autoClose:600});
              
      } else {
        console.log("oops");
      }
    }, function (e) {
      alert("Error submitting form!"+e);
    });
   
    getAllImages();
  }

  const handleFile=(e)=>{
    setFile(e.target.files[0]);
    setImgName(e.target.files[0].name);
    formData.append("file", e.target.files[0]);
    // console.log(checkedOne);

  }


  return (
    <>
    <HeaderComponent />
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <form>
            <div className="form-group">
              <label for="albumName">Album Name :</label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={(e) => handleFile(e)}
                required/>
            </div>

            {/* <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checkedOne} onChange={updateOne}/>
                <label className="form-check-label" for="flexCheckChecked">
                   Set Cover Page
                </label>
            </div> */}

            <div className="form-group mt-3 mb-5">
              <button className="btn btn-primary" onClick={(e)=>addImg(e)}>Add Image</button>              
            </div>
            </form>
            
          </div>
        </div>
        <div className="row mb-3 mt-0">
          <div><h1 className="text-center">{alNm}</h1></div>
            <AlbumImage />
        
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  );
}

export default AddImageForm;

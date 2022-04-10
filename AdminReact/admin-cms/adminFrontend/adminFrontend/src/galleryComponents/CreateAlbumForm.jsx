import React,{useState} from "react";
import GalleryService from "../Services/GalleryService";
import {Link} from 'react-router-dom';
import swal from "sweetalert";
import {toast} from 'react-toastify';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";


function CreateAlbumForm() {

    const [albumName, setAlbumName] = useState("");

    var alNm,alId;
    
    const [imgName,setImgName]=useState("");
    const [imgs,setImgs]=useState([]);
    const [file,setFile]=useState("");


    let formData = new FormData();

    const createAlbum=(e)=>{
         
        formData.append("albumName",albumName);
        GalleryService.createAlbums(formData).then((res)=>{
            console.log(res.data);
            if(res.data){
              swal("Album Created Successfully");
              alNm=res.data.albumName;
              alId = res.data.id;
              console.log(alNm+"--AlbumName--"+alId+"--Album Id");
              addImg(e);
            }else{
                console.log("Album is not created")
            }
       
        }).catch((err)=>{
            console.log(err);
        })

    }

    const addImg=(e)=>{
      toast.success("image added successfully",{
        autoClose:600});
      e.preventDefault();
        //swal("Add Image");
        const cap = {
          "imageName":imgName,
          "isCoverPage":true  ,
          "alimg_fk":alId
        };
        const json = JSON.stringify(cap);
        const blob = new Blob([json], {
          type: 'application/json'
        });
        
        formData.append('img', blob);
        formData.append("file", file);
        formData.append("albumaName", alNm+"/");
        formData.append("alimg_fk",alId);
  
        for (var value of formData.values()) {
          console.log(value); 
       }
  
       fetch("http://localhost:8082/admin/addImage", {
        mode: 'no-cors',
        method: "POST",
  
        body: formData
      }).then(function (res) {
        if (res.data) {
          toast.success("clicked");
          console.log(res.data);
          toast.success("Cover Page set  successfully",{
            autoClose:600});
          // getAllImages();
         
        } else {
          console.log("oops");
        }
      }, function (e) {
        alert("Error submitting form!"+e);
      });
     
  
    }


    const handleFile=(e)=>{
      setFile(e.target.files[0]);
      setImgName(e.target.files[0].name);
      formData.append("file", e.target.files[0]);
    }

  return (
    <>
      <HeaderComponent />
    
    <div className="row mt-5 mb-5">
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label for="albumName">Album Name :</label>
            <input
              type="text"
              className="form-control"
              id="albumName"
              placeholder="Enter Album Name"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            required />
          </div>
          <div className="form-group">
            <label for="submit"></label>

              <Link to="/admin/gallery"><button className="btn btn-info mt-3" onClick={createAlbum }>Create Album</button></Link>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        {/* <h3>Add Cover Page to Album</h3> */}
        <form>
          <div className="form-group">
          <label for="albumName">Cover Image :</label>
          <input
                type="file"
                className="form-control"
                id="file"
                onChange={(e) => handleFile(e)}
                required/>

          </div>
        </form>
      </div>
    </div>
    <FooterComponent />
    </>
  );
}

export default CreateAlbumForm

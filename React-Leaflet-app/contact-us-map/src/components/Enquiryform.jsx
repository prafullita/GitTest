import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import baseUrl from './baseUrl';
import axios from "axios";
import swal from 'sweetalert';

import {Link} from 'react-router-dom';


function Enquiryform(){

useEffect(()=>{
    document.title="Contact-us";
})

const[enquiry,setEnquiry]=useState({});

const handleForm =(e)=>{
    e.preventDefault();
    postDataToServer(enquiry);

}
const postDataToServer=(data)=>{
    
    axios.post(`${baseUrl}enquiries`,data).then(
        (response)=>{
            console.log(response);
            console.log("success");
            swal("Enquiry has been successfully added");
            document.getElementById("enqForm").reset();
            
        },
        (error)=>{
            console.log(error);
            console.log("error");
            swal("Something went wrong");
        }
    )
}


return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
    borderDiv marginTop">
  
    <form onSubmit={handleForm} id="enqForm">
        <div className="mb-3 mt-3 row">
            <label className="col-md-3 col-form-label
                form-control-label">Parent name</label>
            <div className="col-md-8">
                <input type="text"
                    className="form-control" id="parentsName"
                    placeholder="Enter Parent name"
                    name="parentsName" onChange={(e)=>{
                        setEnquiry({...enquiry,parentsName :e.target.value})
                    }} required/>
            </div>
            <div className="col-md-1 " style={{color:"red"}}>*</div>
        </div>

        <div className="mb-3 mt-3 row">
            <label for="parent name" className="col-md-3
                col-form-label
                form-control-label">Student Name</label>
            <div className="col-md-8">
                <input type="text"
                    className="form-control" id="firstName"
                    placeholder="Enter First and Last Name" name="firstName"
                    onChange={(e)=>{
                        setEnquiry({...enquiry,firstName :e.target.value})
                    }}
                    required />
            </div>
            <div className="col-md-1 " style={{color:"red"}}>*</div>
        </div>

        <div className="mb-3 mt-3 row">
            <label for="student name"
                className="col-md-3 col-form-label
                form-control-label">Email</label>
            <div className="col-md-8">
                <input type="email"
                    className="form-control" id="emailId"
                    placeholder="Enter Email"
                    name="emailId" 
                    onChange={(e)=>{
                        setEnquiry({...enquiry,emailId :e.target.value})
                    }}
                    required />
            </div>
            <div className="col-md-1 " style={{color:"red"}}>*</div>
        </div>

        <div className="mb-3 mt-3 row">
            <label for="mobile" className="col-md-3
                col-form-label form-control-label">Mobile
                No.</label>
            <div className="col-md-8">
                <input type="tel"
                    className="form-control" id="mobile"
                    placeholder="Enter Mobile Number" name="mobile"
                    onChange={(e)=>{
                        setEnquiry({...enquiry,mobile :e.target.value})
                    }}
                    required />
            </div>
            <div className="col-md-1 " style={{color:"red"}}>*</div>
        </div>

        <div className="mb-3 mt-3 row">
            <label for="mobile" className="col-md-3
                col-form-label form-control-label">Your
                Query</label>
            <div className="col-md-8">
                <input type="" className="form-control"
                    id="query" placeholder="Enter Your Query" name="query"
                    onChange={(e)=>{
                        setEnquiry({...enquiry,query:e.target.value})
                    }}
                    required />
            </div>
            <div className="col-md-1 " style={{color:"red"}}>*</div>
        </div>

        <div className="mb-3 mt-3 row">
             {/* <label for="mobile" className="col-md-3 col-form-label form-control-label">Your Query</label>  */}
            <div className="col-md-6">
                <button type="submit" className="btn
                    btn-primary" onClick={handleForm}>Submit</button>

            </div>

        </div>

    </form>

</div>



);


}

export default Enquiryform;
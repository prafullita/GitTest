
import React, { useEffect} from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import url from "../api/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CourseDet=(coursess)=>{

  useEffect(()=>{
    document.title="Courses";
  
},[]);


console.log(coursess);
     
return (
<div className="container">
    <Table className="table table-striped table-bordered" >
    <tbody>
      <tr key={coursess.coursess.id}>
        <td>{coursess.coursess.id.title}</td>
        <td>{coursess.coursess.startdate}</td>
        <td>{coursess.coursess.enddate}</td>
        <td>{coursess.coursess.batch}</td>
        <td>{coursess.coursess.duration}</td>
        <td>{coursess.coursess.timing}</td>
        <td>{coursess.coursess.fees}</td>
      </tr>
    </tbody>
  </Table>
  </div>
)
}
    
export default CourseDet;

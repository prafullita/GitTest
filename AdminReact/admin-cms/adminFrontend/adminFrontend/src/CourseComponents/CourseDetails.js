import React, { useEffect, useState } from "react";

import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Menus from "./Menus";
import {Row,Col} from 'reactstrap';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

const CourseDetails=()=>{

 
  const deleteStudent = (id) => {
    console.log(id);
    axios.delete(`${base_url}/admin/course/${id}`)
      .then((response) => {
        getAllCoursesFromServer();
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllCoursesFromServer =()=>{
    axios.get(`${base_url}/admin/course`).then(
        (response) =>{
           // console.log(response);
            toast.success("Batches has been loaded",{
                position:"bottom-right",
                autoClose:600
            });
            setCourses(response.data);

        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong",{
              autoClose:600});
        }
    );
}; 
const [courses,setCourses] = useState([]);
console.log(courses);

useEffect(()=>{
   getAllCoursesFromServer();
}, []);

    return(
      <>
      <HeaderComponent />
        <Row>
        <Col md={4}>
        <Menus />          
        </Col>
        <Col md={8}>
             <table className="table table-bordered">
             <thead>
                <tr>
                <th>Course Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Batch</th>
                <th>Duration</th>
                <th>Timing</th>
                <th>Fees</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
              {courses.map((stud) => (
                <tr key={stud.courseDetailid}>
                  <td>{stud.ctitle }</td>
                  <td>{stud.startdate}</td>
                  <td>{stud.enddate}</td>
                  <td>{stud.batch}</td>
                  <td>{stud.duration}</td>
                  <td>{stud.timing}</td>
                  <td>{stud.fees}</td>
                  <td>
                    <Link
                      to={`/admin/bedit/${stud.id}`}
                      className="btn btn-info"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteStudent(stud.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
      </Col>
        </Row>
        <FooterComponent />
        </>
    )
}

export default CourseDetails;
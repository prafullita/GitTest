import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import url from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import CourseDet from "./CourseDet";

const Allbatches =() =>{

    const getAllCoursesFromServer =()=>{
        axios.get(`${url}/course`).then(
            (response) =>{
               // console.log(response);
                toast.success("Courses has been loaded",{
                    position:"bottom-right"
                });
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong");
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
            {
                courses.length > 0 ?courses.map((item)=>
                <CourseDet key={item.id} coursess={item}/>) :"No courses available"
                
            }
        </>
    );


};

export default Allbatches;
import React, { useEffect, useState } from "react";
import Courses from "./Courses";
import url from "../api/url";
import axios from "axios";
import { toast } from "react-toastify";
import CourseDet from "./CourseDet";

const Allcourses =() =>{

    const getAllCoursesFromServer =()=>{
        axios.get(`${url}/courses`).then(
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
                <Courses key={item.id} coursess={item}/>) :"No courses available"
                
            }
        </>
    );


};

export default Allcourses;
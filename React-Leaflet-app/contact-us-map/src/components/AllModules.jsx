import React, { useEffect, useState } from 'react'
import { Container, Row } from "reactstrap";
import base_url from '../api/url'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import  {useParams} from 'react-router-dom'
import ModuleAccordion from './ModuleAccordion';


export const AllModules = () => {

  const {id}= useParams();
    const getAllModules = (courseId) => {
        axios.get(`${base_url}/Allmodules/${courseId}`).then(
          (response) => {
            console.log(response);
            setModules(response.data);
            toast.success("Modules we will learn in this course!")
          },
          (error) => {
            console.log(error);
            toast.error("something went wrong")
          }
        );
      };
    
      useEffect(() => {
        getAllModules(id);
      }, []);

      const [modules, setModules] = useState([]);
      const updateStatus = (id) => {
        console.log(id);
        setModules(modules.filter((c) => c.id != id));
      }

      
  return (
    <div className='bg-light'>
      <h1 className='text-center'>Modules for the Curriculum</h1>
      {/* <p className='text-center'>*Scheduled for  : {date}</p> */}
      {
        modules.length > 0 ? 
        <Container className='p-md-5'>
          <Row>
         {modules.map((item, index) => <ModuleAccordion key={index} modules={item} update={updateStatus} />)}
          </Row>
        </Container>
          : "Currently no information available!"
      }
    </div>
  )
}

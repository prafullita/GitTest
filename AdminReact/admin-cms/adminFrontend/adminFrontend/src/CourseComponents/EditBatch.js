import {React,useState,useEffect} from "react";
import { Form,FormGroup,Button,Container } from "react-bootstrap";
import { Input,Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menus from "./Menus";
import {Row,Col} from 'reactstrap';
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

const EditBatch=()=>{

    useEffect(()=>{
        document.title="Add Course";
        getAllCoursesFromServers();

        // getAllCoursesFromServer();
        getAllbatches();
    }, []);

   const {id}=useParams();
    const [courses,setCourses]=useState({});
    const [course,setCourse]=useState({});
    const [all,setAll]=useState({});
   
    // const getAllCoursesFromServer =()=>{
    //     axios.get(`${base_url}/courses`).then(
    //         (response) =>{
    //            console.log(response.data);
    //             toast.success("Courses has been loaded",{
    //                 position:"bottom-right"
    //             });
    //             setCourses(response.data);
    //         },
    //         (error)=>{
    //             console.log(error);
    //             toast.error("Something went wrong");
    //         }
    //     );
    // };

    const getAllCoursesFromServers =()=>{
        axios.get(`${base_url}/admin/course/${id}`).then(
            (response) =>{
               console.log(response.data);
                toast.success("Courses has been loaded",{
                    position:"bottom-right",
                    autoClose:600
                });
                setCourse(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong",{
                    autoClose:600});
            }
        );
    };
    // const getall=()=>{
    //     onChange={(e)=>{
    //         setCourse({...course,id:e.target.value})
    //     }}  
    // } 

    var cid;
    const getAllbatches =()=>{
        axios.get(`${base_url}/admin/courses`).then(
            (response) =>{
               // console.log(response);
                toast.success("Courses has been loaded",{
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
    //form handler function
    const handleForm=(e)=>{
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };
    
    //post data 
const postDataToServer=(data)=>{
    axios.put(`${base_url}/admin/course/update`,data).then((response) =>{
        console.log(response);
        toast.success("Course updated successfully",{
            position:"bottom-right",
            autoClose:600
        });
        setCourses({});
    },
    (error)=>{
        console.log(error);
        toast.error("Something went wrong",{
            autoClose:600});
    })
}

    return(
        <>
        <HeaderComponent />
            <Row>
            <Col md={4}>
                <Menus />
            </Col>
            <Col md={8}>
           <Form onSubmit={handleForm} >
           <FormGroup>
                  <Label>Course Name:</Label>
                  <select value={course.ctitle} onChange={(e)=>{
            setCourse({...course,ctitle:e.target.value}) }}
                  className="form-control col-md-3"
                 
                  >
                  <option>---Select Course---</option>
                  {
                      courses.length>0?courses.map((co) =>(
                          
                        <option 
          >{co.title}</option>
                      )):"No course available"
                      
                   }
                </select>
              </FormGroup>
              <FormGroup>
                  <Label for="title">Start Date</Label>
                 <Input type="date" value={course.startdate}  onChange={(e)=>{
                        setCourse({...course,startdate:e.target.value})}} />
              </FormGroup>

              <FormGroup>
                  <Label for="title">End Date</Label>
                 <Input type="date" value={course.enddate} onChange={(e)=>{
                        setCourse({...course,enddate:e.target.value})
                    }} />
                 
              </FormGroup>

              <FormGroup>
                  <Label for="description">Batch</Label>
                  <Input 
                  type="text"
                  placeholder="Enter batch here"
                  id="batch"
                  value={course.batch}
                  onChange={(e)=>{
                        setCourse({...course,batch:e.target.value})
                    }} 
                  /> 
              </FormGroup>

              <FormGroup>
                  <Label for="description">Duration</Label>
                  <Input 
                  type="text"
                  placeholder="Enter duration here"
                  id="duration" 
                  value={course.duration}
                  onChange={(e)=>{
                        setCourse({...course,duration:e.target.value})
                    }}
                  /> 
              </FormGroup>

              <FormGroup>
                  <Label for="description">Timing</Label>
                  <Input 
                  type="text"
                  placeholder="Enter timing here"
                  id="time"
                  value={course.timing}
                  onChange={(e)=>{
                        setCourse({...course,timing:e.target.value})
                    }} 
                  /> 
              </FormGroup>

              <FormGroup>
                  <Label for="description">Fees</Label>
                  <Input 
                  type="text"
                  placeholder="Enter fees here"
                  id="fees"
                  value={course.fees}
                  onChange={(e)=>{
                        setCourse({...course,fees:e.target.value})
                    }} 
                  /> 
              </FormGroup>

              <Container>
             
                  <Button type="submit" color="success" >
                      Edit Batch
                  </Button>
                
                  <Button type="reset" colour="warning">
                      Clear
                  </Button>
              </Container>
          </Form>
          </Col> 
        </Row>
        <FooterComponent />
        </>
    )
}
export default EditBatch;
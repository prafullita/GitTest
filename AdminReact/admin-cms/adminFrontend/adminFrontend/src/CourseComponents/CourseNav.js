import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import AddCourse from './AddCourse';
import Allcourse from './Allcourse';
import EditCourse from './EditCourse';
import Batches from './Batches';
import CourseDetails from './CourseDetails';
import EditBatch from './EditBatch';
import Menus from './Menus';
import {Button,Col,Row,Container} from "reactstrap";

const CourseNav=()=>{

    return(
        
        <Container>
    
    <Row>
      <Col md={4}>
        <Menus />
    </Col>
     
    <Col md={8}>
      <Routes>
          <Route  exact path="/admin/addcourse/addcourses" element={<AddCourse />} /> 
      
          <Route  exact path ="admin/addcourse/view" element={<Allcourse />} /> 
          <Route  exact path ="/admin/addcourse/edit/:id" element={<EditCourse />} /> 
          <Route  exact path ="/admin/addcourse/batch" element={<Batches />} />
          <Route  exact path ="/admin/addcourse/bview" element={<CourseDetails />} />
          <Route exact path="/admin/addcourse/bedit/:id" element={<EditBatch />} />
          </Routes>
      </Col>
    </Row>
    
  </Container>

    )
}
export default CourseNav;
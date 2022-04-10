import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' ;
import  LoginPage from './pages/LoginPage';
import { AllFollowups } from "./cms/AllFollowups";
import AddFollowup from "./cms/AddFollowup";
import AddEnqfollowup from "./cms/AddEnqfollowup";
import { AllModules } from "./modules-pages/AllModules";
//enquiry components
import Enquiry from './EnqComponents/EnquiryForm';
import EnquiryList from './EnqComponents/EnquiryList';
//gallery components
import GalleryComponent from './galleryComponents/GalleryComponent'
import CreateAlbumForm from './galleryComponents/CreateAlbumForm'
import AddImageForm from './galleryComponents/AddImageForm'
import AlbumCardComponent from './galleryComponents/AlbumCardComponent';
import EditAlbum from './galleryComponents/EditAlbum'
import AddCourse from './CourseComponents/AddCourse';
import Allcourse from './CourseComponents/Allcourse';
import EditCourse from './CourseComponents/EditCourse';
import Batches from './CourseComponents/Batches';
import CourseDetails from './CourseComponents/CourseDetails';
import EditBatch from './CourseComponents/EditBatch';
import ListStudentComponent from './studentComponents/ListStudentComponent'
import AddStudent from './studentComponents/AddStudent'
import EditStudent from './studentComponents/EditStudent'




function App() {
  // return (
  //     <BrowserRouter>
  //       <Switch>
  //         <Route exact path="/" component={LoginPage}/>
  //         <Route exact path="/dashboard" component={Dashboard}/>
  //       </Switch>
  //     </BrowserRouter>
  // );

 
  return (
    <div className="App">
    
    <Router>
      <ToastContainer></ToastContainer>
      
      <Routes>
      <Route exact path="/" element={<LoginPage/>}/>
      <Route exact path = "/admin/allfollowups/:adminId" element={<AllFollowups />}></Route>
      <Route exact path="/admin/addfollowup/:adminId/:enquiryId" element={<AddFollowup/>}></Route>
     
      
      {/* <Route exact path="/admin/addfollowup/:adminId/:enquiryId/:followupId" element={<AddFollowup />}></Route>  will come back to followuplist */}
      <Route exact path="/admin/addfollowup/:adminId/:enquiryId/:followupId" element={<AddFollowup />}></Route>
      <Route exact path="/admin/addEnqfollowup/:adminId/:enquiryId" element={<AddEnqfollowup />}></Route>  {/*will come back to enquirylist */}

      <Route exact path="/admin/addfollowup" element={<AddFollowup/>}></Route>
      <Route exact path = "/admin/modules/:id" element={<AllModules/>}></Route>
      
      <Route path="/admin/enquiryForm" element={<Enquiry/>}></Route>
      <Route path="/admin/getEnquiries" element={<EnquiryList/>}></Route>
      <Route  exact path="/admin/addcourses" element={<AddCourse />} /> 
      
          <Route  exact path ="/admin/view" element={<Allcourse />} /> 
          <Route  exact path ="/admin/edit/:id" element={<EditCourse />} /> 
          <Route  exact path ="/admin/batch" element={<Batches />} />
          <Route  exact path ="/admin/bview" element={<CourseDetails />} />
          <Route exact path="/admin/bedit/:id" element={<EditBatch />} />

      <Route path="/admin/gallery" element={<GalleryComponent />}></Route>
          <Route path="/admin/CreateAlbum" element={<CreateAlbumForm />}></Route>
          <Route path="/admin/addImage" element={<AddImageForm />}></Route>
          <Route path="/admin/albumCard" element={<AlbumCardComponent />}></Route>
          {/* <Route path="/admin/usergalllery" element={<UserGallery />}></Route> */}
          <Route path ="/admin/edit/:id/:albumName" element={<EditAlbum />} />

          
          <Route path="/admin/students" element={<ListStudentComponent />}></Route>
          <Route path="/admin/addStudent" element={<AddStudent />}></Route>
          <Route path="/admin/editStudent/:id" element={<EditStudent />}></Route>
    
      </Routes>
      </Router>
    </div>
  );
}

export default App;

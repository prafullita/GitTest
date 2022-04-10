// import logo from './logo.svg';

import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import Courses from './components/Courses';
import Allcourse from  './components/Allcourses';
import { Row,Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Test from './components/Test';
import 'font-awesome/css/font-awesome.min.css';
import Carousels from './components/Carousel';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import CourseDet from './components/CourseDet';
import MainCDetails from './components/MainCDetails';
import Homee from './components/Homee';
import Placement from './components/Placement';
import Recruiters from './components/Recruiters';
import {AllModules} from './components/AllModules'
import Aboutus from './components/Aboutus';
import ContactUsComponent from './components/ContactUsComponent'
import GalleryComponentSmoke from './components/GalleryComponentSmoke'
import ShowMoreComponent from './components/ShowMoreComponent'

function App() {
  return (
    <div>
      
      <BrowserRouter>     
    <HeaderComponent />
    
    <div className='container'>
     
       <Routes>
          <Route  exact path ="/" element={<Homee />} /> 
          <Route exact path ="/cdet/course" element={<MainCDetails />} />
          <Route exact path ="/cdet/place" element={<Placement />} />
          <Route exact path="/cdet/rec" element={<Recruiters />} />
          <Route exact path = "/cdet/modules/:id" element={<AllModules/>}></Route>
          <Route exact path="/cdet/aboutus" element={<Aboutus />} />
          <Route exact path="/cdet/contactus" element={<ContactUsComponent />} />
          <Route exact path="/cdet/gallery" element={<GalleryComponentSmoke />} />
          <Route path ="/cdet/gallery/more/:id/:albumName" element={<ShowMoreComponent />} />
      
        </Routes>
       </div>
       <Routes>
       
       </Routes>
   <FooterComponent />
   </BrowserRouter>
  </div>
    
  );
}

export default App;

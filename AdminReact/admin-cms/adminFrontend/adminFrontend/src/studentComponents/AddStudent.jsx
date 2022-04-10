import React, { useState ,useEffect} from 'react';
import StudentService from '../Services/StudentService';
// import {useEffect} from 'react-router-dom';
import {toast} from 'react-toastify'
import HeaderComponent from '../Navigationbar/HeaderComponent';
import FooterComponent from '../Navigationbar/FooterComponent';

function AddStudent() {

    useEffect(() => {
        getCourses();
      }, []);

    const [student,setStudent] = useState({});
    const [file,setFile]=useState("");
    const [course,setCourse]=useState("");
    const [courses,setCourses]=useState([]);
    

    // const title = () => {
    //     if (id) {
    //       return <h2 className="text-center">Update Student</h2>;
    //     } else {
    //       return <h2 className="text-center">Add Student</h2>;
    //     }
    //   };
    
   
    
      const getCourses=()=>{
        StudentService.getCourses()
        .then((res) => {
          setCourses(res.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Went Wrong", {
            position: "bottom-right",
            autoClose:600
          });
        });
      }

      let formData = new FormData();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
        formData.append("file", e.target.files[0]);
      };

    const saveStudent=(e)=>{
        console.log(e.target.value)
        e.preventDefault();
        //setCourse({...course,id:e.target.value})
        console.log(course);
        // const cap = {
        //   "fullname":fullname,
        //   "email":email,
        //   "age":age,
        //   "fees":fees,
        //   "mobile":mobile,
        //   "gender":gender,
        //   "qualification":qual,
        //   "ofcAdd":ofcAdd,
        //   "resAdd":resAdd,
        //   "dob":startDate,
        
        // };
        console.log(student);
        const json = JSON.stringify(student);
        const blob = new Blob([json], {
          type: 'application/json'
        });
        
        formData.append('stud', blob);
        
    
        formData.append("file", file);
    
           for (var value of formData.values()) {
          console.log(value); 
       }
      
      //// adding student into database
         fetch("http://localhost:8082/addStudent", {
          mode: 'no-cors',
          method: "POST",
    
          body: formData
        }).then(function (res) {
          if (res.ok) {
            alert("Perfect! ");
          } else if (res.status === 401) {
            alert("Oops! ");
          }
        }, function (e) {
          alert("Error submitting form!"+e);
        });
        toast.success("Clicked", {
          position: "bottom-right",
          autoClose:600
        });
       
       
    }

    useEffect(() => {
        getCourse();
      }, []);
    
      const getCourse=()=>{
        StudentService.getCourses()
        .then((res) => {
          setCourse(res.data);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Went Wrong", {
            position: "bottom-right",
            autoClose:600
          });
        });
      }
    
  return (
    <>
    <HeaderComponent />
    <div>
        <div className="container">
      <div className="row mt-3 mb-3">
        <div className="card col-md-8 col-xs-12 col-sm-12 offset-md-2 offset-md-2">
          {/* {title()} */}
          <div className="card-body">
            <form method="POST" encType="multipart/form-data">
              <div className="form-group mb-2">
               
                <label className="form-label"> Full Name :</label>
                <input
                  type="text"
                  placeholder="Enter Full Name "
                  name="fullName"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,fullName:e.target.value}) }}
        
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Age :</label>
                <input
                  type="number"
                  placeholder="Enter Age "
                  name="age"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,age:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label " style={{ marginRight: 7 }}>
                  Gender :
                </label>
                <input
                  type="radio"
                
                  name="gender"
                  style={{ marginRight: 7, marginLeft: 5 }}
                  onChange={(e)=>{
                    setStudent({...student,gender:e.target.value}) }}
                />
                Male
                <input
                  type="radio"
                 
                  name="gender"
                  style={{ marginRight: 7, marginLeft: 5 }}
                  onChange={(e)=>{
                    setStudent({...student,gender:e.target.value}) }}
                />
                Female
                <input
                  type="radio"
               
                  name="gender"
                  onChange={(e)=>{
                    setStudent({...student,gender:e.target.value}) }}
                />
                Other
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Date of Birth : </label>
                <input
                  className="ml-5"
                  type="date"
                  name="DOB"
                  // value={new Date()}
                  onChange={(e)=>{
                    setStudent({...student,dob:e.target.value}) }}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Qualification :</label>
                <input
                  type="text"
                  placeholder="Enter Qualification "
                  name="qualification"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,qualification:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Course Enrolled:</label>
                <select
                  className="form-control col-md-3" onChange={(e)=>{
                    setStudent({...student,courseEnrolled:e.target.value}) }}
        >
                  <option value={0}  >---Select Course---</option>
                  {courses.map((course) => (
                    <option value={course.title}>{course.title}</option>
                  ))}
                </select>
              
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Batch :</label>
                <select className="form-control col-md-3"  onChange={(e)=>{
                    setStudent({...student,batchtime:e.target.value}) }}>
                  <option value={0}>---Select Batch---</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Course Fees :</label>
                <input
                  type="number"
                  placeholder="Enter Course Fees "
                  name="fees"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,amount:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email "
                  name="email"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,email:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Residential Address :</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Residential Address"
                  name="resAdd"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,residentialAddress:e.target.value}) }}
                ></textarea>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Office Address :</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Office Address"
                  name="ofcAdd"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,officeAddress:e.target.value}) }}
                ></textarea>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Mobile Number :</label>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,mobile:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Phone Number :</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="phone"
                  className="form-control"
                  onChange={(e)=>{
                    setStudent({...student,phone:e.target.value}) }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Date of Admission : </label>
                <input
                  className="ml-5"
                  type="date"
                  onChange={(e)=>{
                    setStudent({...student,admissionDate:e.target.value}) }}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Upload Photo :</label>
                <input
                  className="btn"
                  type="file"
                  name="studentPhoto"
                  onChange={(e) => handleFile(e)}
                ></input>
              </div>

              <button
                className="btn btn-success"
                onClick={(e) => saveStudent(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </div>
    <FooterComponent />
    </>
  )
}

export default AddStudent

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import moment from "moment";
import "react-phone-number-input/style.css";
import StudentService from "../Services/StudentService";
import axios from "axios";

const AddStudentComponent = () => {
  useEffect(() => {
    document.title = "Student Registration";
  }, []);

  const { id } = useParams();

  const [fullname, setfullName] = useState("ABC");
  const [courseEnrolled, setCourseEnrolled] = useState("PG-DAC");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [courses, setCourses] = useState([]);
  const [qual, setQual] = useState("");
  const [gender, setGender] = useState("M");
  const [resAdd, setResAdd] = useState("");
  const [ofcAdd, setOfcAdd] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [fees, setFess] = useState("");
  const [mobile, setMobile] = useState("");
  const [phone, setPhone] = useState("");
  const [file,setFile]=useState("");
 


  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Student</h2>;
    } else {
      return <h2 className="text-center">Add Student</h2>;
    }
  };

  let formData = new FormData();

  // to populate dropdown dynamically
  useEffect(() => {
    getCourse();
  }, []);

  const getCourse=()=>{
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

  const handleInputChange = (e) => {
    setCourseEnrolled(...courseEnrolled,e.target.value);
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
  };

  const saveStudent = (e) => {
    e.preventDefault();
    setCourses({...courses,id:e.target.value})
    console.log(courses);
    const cap = {
      "fullname":fullname,
      "email":email,
      "age":age,
      "fees":fees,
      "mobile":mobile,
      "gender":gender,
      "qualification":qual,
      "ofcAdd":ofcAdd,
      "resAdd":resAdd,
      "dob":startDate,
    
    };

    const json = JSON.stringify(cap);
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
   
   
  };

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <div className="card col-md-8 col-xs-12 col-sm-12 offset-md-2 offset-md-2">
          {title()}
          <div className="card-body">
            <form onSubmit={(e)=>saveStudent(e)} method="POST" encType="multipart/form-data">
              <div className="form-group mb-2">
                {/* <label className="form-label"> Full Name:</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  name="fullname"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setfullName(...fullname,e.target.value)}
                ></input> */}
                <label className="form-label"> Full Name :</label>
                <input
                  type="text"
                  placeholder="Enter Full Name "
                  name="fullName"
                  className="form-control"
                  value={fullname}
                  onChange={(e) => setfullName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Age :</label>
                <input
                  type="number"
                  placeholder="Enter Age "
                  name="age"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(...age,e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label " style={{ marginRight: 7 }}>
                  Gender :
                </label>
                <input
                  type="radio"
                  value={gender}
                  name="gender"
                  style={{ marginRight: 7, marginLeft: 5 }}
                  onChange={(e) => setGender(...gender,e.target.value)}
                />
                Male
                <input
                  type="radio"
                  value={gender}
                  name="gender"
                  style={{ marginRight: 7, marginLeft: 5 }}
                  onChange={(e) => setGender(...gender,e.target.value)}
                />
                Female
                <input
                  type="radio"
                  value={gender}
                  name="gender"
                  style={{ marginRight: 7, marginLeft: 5 }}
                  onChange={(e) => setGender(...gender,e.target.value)}
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
                  onChange={(date) => setStartDate(moment(date).format())}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Qualification :</label>
                <input
                  type="text"
                  placeholder="Enter Qualification "
                  name="age"
                  className="form-control"
                  value={qual}
                  onChange={(e) => setQual(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Course Enrolled:</label>
                <select
                  className="form-control col-md-3"
                  onChange={(e)=>{setCourseEnrolled({...courseEnrolled,CourseEnrolled: e.target.value}) }}
        

                >
                  <option value={0}  >---Select Course---</option>
                  {courses.map((course) => (
                    <option value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Batch :</label>
                <select className="form-control col-md-3">
                  <option value={0}>---Select Batch---</option>
                  <option value={1}>Morning</option>
                  <option value={2}>Afternoon</option>
                  <option value={3}>Evening</option>
                </select>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Course Fees :</label>
                <input
                  type="number"
                  placeholder="Enter Course Fees "
                  name="fees"
                  className="form-control"
                  value={fees}
                  onChange={(e) => setFess(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Email :</label>
                <input
                  type="email"
                  placeholder="Enter Email "
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Residential Address :</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Residential Address"
                  name="resAdd"
                  className="form-control"
                  value={resAdd}
                  onChange={(e) => setResAdd(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Office Address :</label>
                <textarea
                  type="textarea"
                  placeholder="Enter Office Address"
                  name="ofcAdd"
                  className="form-control"
                  value={ofcAdd}
                  onChange={(e) => setOfcAdd(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Mobile Number :</label>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Phone Number :</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Date of Admission : </label>
                <input
                  className="ml-5"
                  type="date"
                  onChange={(date) => setStartDate(moment(date).format())}
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
  );
};

export default AddStudentComponent;

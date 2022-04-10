import React, { useState, useEffect } from "react";
import StudentService from "../Services/StudentService";
// import {useEffect} from 'react-router-dom';
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

function EditStudent() {
  const { id } = useParams();

  useEffect(() => {
    getStudentId(id);
    getCourses();
    
  }, []);

  const [student, setStudent] = useState({});
  const [file, setFile] = useState("");
  const [course, setCourse] = useState({});
  const [courses, setCourses] = useState([]);

  const [oldStudent,setOldStudent]=useState({});

  const getStudentId = (id) =>
    StudentService.getStudentById(id)
      .then((res) => {
          console.log(res.data);
          setOldStudent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  const getCourses = () => {
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
  };

  let formData = new FormData();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
  };

  const saveStudent = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    //setCourse({...course,id:e.target.value})
   
    console.log(student);
    const json = JSON.stringify(student);
    const blob = new Blob([json], {
      type: "application/json",
    });

    formData.append("stud", blob);

    formData.append("file", file);

    for (var value of formData.values()) {
      console.log(value);
    }

    fetch("http://localhost:8082/admin/students/update", {
      //mode: "no-cors",
      method: "PUT",

      body: formData,
    }).then(
      function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status === 401) {
          alert("Oops! ");
        }
      },
      function (e) {
        alert("Error submitting form!" + e);
      }
    );
    toast.success("Clicked", {
      position: "bottom-right",
      autoClose:600
    });
  };

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
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
  };

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
                    value={oldStudent.fullName}
                    onChange={(e) => {
                        setOldStudent({ ...student, fullName: e.target.value });
                    }}
                    
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Age :</label>
                  <input
                    type="number"
                    placeholder="Enter Age "
                    name="age"
                    className="form-control"
                    value={oldStudent.age}
                    onChange={(e) => {
                        setOldStudent({ ...student, age: e.target.value });
                    }}
                    
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
                    value={oldStudent.gender}
                    onChange={(e) => {
                        setOldStudent({ ...student, gender: e.target.value });
                    }}
                    
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    style={{ marginRight: 7, marginLeft: 5 }}
                    value={oldStudent.gender}
                    onChange={(e) => {
                        setOldStudent({ ...student, gender: e.target.value });
                    }}
                    
                  />
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value={oldStudent.gender}
                    onChange={(e) => {
                        setOldStudent({ ...student, gender: e.target.value });
                    }}
                    
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
                    value={oldStudent.dob}
                    onChange={(e) => {
                        setOldStudent({ ...student, dob: e.target.value });
                    }}
                  
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Qualification :</label>
                  <input
                    type="text"
                    placeholder="Enter Qualification "
                    name="qualification"
                    className="form-control"
                    value={oldStudent.qualification}
                    onChange={(e) => {
                        setOldStudent({ ...student, qualification: e.target.value });
                    }}
                   
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Course Enrolled:</label>
                  <select
                    className="form-control col-md-3"
                    value={oldStudent.courseEnrolled}
                    onChange={(e) => {
                        setOldStudent({
                        ...student,
                        courseEnrolled: e.target.value,
                      });
                    }}
                   
                  >
                    <option value={0}>---Select Course---</option>
                    {courses.map((course) => (
                      <option value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Batch :</label>
                  <select
                    className="form-control col-md-3"
                    value={oldStudent.batchtime}
                    onChange={(e) => {
                        setOldStudent({ ...student, batchtime: e.target.value });
                    }}
                    
                  >
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
                    onChange={(e) => {
                        setOldStudent({ ...student, amount: e.target.value });
                    }}
                    value={oldStudent.amount}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email :</label>
                  <input
                    type="email"
                    placeholder="Enter Email "
                    name="email"
                    className="form-control"
                    onChange={(e) => {
                        setOldStudent({ ...student, email: e.target.value });
                    }}
                    value={oldStudent.email}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Residential Address :</label>
                  <textarea
                    type="textarea"
                    placeholder="Enter Residential Address"
                    name="resAdd"
                    className="form-control"
                    onChange={(e) => {
                        setOldStudent({
                        ...student,
                        residentialAddress: e.target.value,
                      });
                    }}
                    value={oldStudent.residentialAddress}
                  ></textarea>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Office Address :</label>
                  <textarea
                    type="textarea"
                    placeholder="Enter Office Address"
                    name="ofcAdd"
                    className="form-control"
                    onChange={(e) => {
                        setOldStudent({ ...student, officeAddress: e.target.value });
                    }}
                    value={oldStudent.officeAddress}
                  ></textarea>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Mobile Number :</label>
                  <input
                    type="tel"
                    placeholder="Enter Mobile Number"
                    name="mobile"
                    className="form-control"
                    onChange={(e) => {
                        setOldStudent({ ...student, mobile: e.target.value });
                    }}
                    value={oldStudent.mobile}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Phone Number :</label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    name="phone"
                    className="form-control"
                    onChange={(e) => {
                        setOldStudent({ ...student, phone: e.target.value });
                    }}
                    value={oldStudent.phone}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Date of Admission : </label>
                  <input
                    className="ml-5"
                    type="date"
                    onChange={(e) => {
                        setOldStudent({ ...student, admissionDate: e.target.value });
                    }}
                    value={oldStudent.admissionDate}
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
  );
}

export default EditStudent;

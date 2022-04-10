import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import HeaderComponent from '../Navigationbar/HeaderComponent'
import swal from "sweetalert";
import FooterComponent from '../Navigationbar/FooterComponent'
import StudentService from "../Services/StudentService";

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    StudentService.getStudents()
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
        if (res.data) {
          toast.success("Student Data loaded ...", {
            position: "bottom-right",
            autoClose:600
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("No Data", {
          position: "bottom-right",
          autoClose:600
        });
      });
  };

  const deleteStudent = (id) => {
    console.log(id);
    StudentService.deleteStudentById(id)
      .then((response) => {
        getAllStudents();
        console.log("Student Data Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <HeaderComponent />
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="text-center">Students List</h3>
          <Link to="/admin/addStudent" className="btn btn-primary mb-2">
            Add New Student
          </Link>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Sr.No.</th>
                {/* <th>Name</th> */}
                <th>Course</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Qualification</th>
                <th>Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stud) => (
                <tr key={stud.regId}>
                  <td>{stud.regId}</td>
                  {/* <td>{stud.fullName}</td> */}
                  <td>{stud.courseEnrolled}</td>
                  <td>{stud.email}</td>
                  <td>{stud.mobile}</td>
                  <td>{stud.qualification}</td>
                  <td>
                    <img
                      src={stud.studentPhoto}
                      alt="Student"
                      className="studentImage"
                    ></img>
                  </td>
                  <td>
                    <Link
                      to={`/admin/editStudent/${stud.regId}`}
                      className="btn btn-info"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteStudent(stud.regId)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default ListStudentComponent;

import React from "react";
 import baseUrl from "../baseUrl";
// import Stud from './images/Student3.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";

//const imgPath="D:\\Shubham Rest Project\\springrest\\src\\main\\resources\\static\\Students\\";
// const signPath="D:\\Shubham Rest Project\\springrest\\target\\classes\\static\\Signature\\";

const imgPath = require.context('D:\\Shubham Rest Project\\springrest\\src\\main\\resources\\static\\Students\\', true);
const signPath = require.context('D:\\Shubham Rest Project\\springrest\\src\\main\\resources\\static\\Signature\\', true);

 //const path = baseUrl+"getStudents\";

const Student = (students,updateStudents) => {
    console.log(students);
  return (
    <div>
        <div className="row">
            <div className="col-md-1"></div>
      <div className="col-md-8">
          {/* <h3 className="text-center">Students List</h3> */}
        <table className="table table-bordered ">
    
          <tbody>
              <tr key={students.student.regId}>
                  <td>{students.student.admissionDate}</td>
                  <td>{students.student.age}</td>
                  <td>{students.student.courseEnrolled}</td>
                  <td>{students.student.dob}</td>
                  <td>{students.student.email}</td>
                  <td>{students.student.firstName+" "+students.student.lastName}</td>
                  <td>{students.student.gender}</td>
                  <td>{students.student.mobile}</td>
                  <td>{students.student.phone}</td>
                  <td>{students.student.qualification}</td>
                  {/* <td><img src={Stud} alt="Student" className=""/></td> */}
                  {/* <td><img src={signPath+students.student.studentSignature} alt="Student" className="yourCustomStyle"/></td> */}
                  {/* <td>{students.student.studentPhoto}</td> */}
                   <td><img src={imgPath+students.student.studentPhoto} alt="Student" className="yourCustomStyle"/></td>
                 <td><img src={signPath+students.student.studentSignature} alt="Student" className="yourCustomStyle"/></td>
              </tr>
          </tbody>

        </table>
      </div>
      </div>
    </div>
  );
};

export default Student;

import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import url from "../api/url";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import CourseDet from "./CourseDet";
import Video from "./images/bu.mp4";
import ReactPlayer from "react-player";
import Youtube from "./Youtube";
import Allbatches from "./Allbatches";

const MainCDetails = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 mb-5 mt-5">
          <center>
            <video width="720" height="350" controls muted autoPlay loop>
              <source src={Video} type="video/mp4" />
            </video>
          </center>
        </div>
      </div>
      <div className="row mb-3">
          <div className="col-md-12">
            <h4>About Course</h4>
            <p>
            The Post Graduate Diploma in Advanced Computing (PG-DAC) is the flagship programme of ACTS. The course is targeted towards engineers and IT professionals who wish to venture into the domain of advanced computing. The course aims to groom the students to enable them to work on current technology scenarios as well as prepare them to keep pace with the changing face of technology and the requirements of the growing IT industry. The course curriculum has been designed keeping in view the emerging trends in advanced computing as well as the contemporary and futuristic human resource requirements of the ICT industry. The entire course syllabus, course ware, teaching methodology and the course delivery have been derived from the rich research and development background of C-DAC. The depth and width of the course is unique in the industry covering a wide spectrum of requirements of the ICT industry. Running successfully for more than twenty eight years, PG-DAC course has yielded more than quarter million students, who are well positioned in the industry today
            </p>
          </div>
      </div>
      <div>
          <h4 className="text-center">Batch Schedule</h4>
      <Table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Course Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Batch</th>
            <th>Duration</th>
            <th>Timing</th>
            <th>Fees</th>
          </tr>
        </thead>
      </Table>
      <Allbatches />
      <div className="row mt-3">
      <Youtube />
      </div>
    </div>
    </div>
  );
};

export default MainCDetails;

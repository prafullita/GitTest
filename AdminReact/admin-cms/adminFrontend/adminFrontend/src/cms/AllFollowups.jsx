import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from "reactstrap";
import base_url from '../api/bootapi'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
// import  {useParams} from 'react-router-dom'
import { useCookies } from "react-cookie";
import HeaderComponent from '../Navigationbar/HeaderComponent';
import FooterComponent from '../Navigationbar/FooterComponent';

export const AllFollowups = (props) => {

  // const {adminId}= useParams();
  const [cookies, setCookie] = useCookies();

  const navigate = useNavigate();
  const getAllFollowups = (data) => {
    
    axios.get(`${base_url}/admin/followups/${cookies.user}/${data}/${"active"}`).then(
      (response) => {
        console.log(response);
        setFollowups(response.data);
        toast.success("followups successfully loaded!",{
          autoClose:600
        })
      },
      (error) => {
        console.log(error);
        toast.error("error 401 Unauthorized!")
        if(error.response.status==401,{
          autoClose:600
        })
        navigate("/");
      }
    );
  };

  useEffect(() => {
    getAllFollowups(date);
  }, []);

  var today = new Date();

  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  

  const [followups, setFollowups] = useState([]);
  // const updateStatus = (id) => {
  //   console.log(id);
  //   setFollowups(followups.filter((c) => c.id != id));
  // }
  const [startDate, setStartDate] = useState();
  

  const submitHandler = (e) => {
    getAllFollowups(startDate);
    e.preventDefault();
  }


  return (
    <>
    <HeaderComponent />
    <div className='bg-light'>
      <h1 className='text-center'>All Follow-ups</h1>
      <p className='text-center'>*Scheduled on  :{startDate == null ? date : startDate}</p>
      <Container>
        <Row><Col md={3}>
          <form onSubmit={submitHandler}>
            <input type="date" name="startDate" id="startDate" className="form-control mb-3" onChange={(e) => {
              setStartDate(e.target.value)
            }} defaultValue={startDate} />
            <button type="submit" className="btn btn-primary rounded-pill px-4 mb-3" >
              Submit
            </button>
          </form>
        </Col></Row>
      </Container>
      {
        followups.length > 0 ?
         
        <div className='container'>
    <h2 className=' text-center'>Followup List</h2>
    <table className='table table-bordered table-striped'>
      <thead>
      <tr>
        {/* <th>Followup Id</th> */}
        <th>Enquiry Id</th>
        <th>Previous followup</th>
        <th>Remarks</th>
        <th>Followups Done</th>
        <th>Update Status</th>
      </tr>  
      </thead>
      <tbody>
        {
          followups.map(
            followups => 
            <tr key={followups.followupId}>
            {/* <td>{followups.followupId}</td> */}
            <td>{followups.enquiryId}</td>
            <td>{followups.followupDate}</td>
            <td style={{wordWrap:'normal'}}>{followups.remarks}</td>
            <td>{followups.count}</td>
            <td>
              {/* <Link className='btn btn-info'  onClick={onclick} to={`addfollowup/${followups.followupId}`} >{status}</Link> */}
              <Link className='btn btn-info'  to={`/admin/addfollowup/${followups.adminId}/${followups.enquiryId}/${followups.followupId}`} >UPDATE</Link>
            </td>
            </tr>
          )
        }
      </tbody>
    </table>

    </div>
          
          : "no followups today"
      }

    </div>
    <FooterComponent />
</>
  )

}


{/* <Container style={{ backgroundColor: "#5f9ea0e0" }}>
<Row className="p-3">
  {followups.map((item, i) => <Followup key={i} followup={item} update={updateStatus} />)}
</Row>
</Container> */}
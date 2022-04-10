import React, { useEffect, useState} from "react";
import { Container, Row } from "reactstrap";
import axios from 'axios';
import base_url from "../api/bootapi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {useParams,useNavigate} from 'react-router-dom'
import HeaderComponent from "../Navigationbar/HeaderComponent";
import FooterComponent from "../Navigationbar/FooterComponent";

const AddFollowup = (props) => {

  // const {id}= useParams();
  const {adminId,enquiryId,followupId}= useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "follow Up";
    getFollowup(followupId);
  }, [])

   const getFollowup = (data) => {
     axios.get(`${base_url}/admin/followups/${data}`).then((response) => {
       console.log(response.data);
       setOlderfollowup(response.data);
       toast.success("details for older followup loaded successfully",{
         autoClose:600
       })
     }).catch(
     (error) => {
       console.log(error);
      //  toast.error("something went wrong")
     })
   }
  const [olderfollowup, setOlderfollowup] = useState(
    {
      // followupId: props.followupId,
      // enquiryId: props.enquiryId,
      // adminId: props.adminId,
      // remarks: props.remarks,
      // followupDate: props.followupDate,
      // count: props.count

    }
  )
  
  var todayDate = new Date().toISOString().slice(0, 10);

  const [nextfollowup, setNextfollowup] = useState(
    {
      // followupId: 0,
      // enquiryId: props.enquiryId || olderfollowup.enquiryId,
      // adminId: props.adminId,   
      followupId:followupId,                            // to be changed
      enquiryId: enquiryId,
      adminId: adminId,
      remarks: "remark not available!",
      followupDate:todayDate,
      count: 0,
      status:"active"
    }
  )
 

  const submitHandler = (e) => {
   
    console.log(nextfollowup);
    postfollowup(nextfollowup);
    e.preventDefault();
  }

  //posting data to server
  const postfollowup = (data) => {
    axios.post(`${base_url}/admin/addFollowup`, data).then(
      (response) => {
        console.log(response);
        console.log(data);
        console.log("success");
        toast.success("followup scheduled successfully",{
          autoClose:600
        })
        navigate(`/admin/allfollowups/${adminId}`)                                     //to be changed
        // setFollowup({});
      },
      (error) => {
        console.log(error);
        //console.log("error");
        toast.error("error 401 Unauthorized!",{
          autoClose:600
        });
        navigate("/");
      }
    )
  }

  return (
    <> 
    <HeaderComponent />   
    < Container>
      < Row>
        <div className="offset-md-3 col-md-6">
          <form onSubmit={submitHandler}>
            <p className="h4 text-center mb-4">Follow up</p>
            <label className="grey-text">
              {/* Follow Up Id */}
            </label>
            <input type="text" name="followupId" id="followupId" className="form-control"  readOnly hidden  required/>
            <br />
            <label className="grey-text">
              Enquiry Id
            </label>
            <input type="text" name="enquiryId" id="enquiryId" className="form-control" defaultValue={(enquiryId)?enquiryId:olderfollowup.enquiryId} required />
            <br />
            <label className="grey-text">
              Admin Id
            </label>
            <input type="text" name="adminId" id="adminId" className="form-control" defaultValue={(adminId)?adminId:olderfollowup.adminId} required onChange={(e) => {
              setNextfollowup({ ...nextfollowup, adminId: e.target.value })
            }}  />
            <br />
            <label className="grey-text">
              Remarks
            </label>
            <textarea name="remarks" id="remarks" className="form-control" maxLength={200} required onChange={(e) => {
              setNextfollowup({ ...nextfollowup, remarks: e.target.value })
            }} defaultValue={olderfollowup.remarks} />
            <br />
            <label className="grey-text">
              Follow Up Date
            </label>
            <input type="date" name="followupDate" id="followupDate" className="form-control" required onChange={(e) => {
              setNextfollowup({ ...nextfollowup, followupDate: e.target.value.toString() })
            }} defaultValue={olderfollowup.followupDate} />
            <br />
            <label className="grey-text">
              Follow Up Count
            </label>
            <select className="form-control" name="count" id="count" defaultValue={olderfollowup.count} required onChange={(e) => {
              setNextfollowup({ ...nextfollowup, count: e.target.value })
            }} >
              <option>{olderfollowup.count?olderfollowup.count:0}</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <br></br>
            <label className="grey-text">
              Status
            </label>
            <select className="form-control" name="status" id="status" defaultValue={olderfollowup.status} required onChange={(e) => {
              setNextfollowup({ ...nextfollowup, status: e.target.value })
            }} >
              <option>Active</option>
              <option>Close</option>
            </select>

            <div className="mt-4">
              <button type="submit" className="btn btn-outline-primary rounded-pill px-4 me-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </ Row>
    </ Container>
    <FooterComponent />
    </>

  );
};

export default AddFollowup;

//value={followup.followupId}
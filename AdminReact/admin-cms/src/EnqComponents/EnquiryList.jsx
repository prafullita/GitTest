import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import EnquiryService from '../Services/EnquiryService'
import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useCookies } from "react-cookie";
import HeaderComponent from '../Navigationbar/HeaderComponent'
import FooterComponent from '../Navigationbar/FooterComponent'


const EnquiryList = () => 
{
    const [enquiries, setEnquiries] = useState([]);
    const [cookies, setCookie] = useCookies();
    /*function demo(data)
    {
        const [dummy,setDummy]=useState(
            {
                enquiryId: enquiries.enquiryId,
                parentsName: enquiries.parentsName,
                firstName: enquiries.firstName,
                lastName: enquiries.lastName,
                address: enquiries.address,
                emailId: enquiries.emailId,
                mobile: enquiries.mobile,
                qualification:enquiries.qualification,
                query: enquiries.query,
                enquiryType: enquiries.enquiryType,
                adminId: 301
            }
        );
    }/*
    
    

    //const [enquiryId,setEnquiryId]=useState('')
    //const [parentsName,setParentsName]=useState('')
    //const [firstName,setFirstName]=useState('')
    //const [lastName,setLastName]=useState('')
    //const [emailId,setEmailId]=useState('')
    //const [mobile,setMobile]=useState('')
    //const [qualification,setQualification]=useState('')
    //const [query,setQuery]=useState('')
    //const [queryType,setQueryType]=useState('')
    //const [address,setAddress]=useState('')
    //const [adminId,setAdminId]=useState('')

    

    //const newEnquiries = ({enquiryId,parentsName,firstName,lastName,emailId,mobile,qualification,query,queryType,address,adminId});
    /*const test={
        "enquiryId": 7,
        "parentsName": "Ram",
        "firstName": "Drusti",
        "lastName": "patil",
        "address": "Alibaugh",
        "emailId": "xyz@gmail.com",
        "mobile": 9987654321,
        "qualification": "MCA",
        "query": "PG-DAC",
        "enquiryType": "mobile",
        "adminId": 0
    }*/

    const aid=cookies.user;

    useEffect(() => {
        EnquiryService.getAllEnquiries().then((response)=>{
            setEnquiries(response.data);
            
            
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
        
    }, [])

    /*function updateData(id)
    {
        axios.get(`${base_url}/enquiries/${id}`).then(
            (response)=>{
                setDummy(response.data)
                
               console.log(response.data);
               console.log(response.data.enquiryId); 
               //toast.success("courses has been loaded");
               //setEnquiries(response.data);
               //setEnquiryId(response.data.enquiryId)
               //console.log(enquiryId)
               const api=response.data.parentsName;
               console.log(api);
               //setFirstName(response.data.firstName)
               //setLastName(response.data.lastName)
               //setEmailId(response.data.emailId)
               //setMobile(response.data.mobile)
               //setQualification(response.data.qualification)
               //setQuery(response.data.query)
               //setQueryType(response.data.queryType) 
               //setAddress(response.data.address)
               //setAdminId(aid)
               
               postDataToServer(response.data.enquiryId,setDummy)
            },
            (error)=>{
                console.log(error);
                toast.error("Something went wrong 1");
            }
            
        )
        
    }*/

    function postDataToServer(id,data)
    {
        console.log(data);
        axios.put(`${base_url}/admin/enquiries/${id}/${aid}`,data).then((response) =>{
            console.log(response);
            toast.success("Course updated successfully",{
                position:"bottom-right",
                autoClose:600
            });
            //setEnquiries({});
        },
        (error)=>{
            console.log(error);
            toast.error("Something went wrong 2",{
                autoClose:600});
        })
    
    }
    
  
    return (
        <>
        <HeaderComponent />
    <div className='container'>
        <h1>Enquiry List</h1>
        <br/>
        <table className='table table-bordered table-striped'>
            <thead>
            <tr>
                <th>Enquiry No</th>   
                <th>Parents Name</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Mobile</th>
                <th>Qualification</th>
                <th>Query</th>
                <th>Query Type</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    enquiries.map(
                        (enquiry)=>(
                            
                            <tr key={enquiry.enquiryId}>
                                <td>{enquiry.enquiryId}</td>
                                <td>{enquiry.parentsName}</td>
                                <td>{enquiry.firstName}</td>
                                <td>{enquiry.lastName}</td>
                                <td>{enquiry.emailId}</td>
                                <td>{enquiry.mobile}</td>
                                <td>{enquiry.qualification}</td>
                                <td>{enquiry.query}</td>
                                <td>{enquiry.enquiryType}</td>
                                <td>
                                <Link  to={`/admin/addEnqfollowup/${aid}/${enquiry.enquiryId}` }>

                                    <Button className='btn btn-info' onClick={()=>postDataToServer(enquiry.enquiryId,enquiry)}>Add</Button>
                                </Link>
                                </td>
                            </tr>

                        )
                    )
                }
            </tbody>
        </table>
    </div>
    <FooterComponent />
    </>
  )
}

export default EnquiryList
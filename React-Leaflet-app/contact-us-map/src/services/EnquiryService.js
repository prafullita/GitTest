import axios from "axios";
import baseURL from "../components/baseUrl";

const headers = {
    "Content-Type": "application/json"
   
  }

class EnquiryService{

    addEnquiry(enq){
        return axios.post(baseURL+"enquiries",enq,{
            headers:headers
        })
    }
    
}

export default new EnquiryService();
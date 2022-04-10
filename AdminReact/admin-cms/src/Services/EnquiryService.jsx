import axios from "axios";

const url="http://localhost:8082/admin/enquiries";

class EnquiryService
{
    getAllEnquiries()
    {
        return axios.get(url); 
    }

}

export default new EnquiryService();

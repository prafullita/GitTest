import axios from "axios";


// const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
// }
const baseURL = "http://localhost:8082/";
class StudentService{
    

    getStudents(){
            return axios.get(baseURL+"admin/getStudents")
    }

    getCourses(){
        return axios.get(baseURL+"admin/courses")
    }

    addStudent(stud){
        return axios.post(baseURL+"admin/addStudent",stud)
    }

    getStudentById(id){
        return axios.get(baseURL+"admin/getStudents/"+id);
    }

    deleteStudentById(id){
        return axios.delete(baseURL+"admin/delstudent/"+id)
    }

    getAllEnquiries(){
        return axios.get(baseURL+"admin/enquiries");
    }

    updateStudent(stud){
        return axios.put(baseURL+"admin/students/update",stud);
    }
    
}

export default new StudentService();
package com.thecodeveal.app.controllers;


import java.util.List;

//import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.thecodeveal.app.entities.StudentRegistration;

import com.thecodeveal.app.helper.ImageUploadHelper;

import com.thecodeveal.app.services.StudentRegistrationServices;


@CrossOrigin("*")
@RestController
public class StudentRegistrationController {

	@Autowired
	private StudentRegistrationServices studentRegistrationServices;

	@Autowired
	private ImageUploadHelper imageUploadHelper;
	
	// get all students
	@GetMapping("/admin/getStudents")
	public List<StudentRegistration> getStudentRegistration() {
		
		return this.studentRegistrationServices.getStudentRegistration();

	}

	// get student by Id
	@GetMapping("/admin/getStudents/{RegId}")
	public StudentRegistration getStudentRegistration(@PathVariable String RegId) {
		return this.studentRegistrationServices.getStudentRegistration(Integer.parseInt(RegId));
	}

	//@PostMapping("/addStudent")
	@RequestMapping(path = "/admin/addStudent", method =RequestMethod.POST , consumes = { "multipart/form-data" })
	public StudentRegistration addStudentRegistration (@RequestPart StudentRegistration stud , @RequestPart MultipartFile file)
	{
		System.out.println(file.getContentType());
		try {
			if (file.isEmpty()) {
				System.out.println("File is Empty");
			} /*else if (!file.getContentType().equals("image/jpeg") || !file.getContentType().equals("image/png")) {
				//System.out.println("Only JPEG/PNG content types are allowed in student photo");
			} */else {
				System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/admin/Students/").path(file.getOriginalFilename()).toUriString());
				imageUploadHelper.uploadFile(file);		
				
				stud.setStudentPhoto(ServletUriComponentsBuilder.fromCurrentContextPath().path("/admin/Students/").path(file.getOriginalFilename()).toUriString());
			}
		} catch (Exception ee) {
			System.out.println("File Exception " + ee.getMessage());
		}

	return this.studentRegistrationServices.addStudentRegistration(stud,file);
	}
	
	
	// Update Student Data
	@PutMapping("/admin/students/update")
	public StudentRegistration updateCourse(@RequestPart StudentRegistration stud , @RequestPart MultipartFile file) {
		return this.studentRegistrationServices.updateStudentRegistration(stud);
	}

	// Delete student
	@DeleteMapping("/admin/delstudent/{RegId}")
	public ResponseEntity<HttpStatus> deleteStudentRegistration(@PathVariable String RegId) {
		try {
			this.studentRegistrationServices.deleteStudentRegistration(Integer.parseInt(RegId));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

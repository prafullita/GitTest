package com.springrest.springrest.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

//import org.springframework.stereotype.Service;

import com.springrest.springrest.entities.StudentRegistration;


public interface StudentRegistrationServices {
	
	public List<StudentRegistration> getStudentRegistration();
	public StudentRegistration getStudentRegistration(int RegId);
	//public StudentRegistration addStudentRegistration(StudentRegistration stud,MultipartFile file,MultipartFile sigfile);
	public StudentRegistration addStudentRegistration(StudentRegistration stud,MultipartFile file);

	public StudentRegistration updateStudentRegistration(StudentRegistration stud);
	public void deleteStudentRegistration(int RegId);
	

	
}

package com.thecodeveal.app.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.thecodeveal.app.entities.StudentRegistration;
import com.thecodeveal.app.repository.StudentRegistrationRepository;



@Service
public class StudentRegistrationServicesImp implements StudentRegistrationServices{

	@Autowired
	private StudentRegistrationRepository studentRegistrationRepo;
	 
	@Override
	public List<StudentRegistration> getStudentRegistration() {
		
		return studentRegistrationRepo.findAll();
	}

	@Override
	public StudentRegistration getStudentRegistration(int RegId) {
		
		return studentRegistrationRepo.findById(RegId).get();
	}

	@Override
	public StudentRegistration addStudentRegistration(StudentRegistration stud,MultipartFile file)
	{	
		studentRegistrationRepo.save(stud);
		return stud;
	}

	@Override
	public StudentRegistration updateStudentRegistration(StudentRegistration stud) {
		
		studentRegistrationRepo.save(stud);
		return stud;
	}

	@Override
	public void deleteStudentRegistration(int RegId) {
		StudentRegistration entity = studentRegistrationRepo.findById(RegId).get();
		studentRegistrationRepo.delete(entity);
		
	}

	
}



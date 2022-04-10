package com.springrest.springrest.services;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.springrest.springrest.dao.StudentRegistrationRepository;
import com.springrest.springrest.entities.StudentRegistration;

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
		
		return studentRegistrationRepo.getById(RegId);
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
		StudentRegistration entity = studentRegistrationRepo.getById(RegId);
		studentRegistrationRepo.delete(entity);
		
	}

	
}


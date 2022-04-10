package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springrest.springrest.entities.StudentRegistration;


@Repository
public interface StudentRegistrationRepository extends JpaRepository<StudentRegistration,Integer> {
	
}


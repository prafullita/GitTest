package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseDetails;

public interface CourseDao extends JpaRepository<Course, Long> {

	
}

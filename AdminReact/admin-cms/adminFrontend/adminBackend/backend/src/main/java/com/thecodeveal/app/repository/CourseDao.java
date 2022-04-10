package com.thecodeveal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thecodeveal.app.entities.Course;
import com.thecodeveal.app.entities.CourseDetails;

public interface CourseDao extends JpaRepository<Course, Long> {

	
}

package com.thecodeveal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thecodeveal.app.entities.CourseDetails;

public interface CourseDaos extends JpaRepository<CourseDetails,Long>
{
	
}

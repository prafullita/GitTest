package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.springrest.entities.CourseDetails;

public interface CourseDaos extends JpaRepository<CourseDetails,Long>
{
	
}

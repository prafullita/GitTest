package com.springrest.springrest.controller;


import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseDetails;
import com.springrest.springrest.services.CourseServices;

@CrossOrigin("*")
@RestController
public class MyController {
	
	//Object creation
	@Autowired
	private CourseServices courseService;
	
	
	@GetMapping("/courses")
	public List<Course> getCourse()
	{
		return this.courseService.getCourses();
		
	}
	
	
	
	@GetMapping("/courses/{courseId}")
	public Course getCourses(@PathVariable String courseId)
	{
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	
	@PostMapping("/courses/add")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/courses/update")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseService.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity <HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try
		{
			this.courseService.deleteCourse(Long.parseLong(courseId));
			return new ResponseEntity<> (HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<> (HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/course")
	public List<CourseDetails> getCourses()
	{
		return this.courseService.getCourse();
		
	}
	@DeleteMapping("/course/{courseDetailid}")
	public ResponseEntity <HttpStatus> deletebatch(@PathVariable String courseDetailid)
	{
		try
		{
			this.courseService.deletebatch(Long.parseLong(courseDetailid));
			return new ResponseEntity<> (HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<> (HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@GetMapping("/course/{courseDetailid}")
	public CourseDetails getbatch(@PathVariable String courseDetailid)
	{
		return this.courseService.getbatch(Long.parseLong(courseDetailid));
	}
	
	
	@PostMapping("/course/add")
	public CourseDetails addbatch(@RequestBody CourseDetails coursess)
	{
		return this.courseService.addbatch(coursess);
	}
	
	@PutMapping("/course/update")
	public CourseDetails updatebatch(@RequestBody CourseDetails coursess)
	{
		return this.courseService.updatebatch(coursess);
	}
}

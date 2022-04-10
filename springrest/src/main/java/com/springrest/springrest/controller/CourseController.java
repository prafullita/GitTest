//package com.springrest.springrest.controller;
//
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.springrest.springrest.entities.Course;
//import com.springrest.springrest.services.CourseServices;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//public class CourseController {
//	
//	//Object creation
//	@Autowired
//	private CourseServices courseService;
//	
//	
//	@GetMapping("/courses")
//	public List<Course> getCourse()
//	{
//		return this.courseService.getCourses();
//		
//	}
//	
//	@GetMapping("/courses/{courseId}")
//	public Course getCourses(@PathVariable String courseId)
//	{
//		return this.courseService.getCourse(Long.parseLong(courseId));
//	}
//	
//	
//	@PostMapping("/courses/add")
//	public Course addCourse(@RequestBody Course course)
//	{
//		return this.courseService.addCourse(course);
//	}
//	
//	@PutMapping("/courses/update")
//	public Course updateCourse(@RequestBody Course course)
//	{
//		return this.courseService.updateCourse(course);
//	}
//	
//	@DeleteMapping("/courses/{courseId}")
//	public ResponseEntity <HttpStatus> deleteCourse(@PathVariable String courseId)
//	{
//		try
//		{
//			this.courseService.deleteCourse(Long.parseLong(courseId));
//			return new ResponseEntity<> (HttpStatus.OK);
//		}
//		catch(Exception e)
//		{
//			return new ResponseEntity<> (HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//}

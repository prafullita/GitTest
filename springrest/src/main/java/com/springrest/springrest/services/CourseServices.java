package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseDetails;

public interface CourseServices {
	
		public List<Course> getCourses();
		public Course getCourse(long courseId);
		public Course addCourse(Course course);
		public Course updateCourse(Course course);
		public void deleteCourse(long parseLong);
		public List<CourseDetails> getCourse();
		public CourseDetails getbatch(long courseDetailid);
		public CourseDetails addbatch(CourseDetails coursess);
		public CourseDetails updatebatch(CourseDetails coursess);
		public void deletebatch(long parseLong);
}

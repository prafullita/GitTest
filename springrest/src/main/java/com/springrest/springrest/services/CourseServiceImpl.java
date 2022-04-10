package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.dao.CourseDaos;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.CourseDetails;

@Service
public class CourseServiceImpl implements CourseServices {

	@Autowired
	private CourseDao courseDao;
	//List<Course> list;
	@Autowired
	private CourseDaos courseDaos;
	
	public CourseServiceImpl() 
	{
//		list=new ArrayList<>();
//		list.add(new Course(145,"Java","My Fav Language"));
//		list.add(new Course(4343,"Spring","Fantastic language" ));
	}

	@Override
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return courseDao.findAll();
	}
	

	@Override
	public Course getCourse(long courseId) {
		
//		Course c=null;
//		for(Course course:list)
//		{
//			if(course.getId()==courseId)
//			{
//				c=course;
//				break;
//			}
//		}
		return courseDao.findById(courseId).get();
	}

	@Override
	public Course addCourse(Course course) {
		
//		list.add(course);
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
	}
	
	@Override
	public List<CourseDetails> getCourse()
	{
		return courseDaos.findAll();
	}
	
	@Override
	public CourseDetails getbatch(long courseDetailid) {
		
		return courseDaos.findById(courseDetailid).get();
	}

	@Override
	public CourseDetails addbatch(CourseDetails coursess) {
		
//		list.add(course);
		courseDaos.save(coursess);
		return coursess;
	}

	@Override
	public CourseDetails updatebatch(CourseDetails coursess) {
		// TODO Auto-generated method stub
		courseDaos.save(coursess);
		return coursess;
	}

	@Override
	public void deletebatch(long parseLong) {
		
		CourseDetails entity = courseDaos.findById(parseLong).get();
		System.out.println(entity);
		courseDaos.delete(entity);
	}

}

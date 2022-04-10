package com.springrest.springrest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.springrest.springrest.entities.Modules;

@Repository
public interface ModulesRepository extends JpaRepository<Modules,Integer> {
	
	@Query("select m from Modules m WHERE m.courseId=:a ")
	public List<Modules>getModulesByCourse(@Param("a") int courseId);

}

package com.springrest.springrest.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.springrest.springrest.entities.Modules;

public interface ModulesServiceInterface {

	List<Modules>getAllModules();
	Modules getModule(int moduleId);
	public List<Modules>getModulesByCourse(@Param("a") int courseId);
	boolean addModules(Modules module);
	boolean updateModule(Modules module);
	boolean deleteModule(int moduleIId);
	
}

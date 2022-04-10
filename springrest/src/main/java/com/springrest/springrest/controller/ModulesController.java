package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Modules;
import com.springrest.springrest.services.ModulesServiceInterface;

@RestController
@CrossOrigin("*")
public class ModulesController {

	@Autowired
	ModulesServiceInterface modulesServiceInterface;
	
	@GetMapping("/Allmodules")
	List<Modules> getAllModules()
	{
		return modulesServiceInterface.getAllModules();
	}
	
	@GetMapping("/Allmodules/{courseId}")
	public List<Modules>getModulesByCourse(@PathVariable @Param("a") int courseId)
	{
		return modulesServiceInterface.getModulesByCourse(courseId);
	}
	
	
	@GetMapping("/Module/{moduleId}")
	Modules getModules(@PathVariable int moduleId)
	{
		return modulesServiceInterface.getModule(moduleId);		
	}
	
	@PostMapping("/addModule")
	boolean addModules(@RequestBody Modules module)
	{
		return modulesServiceInterface.addModules(module);
	}
	
	@PutMapping("/updateModule")
	boolean updateModule(@RequestBody Modules module)
	{
		return modulesServiceInterface.updateModule(module);
	}
	
	@DeleteMapping("/deleteModule/{moduleId}")
	boolean deleteModule(@PathVariable int moduleId)
	{
		return modulesServiceInterface.deleteModule(moduleId);
	}
}

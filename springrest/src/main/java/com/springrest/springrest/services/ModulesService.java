package com.springrest.springrest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.springrest.springrest.entities.Modules;

import com.springrest.springrest.dao.ModulesRepository;

@Service
public class ModulesService implements ModulesServiceInterface{

	@Autowired
	ModulesRepository modulesRepository;
	
	Modules module = new Modules(0,0,"-","-","-");
	@Override
	public List<Modules> getAllModules() {
		return modulesRepository.findAll();
	}

	@Override
	public Modules getModule(int moduleId) {
		Optional<Modules> result = modulesRepository.findById(moduleId);
		if(result.isPresent())
			module=result.get();
		return module;
	}
	
	public List<Modules>getModulesByCourse(@Param("a") int courseId)
	{
		return modulesRepository.getModulesByCourse(courseId);
	}

	@Override
	public boolean addModules(Modules module) {
		boolean isAdded=false;
		try {
			modulesRepository.save(module);
			isAdded=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isAdded;
	}

	@Override
	public boolean updateModule(Modules module) {
		boolean isUpdated=false;
		try {
			modulesRepository.save(module);
			isUpdated=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isUpdated;
	}

	@Override
	public boolean deleteModule(int moduleId) {
		boolean isDeleted=false;
		try {
			modulesRepository.deleteById(moduleId);
			isDeleted=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isDeleted;
	}
	

}

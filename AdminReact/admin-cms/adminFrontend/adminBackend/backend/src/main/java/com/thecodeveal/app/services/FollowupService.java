package com.thecodeveal.app.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.thecodeveal.app.entities.Followup;
import com.thecodeveal.app.repository.FollowupRepository;

@Service
public class FollowupService implements FollowupServiceinterface{
	
	@Autowired
	FollowupRepository followupRepository;
	
	 Followup followup = new Followup();
	
	@Override
	public List<Followup> getAllFollowup() {
		return followupRepository.findAll();
	}

	@Override
	public Followup getFollowup(int followupId) {
		Optional<Followup> result = followupRepository.findById(followupId);
		if(result.isPresent())
			followup=result.get();
		return followup;
	}

	@Override
	public boolean addFollowup(Followup followup) {
		boolean isAdded=false;
		try {
			followupRepository.save(followup);
			isAdded=true;
			System.out.println(followup);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isAdded;
	}

	@Override
	public boolean deleteFollowup(int followupId) {
		boolean isDeleted=false;
		try {
			followupRepository.deleteById(followupId);
			isDeleted=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isDeleted;
	}
		
	@Override
	public boolean updateFollowup(Followup followup) {
		boolean isUpdated=false;
		try {
			followupRepository.save(followup);
			isUpdated=true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return isUpdated;
	}
	
	public List<Followup>getFollowupByAdmin(@Param("a") int adminId, @Param("d") Date followupDate, @Param("s") String status)
	{
		return followupRepository.getFollowupByAdmin(adminId, followupDate,status);
		
	}

}

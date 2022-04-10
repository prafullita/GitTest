package com.thecodeveal.app.services;

import java.sql.Date;
import java.util.List;

import org.springframework.data.repository.query.Param;

import com.thecodeveal.app.entities.Followup;

public interface FollowupServiceinterface {
	
	List<Followup> getAllFollowup();
	Followup getFollowup(int followupId);
	boolean addFollowup(Followup followup);
	boolean deleteFollowup(int enquiryId);
	boolean updateFollowup(Followup followup);
	public List<Followup>getFollowupByAdmin(@Param("a") int adminId, @Param("d") Date followupDate,  @Param("s") String status);	
	

}

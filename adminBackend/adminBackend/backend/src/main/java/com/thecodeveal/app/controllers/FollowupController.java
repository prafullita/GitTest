package com.thecodeveal.app.controllers;

import java.sql.Date;
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

import com.thecodeveal.app.entities.Followup;
import com.thecodeveal.app.services.FollowupServiceinterface;


@RestController
@CrossOrigin("*")
public class FollowupController {
	
	@Autowired
	FollowupServiceinterface followupServiceinterface;

	@GetMapping("/admin/followups")
	List<Followup> getAllFollowup()
	{
		return followupServiceinterface.getAllFollowup();
	}
	
	@GetMapping("/admin/followups/{adminId}/{followupDate}/{status}")
	public List<Followup>getFollowupByAdmin(@PathVariable @Param("a") int adminId,@PathVariable @Param("d") Date followupDate, @PathVariable  @Param("s") String status)
	{
		return followupServiceinterface.getFollowupByAdmin(adminId, followupDate, status);
		
	}
	
	@GetMapping("/admin/followups/{followupId}")
	Followup getFollowup(@PathVariable int followupId)
	{
		return followupServiceinterface.getFollowup(followupId);
	}
	
	@PostMapping("/admin/addFollowup")
	boolean addFollowup(@RequestBody Followup followup)
	{
		return followupServiceinterface.addFollowup(followup);
	}
	
	@DeleteMapping("/admin/deleteFollowup/{enquiryId}")
	boolean deleteFollowup(@PathVariable int enquiryId)
	{
		return followupServiceinterface.deleteFollowup(enquiryId);	
	}
	
	@PutMapping("/admin/updateFollowup")
	boolean updateFollowup(@RequestBody Followup followup)
	{
		return followupServiceinterface.updateFollowup(followup); 
	}
}

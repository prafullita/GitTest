package com.thecodeveal.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.thecodeveal.app.entities.Enquiry;
import com.thecodeveal.app.services.EnquiryService;


@CrossOrigin("*")
@RestController
public class MyController {
	
	@Autowired
	private EnquiryService enquiryService;
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to Smoke Studioz..";
	}
	
	@GetMapping("/admin/enquiries")
	public List<Enquiry> findByAdminId()
	{
		
		return this.enquiryService.findByAdminId(0);
	}
	
	@PostMapping(path="/admin/enquiries",consumes="application/json")
	public Enquiry addEnquiry(@RequestBody Enquiry enquiry)
	{
		return this.enquiryService.addEnquiry(enquiry);
	}
	
	@PutMapping("/admin/enquiries/v1")
	public Enquiry updateEnquiry(@RequestBody Enquiry enquiry)
	{
		return this.enquiryService.updateEnquiry(enquiry);
	}
	
	@PutMapping("/admin/enquiries/{enquiryId}/{aid}")
	public Enquiry update(@PathVariable int enquiryId,@RequestBody Enquiry enquiry,@PathVariable int aid)
	{
		return this.enquiryService.update(enquiryId,enquiry,aid);
	}
	
	@GetMapping("/admin/enquiries/{enquiryId}")
	public Enquiry getEnquiryById(@PathVariable int enquiryId)
	{
		return this.enquiryService.getEnquiryById(enquiryId);
	}
}

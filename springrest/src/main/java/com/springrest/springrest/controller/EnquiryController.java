package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Enquiry;
import com.springrest.springrest.services.EnquiryService;

@CrossOrigin("*")
@RestController
public class EnquiryController {
	
	@Autowired
	private EnquiryService enquiryService;
	
	@GetMapping("/home")
	public String home()
	{
		return "Welcome to Smoke Studioz..";
	}
	
	@GetMapping("/enquiries")
	public List<Enquiry> getEnquiries()
	{
		return this.enquiryService.getEnquiries();
	}
	
	@PostMapping(path="/enquiries",consumes="application/json")
	public Enquiry addEnquiry(@RequestBody Enquiry enquiry)
	{
		return this.enquiryService.addEnquiry(enquiry);
	}
}
package com.thecodeveal.app.services;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.thecodeveal.app.entities.Enquiry;

public interface EnquiryService {

	public Enquiry addEnquiry(Enquiry enquiry);
	

	public List<Enquiry> findByAdminId(@Param("a") int adminId);
	
	public Enquiry updateEnquiry(Enquiry enquiry);
	
	public Enquiry getEnquiryById(int enquiryId);
	
	public Enquiry update(int enquiryId,Enquiry enquiry,int aid);
}

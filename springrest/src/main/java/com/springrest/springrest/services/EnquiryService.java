package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.Enquiry;


public interface EnquiryService {

	public Enquiry addEnquiry(Enquiry enquiry);
	
	public List<Enquiry> getEnquiries();
}

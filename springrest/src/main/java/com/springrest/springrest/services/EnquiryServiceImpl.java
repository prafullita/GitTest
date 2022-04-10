package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.EnquiryDao;
import com.springrest.springrest.entities.Enquiry;


@Service
public class EnquiryServiceImpl implements EnquiryService {
	
	@Autowired
	private EnquiryDao enquiryDao;
	
	
	
	public EnquiryServiceImpl() {
		super();
		
	}
	
	@Override
	public List<Enquiry> getEnquiries() {
		
		return enquiryDao.findAll() ;
	}

	@Override
	public Enquiry addEnquiry(Enquiry enquiry) 
	{
		enquiryDao.save(enquiry);
		return enquiry;
	}

}
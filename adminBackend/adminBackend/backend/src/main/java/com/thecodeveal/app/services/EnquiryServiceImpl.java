package com.thecodeveal.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import com.thecodeveal.app.entities.Enquiry;
import com.thecodeveal.app.repository.EnquiryDao;



@Service
public class EnquiryServiceImpl implements EnquiryService {
	
	@Autowired
	private EnquiryDao enquiryDao;
	
	
	
	public EnquiryServiceImpl() {
		super();
		
	}
	
	@Override
	public List<Enquiry> findByAdminId(@Param("a") int adminId) {
		
		return enquiryDao.findByAdminId(adminId) ;
	}

	@Override
	public Enquiry addEnquiry(Enquiry enquiry) 
	{
		enquiryDao.save(enquiry);
		return enquiry;
	}

	@Override
	public Enquiry updateEnquiry(Enquiry enquiry) 
	{
		enquiryDao.save(enquiry);
		return enquiry;
	}

	@Override
	public Enquiry getEnquiryById(int enquiryId) 
	{
		
		return enquiryDao.findById(enquiryId).get();
	}

	@Override
	public Enquiry update(int enquiryId, Enquiry enquiry,int aid) 
	{
		Enquiry eq=enquiryDao.findById(enquiryId).get();
		eq.setAdminId(aid);
		enquiryDao.save(eq);
		return eq;
		
	}
	
	

}

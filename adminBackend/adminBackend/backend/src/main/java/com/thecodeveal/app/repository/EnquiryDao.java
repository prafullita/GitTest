package com.thecodeveal.app.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.thecodeveal.app.entities.Enquiry;

public interface EnquiryDao extends JpaRepository<Enquiry,Integer>
{
	@Query("select f from Enquiry f WHERE f.adminId=:a")
	public List<Enquiry> findByAdminId(@Param("a") int adminId); 
}

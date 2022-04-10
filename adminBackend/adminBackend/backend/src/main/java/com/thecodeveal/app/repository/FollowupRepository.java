package com.thecodeveal.app.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.thecodeveal.app.entities.Followup;

@Repository
public interface FollowupRepository extends JpaRepository<Followup,Integer> {

	@Query("select f from Followup f WHERE f.adminId=:a and f.followupDate=:d and f.status=:s")
	public List<Followup>getFollowupByAdmin(@Param("a") int adminId, @Param("d") Date followupDate, @Param("s") String status);
}

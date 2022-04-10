package com.thecodeveal.app.entities;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Followup {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int followupId;
//	@ManyToOne()
//	@JoinColumn(name="enquiry_id", referencedColumnName = "enquiryId", insertable = false, updatable = false) 
//	private Enquiry enquiryId;
	private int enquiryId;
	private int adminId;
	private String remarks;
	private Date followupDate;
	private int count;
	private String status; 
	
	public Followup() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Followup(int followupId, int enquiryId, int adminId, String remarks, Date followupDate, int count,
			String status) {
		super();
		this.followupId = followupId;
		this.enquiryId = enquiryId;
		this.adminId = adminId;
		this.remarks = remarks;
		this.followupDate = followupDate;
		this.count = count;
		this.status = status;
	}

	public int getFollowupId() {
		return followupId;
	}

	public void setFollowupId(int followupId) {
		this.followupId = followupId;
	}

	public int getEnquiryId() {
		return enquiryId;
	}

	public void setEnquiryId(int enquiryId) {
		this.enquiryId = enquiryId;
	}

	public int getAdminId() {
		return adminId;
	}

	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public Date getFollowupDate() {
		return followupDate;
	}

	public void setFollowupDate(Date followupDate) {
		this.followupDate = followupDate;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Followup [followupId=" + followupId + ", enquiryId=" + enquiryId + ", adminId=" + adminId + ", remarks="
				+ remarks + ", followupDate=" + followupDate + ", count=" + count + ", status=" + status + "]";
	}

	
	
}

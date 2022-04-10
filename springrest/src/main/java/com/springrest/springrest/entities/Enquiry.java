package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tbl_enquiry")
public class Enquiry {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int enquiryId;
	private String parentsName;
	private String firstName;
	private String lastName;
	private String address;
	private String emailId;
	private long mobile;
	private String qualification;
	private String query;
	private String enquiryType="self";
	private final int adminId=0;
	
	public Enquiry() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Enquiry(int enquiryId, String parentsName, String firstName, String lastName, String address, String emailId,
			long mobile, String qualification, String query, String enquiryType) {
		super();
		this.enquiryId = enquiryId;
		this.parentsName = parentsName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.emailId = emailId;
		this.mobile = mobile;
		this.qualification = qualification;
		this.query = query;
		this.enquiryType = enquiryType;
	}

	public int getEnquiryId() {
		return enquiryId;
	}

	public void setEnquiryId(int enquiryId) {
		this.enquiryId = enquiryId;
	}

	public String getParentsName() {
		return parentsName;
	}

	public void setParentsName(String parentsName) {
		this.parentsName = parentsName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getQuery() {
		return query;
	}

	public void setQuery(String query) {
		this.query = query;
	}

	public String getEnquiryType() {
		return enquiryType;
	}

	public void setEnquiryType(String enquiryType) {
		this.enquiryType = enquiryType;
	}

	public int getAdminId() {
		return adminId;
	}

	@Override
	public String toString() {
		return "Enquiry [enquiryId=" + enquiryId + ", parentsName=" + parentsName + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", address=" + address + ", emailId=" + emailId + ", mobile=" + mobile
				+ ", qualification=" + qualification + ", query=" + query + ", enquiryType=" + enquiryType
				+ ", adminId=" + adminId + ", getEnquiryId()=" + getEnquiryId() + ", getParentsName()="
				+ getParentsName() + ", getFirstName()=" + getFirstName() + ", getLastName()=" + getLastName()
				+ ", getAddress()=" + getAddress() + ", getEmailId()=" + getEmailId() + ", getMobile()=" + getMobile()
				+ ", getQualification()=" + getQualification() + ", getQuery()=" + getQuery() + ", getEnquiryType()="
				+ getEnquiryType() + ", getAdminId()=" + getAdminId() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
}
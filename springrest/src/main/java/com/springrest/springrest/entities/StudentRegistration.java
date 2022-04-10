package com.springrest.springrest.entities;

import java.math.BigDecimal;
import java.util.Date;
//import java.sql.Time;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tbl_studentRegistration")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class StudentRegistration {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "studentid", unique = true, nullable = false)
	private int RegId;
	@Column(name = "fullname")
	private String fullName;

//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
//	// @Temporal(TemporalType.DATE)
	@Column(name = "dob")
	private Date DOB;
	@Column(name = "age")
	private int Age;

	private String Gender;
	private String studentPhoto;

	@Column(name = "ResidentialAddress", length = 50)
	private String ResidentialAddress;
	private String OfficeAddress;
	private String Phone;

	@Column(name = "Mobile",  length = 50)
	private String Mobile;
	@Column(name = "Email", length = 50)
	private String Email;
	private String Qualification;

	@Column(name = "CourseEnrolled")
	private String CourseEnrolled;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	// @Temporal(TemporalType.DATE)
	private Date StartingFrom;
	
	private String Batchtime;

	private String Cheque_DD_OTR_No;

	// @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	// @Temporal(TemporalType.DATE)
	private Date AdmissionDate;

	private BigDecimal Amount;

	public StudentRegistration(int regId, String FullName, Date dOB, String gender, String studentPhoto,
			String residentialAddress, String officeAddress, String phone, String mobile, String email,
			String qualification, String courseEnrolled, Date startingFrom, String batchtime, String cheque_DD_OTR_No,
			Date admissionDate, BigDecimal amount) {
		super();
		RegId = regId;
		this.fullName = FullName;
		DOB = dOB;
		Gender = gender;
		this.studentPhoto = studentPhoto;
		ResidentialAddress = residentialAddress;
		OfficeAddress = officeAddress;
		Phone = phone;
		Mobile = mobile;
		Email = email;
		Qualification = qualification;
		courseEnrolled = courseEnrolled;
		StartingFrom = startingFrom;
		Batchtime = batchtime;
		Cheque_DD_OTR_No = cheque_DD_OTR_No;
		AdmissionDate = admissionDate;

		Amount = amount;

	}

	public StudentRegistration() {
		super();
	}

	public int getRegId() {
		return RegId;
	}

	public void setRegId(int regId) {
		RegId = regId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFirstName(String fullname) {
		fullname = fullName;
	}

	public Date getDOB() {
		return DOB;
	}

	public void setDOB(Date dOB) {
		DOB = dOB;
	}

	public String getGender() {
		return Gender;
	}

	public void setGender(String gender) {
		Gender = gender;
	}

	public String getStudentPhoto() {
		return studentPhoto;
	}

	public void setStudentPhoto(String studentPhoto) {
		this.studentPhoto = studentPhoto;
	}

	public String getResidentialAddress() {
		return ResidentialAddress;
	}

	public void setResidentialAddress(String residentialAddress) {
		ResidentialAddress = residentialAddress;
	}

	public String getOfficeAddress() {
		return OfficeAddress;
	}

	public void setOfficeAddress(String officeAddress) {
		OfficeAddress = officeAddress;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String phone) {
		Phone = phone;
	}

	public String getMobile() {
		return Mobile;
	}

	public void setMobile(String mobile) {
		Mobile = mobile;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public String getQualification() {
		return Qualification;
	}

	public void setQualification(String qualification) {
		Qualification = qualification;
	}

	public String getCourseEnrolled() {
		return CourseEnrolled;
	}

	public void setCourseEnrolled(String courseEnrolled) {
		this.CourseEnrolled = courseEnrolled;
	}

	public Date getStartingFrom() {
		return StartingFrom;
	}

	public void setStartingFrom(Date startingFrom) {
		StartingFrom = startingFrom;
	}

	public String getBatchtime() {
		return Batchtime;
	}

	public void setBatchtime(String batchtime) {
		Batchtime = batchtime;
	}

	public String getCheque_DD_OTR_No() {
		return Cheque_DD_OTR_No;
	}

	public void setCheque_DD_OTR_No(String cheque_DD_OTR_No) {
		Cheque_DD_OTR_No = cheque_DD_OTR_No;
	}

	public Date getAdmissionDate() {
		return AdmissionDate;
	}

	public void setAdmissionDate(Date admissionDate) {
		AdmissionDate = admissionDate;
	}

	public BigDecimal getAmount() {
		return Amount;
	}

	public void setAmount(BigDecimal amount) {
		Amount = amount;
	}

	public int getAge() {
		return Age;
	}

	public void setAge(int age) {
		Age = age;
	}

	@Override
	public String toString() {
		return "StudentRegistration [RegId=" + RegId + ", FullName=" + fullName + ", DOB=" + DOB + ", Age=" + Age
				+ ", Gender=" + Gender + ", studentPhoto=" + studentPhoto + ", ResidentialAddress=" + ResidentialAddress
				+ ", OfficeAddress=" + OfficeAddress + ", Phone=" + Phone + ", Mobile=" + Mobile + ", Email=" + Email
				+ ", Qualification=" + Qualification + ", courseEnrolled=" + CourseEnrolled + ", StartingFrom="
				+ StartingFrom + ", Batchtime=" + Batchtime + ", Cheque_DD_OTR_No=" + Cheque_DD_OTR_No
				+ ", AdmissionDate=" + AdmissionDate + ", Amount=" + Amount + "]";
	}

}

package com.springrest.springrest.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class CourseDetails implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String startdate;
	private String enddate;
	private String batch;
	private String duration;
	private String timing;
	private double fees;
	
	private String Ctitle;
	
	
	
	
	public String getCtitle() {
		return Ctitle;
	}
	public void setCtitle(String ctitle) {
		Ctitle = ctitle;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getTiming() {
		return timing;
	}
	public void setTiming(String timing) {
		this.timing = timing;
	}
	public double getFees() {
		return fees;
	}
	public void setFees(double fees) {
		this.fees = fees;
	}
	

	
	

	public CourseDetails(long id, String startdate, String enddate, String batch, String duration, String timing,
			double fees, String ctitle) {
		super();
		this.id = id;
		this.startdate = startdate;
		this.enddate = enddate;
		this.batch = batch;
		this.duration = duration;
		this.timing = timing;
		this.fees = fees;
		Ctitle = ctitle;
	}
	public CourseDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
}
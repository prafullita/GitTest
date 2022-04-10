package com.springrest.springrest.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Modules {

	@Id
	private int moduleId;
	private int courseId;
	private String moduleName;
	
	@Column(length=5000)
	private String description;
	private String duration;
	public Modules() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Modules(int moduleId, int courseId, String moduleName, String description, String duration) {
		super();
		this.moduleId = moduleId;
		this.courseId = courseId;
		this.moduleName = moduleName;
		this.description = description;
		this.duration = duration;
	}
	public int getModuleId() {
		return moduleId;
	}
	public void setModuleId(int moduleId) {
		this.moduleId = moduleId;
	}
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getModuleName() {
		return moduleName;
	}
	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "Modules [moduleId=" + moduleId + ", courseId=" + courseId + ", moduleName=" + moduleName
				+ ", description=" + description + ", duration=" + duration + "]";
	}
	
	
	
	
}

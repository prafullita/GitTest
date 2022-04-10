package com.springrest.springrest.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="tbl_images")
public class Image 
{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="imgId")
	
	private int id;
	
	@Column(name="imgUrl")
	private String imgUrl;
	
	@Column(name="imageName")
	private String imageName;
	
	@Column(name="isCoverPage")
	private boolean isCoverPage=false;
	

	@Column(name="alimg_fk")
	private int alimg_fk;
	
	public Image(int imgId, String imgUrl, String imageName, Boolean isCoverPage) 
	{
		super();
		this.id = imgId;
		this.imgUrl = imgUrl;
		this.imageName = imageName;
		this.isCoverPage = isCoverPage;
	}

	public Image() 
	{
		super();
	}

	public int getImgId() 
	{
		return id;
	}

	public void setImgId(int imgId) 
	{
		this.id = imgId;
	}

	public String getImgUrl() 
	{
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) 
	{
		this.imgUrl = imgUrl;
	}

	public String getImageName() 
	{
		return imageName;
	}

	public void setImageName(String imageName) 
	{
		this.imageName = imageName;
	}

	public boolean getIsCoverPage() 
	{
		return isCoverPage;
	}

	public void setIsCoverPage(boolean isCoverPage) 
	{
		this.isCoverPage = isCoverPage;
	}
	
	public int getAlimg_fk() {
		return alimg_fk;
	}

	public void setAlimg_fk(int alimg_fk) {
		this.alimg_fk = alimg_fk;
	}


	@Override
	public String toString() 
	{
		return "Image [imgId=" + id + ", imgUrl=" + imgUrl + ", imageName=" + imageName + ", isCoverPage="
				+ isCoverPage + ", getImgId()=" + getImgId() + ", getImgUrl()=" + getImgUrl() + ", getImageName()="
				+ getImageName() + ", getIsCoverPage()=" + getIsCoverPage() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
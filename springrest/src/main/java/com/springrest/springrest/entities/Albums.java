package com.springrest.springrest.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tbl_albums")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Albums {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Column(name="AlbumName")
    private String AlbumName;
	
	@Column(name="isVisible")
    private boolean isVisible=true;
	
	
	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn( name = "alimg_fk", referencedColumnName = "id")
	List<Image> images = new ArrayList<>();
	

	public Albums() {
	
	}

	public Albums(int id, String albumName, boolean isVisible) {
		super();
		this.id = id;
		AlbumName = albumName;
		this.isVisible = true;
	}

	public int getId() {
		return id;
	}

	public String getAlbumName() {
		return AlbumName;
	}

	public void setAlbumName(String albumName) {
		AlbumName = albumName;
	}

	public boolean isVisible() {
		return isVisible;
	}

	public void setVisible(boolean isVisible) {
		this.isVisible = true;
	}
		
	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
    
    
}

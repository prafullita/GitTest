package com.springrest.springrest.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import  com.springrest.springrest.entities.Image;


public interface ImageService 
{
	public List<Image> getImage();
	
	public List<Image> getImageByAlbumId(int albumId);
	
	public Image addImg(Image img,MultipartFile file);
		
	public String deleteImage(int imgId);
	
	public List<Object[]> getCoverPages(boolean cp);


	
}

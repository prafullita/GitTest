package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import  com.springrest.springrest.dao.ImageRepository;
import  com.springrest.springrest.entities.Image;


@Service
public class ImageServiceImpl implements ImageService
{
	@Autowired
	private ImageRepository imgRepo;

	@Override
	public Image addImg(Image img, MultipartFile file) 
	{
		imgRepo.save(img);
		return img;
	}

	@Override
	public List<Image> getImage() 
	{
		return imgRepo.findAll();
	}

	@Override
	public String deleteImage(int imgId) {
		Image img = imgRepo.getById(imgId);
		imgRepo.delete(img);
		return "Success";
		
	}

	@Override
	public List<Object[]> getCoverPages(boolean cp) {
		
		return imgRepo.getCoverPages(cp);
	}

	@Override
	public List<Image> getImageByAlbumId(int albumId) {
		// TODO Auto-generated method stub
		return imgRepo.getImageByAlbumId(albumId);
	}

	
	

}

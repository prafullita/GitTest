package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import  com.springrest.springrest.dao.AlbumRepository;
import  com.springrest.springrest.entities.Albums;
//import com.example.finalimage.entities.Image;

@Service
public class AlbumServiceImpl implements AlbumsService {

	@Autowired
	private AlbumRepository albumRepo;
	

	@Override
	public List<Albums> getAlbums() {
		// TODO Auto-generated method stub
		return albumRepo.findAll();
	}

	@Override
	public Albums getAlbumsById(int albumId) {
		// TODO Auto-generated method stub
		return albumRepo.getById(albumId);
	}

	@Override
	public Albums createAlbum(Albums album) {
		// TODO Auto-generated method stub
		return albumRepo.save(album);
	}

	@Override
	public Albums updateAlbums(Albums album) {
		// TODO Auto-generated method stub
	
		return albumRepo.save(album);
	}

	@Override
	public String deleteAlbums(int albumId) {
		Albums entity = albumRepo.getById(albumId);
		albumRepo.delete(entity);
		return "Album Deleted Success";
		
	}



	


}

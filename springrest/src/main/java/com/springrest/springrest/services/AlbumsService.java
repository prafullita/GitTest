package com.springrest.springrest.services;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import  com.springrest.springrest.entities.Albums;
//import com.example.finalimage.entities.Image;


public interface AlbumsService {
	
	public List<Albums> getAlbums();
	
	public Albums getAlbumsById(int albumId);

	public Albums createAlbum(Albums album);

	public Albums updateAlbums(Albums album);
	

	
	@Modifying
	@Query("delete from Images c where c.albumId =: albumId")
	public String deleteAlbums(@Param("albumId") int albumId);
	


}

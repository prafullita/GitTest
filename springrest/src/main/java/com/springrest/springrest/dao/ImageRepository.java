package com.springrest.springrest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import  com.springrest.springrest.entities.Image;



@Repository
public interface ImageRepository extends JpaRepository<Image,Integer>{

	
	@Modifying
	@Query(value = "select i.img_url,a.album_Name,i.is_cover_page,a.id from tbl_images i inner join tbl_albums a on a.id = i.alimg_fk where i.is_Cover_Page = 1;", nativeQuery = true)
	public List<Object[]> getCoverPages(@Param("cp")boolean cp);
	

	@Modifying
	@Query("select c from Image c where c.alimg_fk =:albumId ")
	public List<Image> getImageByAlbumId(@Param("albumId") int id);
	
	
	
	
}

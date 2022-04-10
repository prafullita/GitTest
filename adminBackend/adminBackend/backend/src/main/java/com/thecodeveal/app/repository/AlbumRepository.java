package com.thecodeveal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thecodeveal.app.entities.Albums;


@Repository
public interface AlbumRepository extends JpaRepository<Albums,Integer>{

//	Albums getById(int albumId);

	
	
}

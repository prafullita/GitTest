package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import  com.springrest.springrest.entities.Albums;


@Repository
public interface AlbumRepository extends JpaRepository<Albums,Integer>{

	
	
}

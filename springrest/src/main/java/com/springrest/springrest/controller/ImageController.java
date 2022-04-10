package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import  com.springrest.springrest.entities.Albums;
import  com.springrest.springrest.entities.Image;
import  com.springrest.springrest.helper.ImageHelper;
import  com.springrest.springrest.services.AlbumsService;
import  com.springrest.springrest.services.ImageService;


@CrossOrigin("*")
@RestController
public class ImageController 
{
	@Autowired
	private ImageService imgService;
	
	@Autowired
	private ImageHelper imgHelper;
	
	@Autowired
	private AlbumsService albumService;
	
	@GetMapping("/getImage")
	public List<Image> getImage()
	{
		return this.imgService.getImage();
	}
	
	//get all cover pages
	@GetMapping("/getCp")
	public List<Object[]> getCoverPages() {
		
		return this.imgService.getCoverPages(true);

	}
	
	@PostMapping("/createAlbum")
	public Albums CreateAlbum(@RequestPart String albumName) {	
		try {
			imgHelper.CreateFolder(albumName);
			Albums album = new Albums();
			album.setAlbumName(albumName);
			albumService.createAlbum(album);
			return album;
		}catch(Exception ee) {
			System.out.println("Folder Creation Exception " + ee.getMessage());
			return null;
		}	
	}
	
	
	
	// get all students
		@GetMapping("/getAlbums")
		public List<Albums> getAlbums() {
			return this.albumService.getAlbums();
		}
		
		@GetMapping("/getAlbumsById/{albumId}")
		public Albums getAlbumsById(@PathVariable int albumId) {
			return this.albumService.getAlbumsById(albumId);
		}
		
		

	// get Albums by Id
	@GetMapping("/getAlbums/{albumId}")
		public List<Image> getImageByAlbumId(@PathVariable int albumId) {
			return this.imgService.getImageByAlbumId(albumId);
		}
		
	@RequestMapping(path = "/addImage", method =RequestMethod.POST , consumes = { "multipart/form-data" })
	public Image addImage(@RequestPart Image img,@RequestPart MultipartFile file,@RequestPart String albumaName)
	{
		System.out.println(file.getContentType());
		
		try {
			if (file.isEmpty()) {
				System.out.println("File is Empty");
			} else {
				System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/Images//"+albumaName+"/").path(file.getOriginalFilename()).toUriString());
				imgHelper.uploadFile(file,albumaName);		
				
				img.setImgUrl(ServletUriComponentsBuilder.fromCurrentContextPath().path("/Images//"+albumaName+"/").path(file.getOriginalFilename()).toUriString());
			}
		} catch (Exception ee) {
			System.out.println("File Exception " + ee.getMessage());
		}
		
		System.out.println(img);
		return this.imgService.addImg(img,file);
	}
	
	// Delete images
	@DeleteMapping(value = "delImg/{imgId}", headers = "Accept=application/json")  
	 public String deleteImage(@PathVariable int imgId)
	 {
		imgService.deleteImage(imgId);
		return "Image deleted Successfully";
	 }
	
	//Delete Albums
	@DeleteMapping(value = "delAlbum/{albumId}", headers = "Accept=application/json")  
	 public String removepro(@PathVariable int albumId)
	 {		
		imgService.deleteImage(albumId);
		albumService.deleteAlbums(albumId);
		return "Album Deleted Successfully";
	 }
	
	
	

}

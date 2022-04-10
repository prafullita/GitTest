package com.thecodeveal.app.controllers;

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

import com.thecodeveal.app.entities.Albums;
import com.thecodeveal.app.entities.Image;
import com.thecodeveal.app.helper.ImageHelper;
import com.thecodeveal.app.services.AlbumsService;
import com.thecodeveal.app.services.ImageService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ImageController 
{
	@Autowired
	private ImageService imgService;
	
	@Autowired
	private ImageHelper imgHelper;
	
	@Autowired
	private AlbumsService albumService;
	
	@GetMapping("/admin/getImage")
	public List<Image> getImage()
	{
		return this.imgService.getImage();
	}
	
	//get all cover pages
	@GetMapping("/admin/getCp")
	public List<Object[]> getCoverPages() {
		
		return this.imgService.getCoverPages(true);

	}
	
	@PostMapping("/admin/createAlbum")
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
		@GetMapping("/admin/getAlbums")
		public List<Albums> getAlbums() {
			return this.albumService.getAlbums();
		}
		
		@GetMapping("/admin/getAlbumsById/{albumId}")
		public Albums getAlbumsById(@PathVariable int albumId) {
			return this.albumService.getAlbumsById(albumId);
		}
		
		

	// get Albums by Id
	@GetMapping("/admin/getAlbums/{albumId}")
		public List<Image> getImageByAlbumId(@PathVariable int albumId) {
			return this.imgService.getImageByAlbumId(albumId);
		}
		
	@RequestMapping(path = "/admin/addImage", method =RequestMethod.POST , consumes = { "multipart/form-data" })
	public Image addImage(@RequestPart Image img,@RequestPart MultipartFile file,@RequestPart String albumaName)
	{
		System.out.println(file.getContentType());
		
		try {
			if (file.isEmpty()) {
				System.out.println("File is Empty");
			} else {
				System.out.println(ServletUriComponentsBuilder.fromCurrentContextPath().path("/Images//"+albumaName).path(file.getOriginalFilename()).toUriString());
				imgHelper.uploadFile(file,albumaName);		
				
				img.setImgUrl(ServletUriComponentsBuilder.fromCurrentContextPath().path("/Images//"+albumaName).path(file.getOriginalFilename()).toUriString());
			}
		} catch (Exception ee) {
			System.out.println("File Exception " + ee.getMessage());
		}
		
		System.out.println(img);
		return this.imgService.addImg(img,file);
	}
	
	// Delete images
	@DeleteMapping(value = "/admin/delImg/{imgId}", headers = "Accept=application/json")  
	 public String deleteImage(@PathVariable int imgId)
	 {
		imgService.deleteImage(imgId);
		return "Image deleted Successfully";
	 }
	
	//Delete Albums
	@DeleteMapping(value = "/admin/delAlbum/{albumId}", headers = "Accept=application/json")  
	 public String removepro(@PathVariable int albumId)
	 {		
		imgService.deleteImage(albumId);
		albumService.deleteAlbums(albumId);
		return "Album Deleted Successfully";
	 }
	
	
	

}

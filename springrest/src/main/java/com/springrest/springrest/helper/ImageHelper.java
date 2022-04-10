package com.springrest.springrest.helper;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class ImageHelper {
	public final String UPLOAD_DIR = new ClassPathResource("static/Images/").getFile().getAbsolutePath();

	public ImageHelper() throws IOException {

	}

	public void CreateFolder(String name) {
		boolean directory = new File(UPLOAD_DIR).mkdirs();
		String path = UPLOAD_DIR+"\\"+name;
//		boolean success = false;
		if (directory) {
			System.out.println("Directory already exists ...");
		} else {
			System.out.println("Directory not exists, creating now");
		
			try {
			File file = new File(path);
			boolean bool = file.mkdir();
			
			System.out.println(file+ " --------file"+"....."+bool);
			}
			catch (Exception ee) {
				System.out.println("CreateFolder Exception  "+ee.getMessage());
			}	
		}

	}

	public boolean uploadFile(MultipartFile multipartFile, String AlbumName) {
		boolean f = false;

		try {

//			System.out.println(UPLOAD_DIR+"\\"+AlbumName);
			
			String finalDir = (UPLOAD_DIR+"\\"+AlbumName);
			System.out.println(finalDir);

			Files.copy(multipartFile.getInputStream(),
					Paths.get(finalDir + File.separator + multipartFile.getOriginalFilename()),
					StandardCopyOption.REPLACE_EXISTING);

			f = true;

		} catch (Exception e) {
			e.printStackTrace();
		}
		return f;
	}

}

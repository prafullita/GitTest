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
public class ImageUploadHelper {

    public final String UPLOAD_DIR=new ClassPathResource("static/Students/").getFile().getAbsolutePath();
//    public final String UPLOAD_DIR_Sign=new ClassPathResource("static/Signature/").getFile().getAbsolutePath();
    
    public ImageUploadHelper()throws IOException
    {

    }

    public boolean uploadFile(MultipartFile multipartFile)
    {
        boolean f=false;

        try {
        	System.out.println(UPLOAD_DIR);
//        	System.out.println(UPLOAD_DIR_Sign);
        	
            Files.copy(multipartFile.getInputStream(),  Paths.get(UPLOAD_DIR+File.separator+multipartFile.getOriginalFilename()) ,StandardCopyOption.REPLACE_EXISTING) ;
//            Files.copy(multipartFile.getInputStream(),  Paths.get(UPLOAD_DIR_Sign+File.separator+multipartFile.getOriginalFilename()) ,StandardCopyOption.REPLACE_EXISTING) ;
            f=true;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return f;
    }
}

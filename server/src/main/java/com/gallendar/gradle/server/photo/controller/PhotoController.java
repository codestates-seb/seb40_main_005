package com.gallendar.gradle.server.photo.controller;

import com.gallendar.gradle.server.photo.service.S3UploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * ImageFile을 S3 클라우드로 업로드
 */
@RequiredArgsConstructor
@Controller
@RequestMapping("/photo")
public class PhotoController {

    private final S3UploadService s3UploadService;

    @PostMapping("/upload")
    public String uploadPhoto(@RequestPart("images") MultipartFile multipartFile) throws IOException{
        return s3UploadService.upload(multipartFile);
    }
}

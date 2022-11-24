package com.gallendar.gradle.server.photo.controller;

import com.gallendar.gradle.server.photo.dto.PhotoCreateRequestDto;
import com.gallendar.gradle.server.photo.service.S3UploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * ImageFile을 S3 클라우드로 업로드
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/photo")
public class PhotoController {

    private final S3UploadService s3UploadService;

    @PostMapping("/upload")
    public String uploadPhoto(@RequestPart("images") MultipartFile multipartFile,
                              @RequestBody PhotoCreateRequestDto requestDto) throws IOException{
        s3UploadService.savePhoto(requestDto);
        return s3UploadService.upload(multipartFile);
    }
}

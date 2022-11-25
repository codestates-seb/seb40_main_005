package com.gallendar.gradle.server.photo.service;

import com.gallendar.gradle.server.photo.dto.PhotoCreateRequestDto;
import com.gallendar.gradle.server.photo.dto.PhotoUpdateRequestDto;
import org.springframework.web.multipart.MultipartFile;

public interface PhotoService {

    String upload(MultipartFile multipartFile);
    public void savePhoto(PhotoCreateRequestDto requestDto);
    public String update(Long photoId, PhotoUpdateRequestDto requestDto);
    public String find(Long photoId);
    public void delete(Long photoId);
}
package com.gallendar.gradle.server.photo.dto;

import com.gallendar.gradle.server.photo.entity.Photo;


public class PhotoResponseDto {
    private Long photoId;
    private String fileName;
    private String path;

    public PhotoResponseDto(Photo entity){
        this.photoId = entity.getPhotoId();
        this.fileName = entity.getFileName();
        this.path = entity.getPath();
    }
}
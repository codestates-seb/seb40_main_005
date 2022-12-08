package com.gallendar.gradle.server.photo.dto;

import com.gallendar.gradle.server.photo.entity.Photo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class PhotoCreateRequestDto {

    @NotBlank
    private String fileName;
    @NotBlank
    private String path;

    @Builder
    public PhotoCreateRequestDto(String fileName, String path){
        this.fileName = fileName;
        this.path = path;
    }

    public Photo toEntity(){
        return Photo.builder()
                .fileName(fileName)
                .path(path)
                .build();
    }

}


package com.gallendar.gradle.server.photo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PhotoUpdateRequestDto {
    private String path;

    @Builder
    public PhotoUpdateRequestDto(String path){
        this.path = path;
    }

    public void update(String path){
        this.path = path;
    }
}
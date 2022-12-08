package com.gallendar.gradle.server.photo.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
public class Photo {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long photoId;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false)
    private String path;

    @Builder
    public Photo(String fileName, String path){
        this.fileName = fileName;
        this.path = path;
    }
}

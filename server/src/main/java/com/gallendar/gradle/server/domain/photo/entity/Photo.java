package com.gallendar.gradle.server.domain.photo.entity;

import lombok.Builder;
import org.springframework.data.annotation.Id;

import javax.persistence.GeneratedValue;

public class Photo {
    /*
    사진원본 데이터는 로컬에 저장하고, DB에는 파일명만 저장한다.
    파일은 제외하고 오직 이미지만 취급하기.
    1. 웹에서 파일 정보 전송
    2. 전송된 파일을 새로운 이름으로 저장
    3. 실제 파일은 로컬에 저장 후 새로운 이름을 DB에 저장
    4. 후에 게시글을 불러올 때 게시글 번호에 맞는 이미지 이름을 DB에서 불러오기
         */
    @Id @GeneratedValue
    private Long photoId;

    private String fileName;

    private String path;

    @Builder
    public Photo(Long photoId, String fileName, String path){
        this.photoId = photoId;
        this.fileName = fileName;
        this.path = path;
    }
}

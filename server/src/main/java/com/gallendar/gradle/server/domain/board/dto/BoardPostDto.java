package com.gallendar.gradle.server.domain.board.dto;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

public class BoardPostDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title; // 게시글 제목

    @NotBlank(message = "내용을 입력하세요.")
    private String content; // 게시글 본문

    @NotBlank(message = "사진을 첨부하세요")
    private MultipartFile photo;

    private String music;
}

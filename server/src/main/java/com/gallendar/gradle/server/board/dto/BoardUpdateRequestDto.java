package com.gallendar.gradle.server.board.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class BoardUpdateRequestDto {
    private String title;
    private String content;
    private String music;
    private String url;
    private MultipartFile photo;
    private List<String> tags;
    private String categoryTitle;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate created;
}




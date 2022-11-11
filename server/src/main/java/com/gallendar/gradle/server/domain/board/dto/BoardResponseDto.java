package com.gallendar.gradle.server.domain.board.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private MultipartFile photo;
    private String music;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}

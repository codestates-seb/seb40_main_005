package com.gallendar.gradle.server.board.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
public class BoardUpdateRequestDto {
    private String title;
    private String content;
    private String music;
    private MultipartFile photo;
    private String memberId;

    @Builder
    public BoardUpdateRequestDto(String title, String content, String music){
        this.title = title;
        this.content = content;
        this.music = music;
    }

    public void update(String title, String content, String music) {
        this.title = title;
        this.content = content;
        this.music = music;
    }

}




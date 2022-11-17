package com.gallendar.gradle.server.board.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BoardUpdateRequestDto {
    private String title;
    private String content;
    private String music;

    @Builder
    public BoardUpdateRequestDto(String title, String content, String music){
        this.title = title;
        this.content = content;
        this.music = music;
    }
}

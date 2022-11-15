package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import lombok.Getter;

@Getter
public class BoardResponseDto {

    private Long boardId;
    private String title;
    private String content;
    private String music;

    public BoardResponseDto(Board entity){
        this.boardId = entity.getBoardId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.music = entity.getMusic();
    }
}

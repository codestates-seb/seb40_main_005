package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BoardListResponseDto {
    private Long boardId;
    private String title;
    private String content;
    private String music;
    private Long photoId;
    private LocalDateTime modefiedDate;

    public BoardListResponseDto(Board entity){
        this.boardId = entity.getBoardId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.music = entity.getMusic();
        this.photoId = entity.getPhotoId();
        this.modefiedDate = entity.getUpdatedAt();
    }
}

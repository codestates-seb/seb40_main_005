package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class BoardResponseDto {

    private Long boardId;
    private String title;
    private String content;
    private String music;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public BoardResponseDto(Board entity){
        this.boardId = entity.getBoardId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.music = entity.getMusic();
        this.createdAt = entity.getCreatedAt();
        this.updatedAt = entity.getUpdatedAt();
    }


}

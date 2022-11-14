package com.gallendar.gradle.server.domain.board.dto;

import com.gallendar.gradle.server.domain.board.entity.Board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class BoardRequestDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title;

    @NotBlank(message = "내용을 입력하세요.")
    private String content;
    private String music;

    @Builder
    public BoardRequestDto(String title, String content, String music){
        this.title = title;
        this.content = content;
        this.music = music;
    }

    public Board toEntity(){
        return Board.builder()
                .title(title)
                .content(content)
                .music(music)
                .build();
    }
}

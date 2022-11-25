package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.photo.entity.Photo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Getter
@NoArgsConstructor
public class BoardCreateRequestDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title;

    @NotBlank(message = "내용을 입력하세요.")
    private String content;
    private String music;
    private Photo photo;


    @Builder
    public BoardCreateRequestDto(String title, String content, String music, Photo photo){
        this.title = title;
        this.content = content;
        this.music = music;
        this.photo = photo;

    }

    public Board toEntity(){
        return Board.builder()
                .title(title)
                .content(content)
                .music(music)
                .photo(photo)
                .build();
    }
}
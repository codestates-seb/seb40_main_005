package com.gallendar.gradle.server.board.dto;

import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.photo.entity.Photo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class BoardCreateRequestDto {

    @NotBlank(message = "제목을 입력하세요.")
    private String title;

    @NotBlank(message = "내용을 입력하세요.")
    private String content;
    private String music;
    private MultipartFile photo;
    private String memberId;
    private String category;
    private List<String> tags;


    @Builder
    public BoardCreateRequestDto(String title, String content, String music){
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
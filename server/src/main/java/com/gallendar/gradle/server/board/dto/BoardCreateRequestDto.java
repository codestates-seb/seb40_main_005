package com.gallendar.gradle.server.board.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gallendar.gradle.server.board.entity.Board;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.photo.entity.Photo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDate;
import java.time.LocalDateTime;
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
    private String url;
    private MultipartFile photo;
    private String categoryTitle;
    private List<String> tags;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate created;
    public Board toEntity() {
        return Board.builder()
                .title(title)
                .content(content)
                .music(music)
                .url(url)
                .created(created)
                .build();
    }
}
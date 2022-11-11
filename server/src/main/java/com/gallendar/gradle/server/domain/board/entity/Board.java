package com.gallendar.gradle.server.domain.board.entity;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Getter
@NoArgsConstructor
@Entity
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(length = 100, nullable = false)
    private MultipartFile photo;

    @Column(nullable = true)
    private String music;

    @Builder
    public Board(Long boardId, String title, String content, MultipartFile photo, String music){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.photo = photo;
        this.music = music;
    }




}

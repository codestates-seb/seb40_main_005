package com.gallendar.gradle.server.board.entity;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;

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

    @Column(nullable = true)
    private String music;

    @Builder
    public Board(Long boardId, String title, String content, String music){
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.music = music;
    }

    public void update(String title, String content, String music){
        this.title = title;
        this.content = content;
        this.music = music;
    }



}

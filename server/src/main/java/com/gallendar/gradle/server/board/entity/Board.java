package com.gallendar.gradle.server.board.entity;

import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.tags.domain.BoardTags;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Getter
@NoArgsConstructor
@Entity
public class Board extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long boardId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = true)
    private String music;
    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private List<BoardTags> boardTags;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "members_id")
    private Members members;

    @Builder
    public Board(Long boardId, String title, String content, String music) {
        this.boardId = boardId;
        this.title = title;
        this.content = content;
        this.music = music;
    }

    @Builder
    public Board(String title, String content, String music) {
        this.title = title;
        this.content = content;
        this.music = music;
    }

    public void update(String title, String content, String music) {
        this.title = title;
        this.content = content;
        this.music = music;
    }

    public void setMembers(Members members) {
        this.members = members;
    }
}

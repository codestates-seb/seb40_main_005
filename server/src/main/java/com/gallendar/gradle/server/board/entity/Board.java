package com.gallendar.gradle.server.board.entity;

import com.gallendar.gradle.server.category.domain.Category;
import com.gallendar.gradle.server.global.auditing.BaseTimeEntity;
import com.gallendar.gradle.server.members.domain.Members;
import com.gallendar.gradle.server.photo.entity.Photo;
import com.gallendar.gradle.server.tags.domain.BoardTags;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
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
    @Column
    private String url;
    @Column
    private LocalDate created;
    @OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
    private List<BoardTags> boardTags;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "members_id")
    private Members members;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "photo_id")
    private Photo photo;


    @Builder
    public Board(String title, String content, String music, String url,LocalDate created) {
        this.title = title;
        this.content = content;
        this.music = music;
        this.url = url;
        this.created=created;
    }

    public void update(String title, String content, String music,String url,LocalDate created) {
        this.title = title;
        this.content = content;
        this.music = music;
        this.url=url;
        this.created=created;
    }

    public void setMembers(Members members) {
        this.members = members;
    }

    public void setPhoto(Photo photo) {
        this.photo = photo;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setBoardTags(List<BoardTags> boardTags) {
        this.boardTags = boardTags;
    }
}

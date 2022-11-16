package com.gallendar.gradle.server.tags.domain;

import com.gallendar.gradle.server.board.entity.Board;

import javax.persistence.*;

@Entity
public class BoardTags {
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "tags_id")
    private Tags tags;
}
